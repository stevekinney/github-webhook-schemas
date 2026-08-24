import exampleIndex from '@octokit/webhooks-examples/api.github.com/index.json';
import { describe, expect, expectTypeOf, it } from 'bun:test';
import { z } from 'zod';

import { deepPartial } from './deep-partial.js';
import { createPullRequestSynchronizeEvent } from './fixtures/index.js';
import { schemas } from './registry.js';
import { PullRequestReviewRequestedEventSchema } from './schemas/pull-request-review-requested-event.js';
import { isRepository, RepositorySchema } from './schemas/shared/repository.js';

type ExampleEntry = { name: string; examples?: unknown[] };

// resolveJsonModule leaves JSON imports as `any`; narrow once at the boundary.
const EXAMPLES = exampleIndex as ExampleEntry[];


describe('spec-required fields omitted by GitHub (stevekinney/github-webhook-schemas#8)', () => {
  it('accepts a repository object without custom_properties', () => {
    const repository = createPullRequestSynchronizeEvent().repository;
    const { custom_properties: _omitted, ...withoutCustomProperties } = repository;

    const result = RepositorySchema.safeParse(withoutCustomProperties);
    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.custom_properties).toEqual({});
    }
  });

  it('narrows guards to accepted input without claiming defaults were applied', () => {
    const repository = createPullRequestSynchronizeEvent().repository;
    const { custom_properties: _omitted, ...withoutCustomProperties } = repository;
    const candidate: unknown = withoutCustomProperties;

    if (!isRepository(candidate)) {
      throw new Error('Expected repository input to pass the guard');
    }

    expectTypeOf(candidate).toEqualTypeOf<z.input<typeof RepositorySchema>>();
    expect(candidate.custom_properties).toBeUndefined();
    expect('custom_properties' in candidate).toBe(false);
  });

  it('accepts pull_request deliveries with nested repos missing custom_properties', () => {
    const event = createPullRequestSynchronizeEvent();
    // Fixture unions may resolve head.repo/base.repo to null; reuse the
    // top-level repository shape for both sides, minus custom_properties.
    const { custom_properties: _head, ...headRepo } = event.repository;
    const { custom_properties: _base, ...baseRepo } = event.repository;
    const payload = {
      ...event,
      pull_request: {
        ...event.pull_request,
        head: { ...event.pull_request.head, repo: { ...headRepo } },
        base: { ...event.pull_request.base, repo: { ...baseRepo } },
      },
    };

    const result = schemas.get('pull_request').safeParse(payload);
    expect(result.success).toBe(true);
  });
});

describe('deepPartial', () => {
  it('accepts payloads with deeply missing properties', () => {
    const schema = deepPartial(schemas.get('pull_request'));
    expect(schema.safeParse({}).success).toBe(true);
    expect(schema.safeParse({ pull_request: {} }).success).toBe(true);
  });

  it('still rejects present-but-invalid values', () => {
    const schema = deepPartial(schemas.get('pull_request'));
    expect(schema.safeParse({ pull_request: { number: 'not-a-number' } }).success).toBe(false);
  });

  it('validates fields unique to another union branch', () => {
    const directSchema = deepPartial(PullRequestReviewRequestedEventSchema);
    const registrySchema = deepPartial(schemas.get('pull_request'));

    expect(directSchema.safeParse({ requested_team: 123 }).success).toBe(false);
    expect(registrySchema.safeParse({ requested_team: 123 }).success).toBe(false);
    expect(directSchema.safeParse({ requested_team: {} }).success).toBe(true);
    expect(directSchema.safeParse({ unknown_to_every_branch: true }).success).toBe(true);
  });

  it('preserves tuple positions and length', () => {
    const schema = deepPartial(z.tuple([z.literal('*'), z.object({ value: z.number() })]));

    expectTypeOf<z.infer<typeof schema>>().toEqualTypeOf<['*', { value?: number }]>();
    expect(schema.safeParse(['*', {}]).success).toBe(true);
    expect(schema.safeParse(['*']).success).toBe(false);
  });

  /**
   * Every official example payload parses through the loose variant, except
   * examples whose *values* contradict @octokit/webhooks-schemas@7.6.1.
   * Those are tracked upstream in octokit/webhooks#1047; entries here should
   * be removed as upstream fixes them.
   */
  const UPSTREAM_VALUE_MISMATCHES = new Set([
    'code_scanning_alert[0]',
    'release[0]',
    'repository_vulnerability_alert[0]',
    'workflow_run[0]',
  ]);

  it('validates all official example payloads except known upstream mismatches', () => {
    const failures: string[] = [];

    for (const entry of EXAMPLES) {
      let schema;
      try {
        schema = schemas.get(entry.name as never);
      } catch {
        continue;
      }
      for (const [index, payload] of (entry.examples ?? []).entries()) {
        if (deepPartial(schema).safeParse(payload).success) continue;
        const key = `${entry.name}[${index}]`;
        if (!UPSTREAM_VALUE_MISMATCHES.has(key)) {
          failures.push(key);
        }
      }
    }

    expect(failures).toEqual([]);
  });
});

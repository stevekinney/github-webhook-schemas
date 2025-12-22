/**
 * Auto-generated tests for RepositoryPublicizedEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import {
  type RepositoryPublicizedEvent,
  RepositoryPublicizedEventSchema,
} from './repository-publicized-event.js';

describe('RepositoryPublicizedEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(RepositoryPublicizedEventSchema).toBeDefined();
    expect(typeof RepositoryPublicizedEventSchema.parse).toBe('function');
    expect(typeof RepositoryPublicizedEventSchema.safeParse).toBe('function');
  });

  it('should reject invalid data', () => {
    const result = RepositoryPublicizedEventSchema.safeParse({ invalid: 'data' });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _RepositoryPublicizedEventTest = RepositoryPublicizedEvent;

/**
 * Auto-generated tests for ProjectsV2ItemReorderedEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import {
  type ProjectsV2ItemReorderedEvent,
  ProjectsV2ItemReorderedEventSchema,
} from './projects-v2-item-reordered-event.js';

describe('ProjectsV2ItemReorderedEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(ProjectsV2ItemReorderedEventSchema).toBeDefined();
    expect(typeof ProjectsV2ItemReorderedEventSchema.parse).toBe('function');
    expect(typeof ProjectsV2ItemReorderedEventSchema.safeParse).toBe('function');
  });

  it('should reject invalid data', () => {
    const result = ProjectsV2ItemReorderedEventSchema.safeParse({ invalid: 'data' });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _ProjectsV2ItemReorderedEventTest = ProjectsV2ItemReorderedEvent;

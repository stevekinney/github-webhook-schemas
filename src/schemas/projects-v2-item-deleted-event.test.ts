/**
 * Auto-generated tests for ProjectsV2ItemDeletedEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import {
  type ProjectsV2ItemDeletedEvent,
  ProjectsV2ItemDeletedEventSchema,
} from './projects-v2-item-deleted-event.js';

describe('ProjectsV2ItemDeletedEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(ProjectsV2ItemDeletedEventSchema).toBeDefined();
    expect(typeof ProjectsV2ItemDeletedEventSchema.parse).toBe('function');
    expect(typeof ProjectsV2ItemDeletedEventSchema.safeParse).toBe('function');
  });

  it('should reject invalid data', () => {
    const result = ProjectsV2ItemDeletedEventSchema.safeParse({ invalid: 'data' });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _ProjectsV2ItemDeletedEventTest = ProjectsV2ItemDeletedEvent;

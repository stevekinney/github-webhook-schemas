/**
 * Auto-generated tests for ProjectDeletedEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import {
  type ProjectDeletedEvent,
  ProjectDeletedEventSchema,
} from './project-deleted-event.js';

describe('ProjectDeletedEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(ProjectDeletedEventSchema).toBeDefined();
    expect(typeof ProjectDeletedEventSchema.parse).toBe('function');
    expect(typeof ProjectDeletedEventSchema.safeParse).toBe('function');
  });

  it('should reject invalid data', () => {
    const result = ProjectDeletedEventSchema.safeParse({ invalid: 'data' });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _ProjectDeletedEventTest = ProjectDeletedEvent;

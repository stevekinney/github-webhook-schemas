/**
 * Auto-generated tests for ProjectColumnDeletedEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import {
  type ProjectColumnDeletedEvent,
  ProjectColumnDeletedEventSchema,
} from './project-column-deleted-event.js';

describe('ProjectColumnDeletedEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(ProjectColumnDeletedEventSchema).toBeDefined();
    expect(typeof ProjectColumnDeletedEventSchema.parse).toBe('function');
    expect(typeof ProjectColumnDeletedEventSchema.safeParse).toBe('function');
  });

  it('should reject invalid data', () => {
    const result = ProjectColumnDeletedEventSchema.safeParse({ invalid: 'data' });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _ProjectColumnDeletedEventTest = ProjectColumnDeletedEvent;

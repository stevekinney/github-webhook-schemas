/**
 * Auto-generated tests for ProjectCardDeletedEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import {
  type ProjectCardDeletedEvent,
  ProjectCardDeletedEventSchema,
} from './project-card-deleted-event.js';

describe('ProjectCardDeletedEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(ProjectCardDeletedEventSchema).toBeDefined();
    expect(typeof ProjectCardDeletedEventSchema.parse).toBe('function');
    expect(typeof ProjectCardDeletedEventSchema.safeParse).toBe('function');
  });

  it('should reject invalid data', () => {
    const result = ProjectCardDeletedEventSchema.safeParse({ invalid: 'data' });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _ProjectCardDeletedEventTest = ProjectCardDeletedEvent;

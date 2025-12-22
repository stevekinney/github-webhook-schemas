/**
 * Auto-generated tests for ProjectReopenedEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import {
  type ProjectReopenedEvent,
  ProjectReopenedEventSchema,
} from './project-reopened-event.js';

describe('ProjectReopenedEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(ProjectReopenedEventSchema).toBeDefined();
    expect(typeof ProjectReopenedEventSchema.parse).toBe('function');
    expect(typeof ProjectReopenedEventSchema.safeParse).toBe('function');
  });

  it('should reject invalid data', () => {
    const result = ProjectReopenedEventSchema.safeParse({ invalid: 'data' });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _ProjectReopenedEventTest = ProjectReopenedEvent;

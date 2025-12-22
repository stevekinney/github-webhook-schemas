/**
 * Auto-generated tests for ProjectEditedEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import {
  type ProjectEditedEvent,
  ProjectEditedEventSchema,
} from './project-edited-event.js';

describe('ProjectEditedEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(ProjectEditedEventSchema).toBeDefined();
    expect(typeof ProjectEditedEventSchema.parse).toBe('function');
    expect(typeof ProjectEditedEventSchema.safeParse).toBe('function');
  });

  it('should reject invalid data', () => {
    const result = ProjectEditedEventSchema.safeParse({ invalid: 'data' });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _ProjectEditedEventTest = ProjectEditedEvent;

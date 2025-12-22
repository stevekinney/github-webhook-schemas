/**
 * Auto-generated tests for ProjectCreatedEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import {
  type ProjectCreatedEvent,
  ProjectCreatedEventSchema,
} from './project-created-event.js';

describe('ProjectCreatedEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(ProjectCreatedEventSchema).toBeDefined();
    expect(typeof ProjectCreatedEventSchema.parse).toBe('function');
    expect(typeof ProjectCreatedEventSchema.safeParse).toBe('function');
  });

  it('should reject invalid data', () => {
    const result = ProjectCreatedEventSchema.safeParse({ invalid: 'data' });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _ProjectCreatedEventTest = ProjectCreatedEvent;

/**
 * Auto-generated tests for ProjectColumnCreatedEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import {
  type ProjectColumnCreatedEvent,
  ProjectColumnCreatedEventSchema,
} from './project-column-created-event.js';

describe('ProjectColumnCreatedEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(ProjectColumnCreatedEventSchema).toBeDefined();
    expect(typeof ProjectColumnCreatedEventSchema.parse).toBe('function');
    expect(typeof ProjectColumnCreatedEventSchema.safeParse).toBe('function');
  });

  it('should reject invalid data', () => {
    const result = ProjectColumnCreatedEventSchema.safeParse({ invalid: 'data' });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _ProjectColumnCreatedEventTest = ProjectColumnCreatedEvent;

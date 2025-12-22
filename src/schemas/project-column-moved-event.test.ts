/**
 * Auto-generated tests for ProjectColumnMovedEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import {
  type ProjectColumnMovedEvent,
  ProjectColumnMovedEventSchema,
} from './project-column-moved-event.js';

describe('ProjectColumnMovedEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(ProjectColumnMovedEventSchema).toBeDefined();
    expect(typeof ProjectColumnMovedEventSchema.parse).toBe('function');
    expect(typeof ProjectColumnMovedEventSchema.safeParse).toBe('function');
  });

  it('should reject invalid data', () => {
    const result = ProjectColumnMovedEventSchema.safeParse({ invalid: 'data' });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _ProjectColumnMovedEventTest = ProjectColumnMovedEvent;

/**
 * Auto-generated tests for ProjectColumnEditedEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import {
  type ProjectColumnEditedEvent,
  ProjectColumnEditedEventSchema,
} from './project-column-edited-event.js';

describe('ProjectColumnEditedEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(ProjectColumnEditedEventSchema).toBeDefined();
    expect(typeof ProjectColumnEditedEventSchema.parse).toBe('function');
    expect(typeof ProjectColumnEditedEventSchema.safeParse).toBe('function');
  });

  it('should reject invalid data', () => {
    const result = ProjectColumnEditedEventSchema.safeParse({ invalid: 'data' });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _ProjectColumnEditedEventTest = ProjectColumnEditedEvent;

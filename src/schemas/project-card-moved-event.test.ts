/**
 * Auto-generated tests for ProjectCardMovedEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import {
  type ProjectCardMovedEvent,
  ProjectCardMovedEventSchema,
} from './project-card-moved-event.js';

describe('ProjectCardMovedEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(ProjectCardMovedEventSchema).toBeDefined();
    expect(typeof ProjectCardMovedEventSchema.parse).toBe('function');
    expect(typeof ProjectCardMovedEventSchema.safeParse).toBe('function');
  });

  it('should reject invalid data', () => {
    const result = ProjectCardMovedEventSchema.safeParse({ invalid: 'data' });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _ProjectCardMovedEventTest = ProjectCardMovedEvent;

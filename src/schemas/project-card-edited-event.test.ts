/**
 * Auto-generated tests for ProjectCardEditedEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import {
  type ProjectCardEditedEvent,
  ProjectCardEditedEventSchema,
} from './project-card-edited-event.js';

describe('ProjectCardEditedEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(ProjectCardEditedEventSchema).toBeDefined();
    expect(typeof ProjectCardEditedEventSchema.parse).toBe('function');
    expect(typeof ProjectCardEditedEventSchema.safeParse).toBe('function');
  });

  it('should reject invalid data', () => {
    const result = ProjectCardEditedEventSchema.safeParse({ invalid: 'data' });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _ProjectCardEditedEventTest = ProjectCardEditedEvent;

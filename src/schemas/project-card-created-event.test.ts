/**
 * Auto-generated tests for ProjectCardCreatedEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import {
  type ProjectCardCreatedEvent,
  ProjectCardCreatedEventSchema,
} from './project-card-created-event.js';

describe('ProjectCardCreatedEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(ProjectCardCreatedEventSchema).toBeDefined();
    expect(typeof ProjectCardCreatedEventSchema.parse).toBe('function');
    expect(typeof ProjectCardCreatedEventSchema.safeParse).toBe('function');
  });

  it('should reject invalid data', () => {
    const result = ProjectCardCreatedEventSchema.safeParse({ invalid: 'data' });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _ProjectCardCreatedEventTest = ProjectCardCreatedEvent;

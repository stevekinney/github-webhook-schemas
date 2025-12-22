/**
 * Auto-generated tests for ProjectClosedEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import {
  type ProjectClosedEvent,
  ProjectClosedEventSchema,
} from './project-closed-event.js';

describe('ProjectClosedEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(ProjectClosedEventSchema).toBeDefined();
    expect(typeof ProjectClosedEventSchema.parse).toBe('function');
    expect(typeof ProjectClosedEventSchema.safeParse).toBe('function');
  });

  it('should reject invalid data', () => {
    const result = ProjectClosedEventSchema.safeParse({ invalid: 'data' });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _ProjectClosedEventTest = ProjectClosedEvent;

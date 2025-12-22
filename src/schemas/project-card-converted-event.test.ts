/**
 * Auto-generated tests for ProjectCardConvertedEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import {
  type ProjectCardConvertedEvent,
  ProjectCardConvertedEventSchema,
} from './project-card-converted-event.js';

describe('ProjectCardConvertedEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(ProjectCardConvertedEventSchema).toBeDefined();
    expect(typeof ProjectCardConvertedEventSchema.parse).toBe('function');
    expect(typeof ProjectCardConvertedEventSchema.safeParse).toBe('function');
  });

  it('should reject invalid data', () => {
    const result = ProjectCardConvertedEventSchema.safeParse({ invalid: 'data' });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _ProjectCardConvertedEventTest = ProjectCardConvertedEvent;

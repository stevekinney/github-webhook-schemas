/**
 * Auto-generated tests for ProjectsV2ItemRestoredEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import {
  type ProjectsV2ItemRestoredEvent,
  ProjectsV2ItemRestoredEventSchema,
} from './projects-v2-item-restored-event.js';

describe('ProjectsV2ItemRestoredEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(ProjectsV2ItemRestoredEventSchema).toBeDefined();
    expect(typeof ProjectsV2ItemRestoredEventSchema.parse).toBe('function');
    expect(typeof ProjectsV2ItemRestoredEventSchema.safeParse).toBe('function');
  });

  it('should reject invalid data', () => {
    const result = ProjectsV2ItemRestoredEventSchema.safeParse({ invalid: 'data' });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _ProjectsV2ItemRestoredEventTest = ProjectsV2ItemRestoredEvent;

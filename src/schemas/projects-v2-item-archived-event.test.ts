/**
 * Auto-generated tests for ProjectsV2ItemArchivedEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import {
  type ProjectsV2ItemArchivedEvent,
  ProjectsV2ItemArchivedEventSchema,
} from './projects-v2-item-archived-event.js';

describe('ProjectsV2ItemArchivedEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(ProjectsV2ItemArchivedEventSchema).toBeDefined();
    expect(typeof ProjectsV2ItemArchivedEventSchema.parse).toBe('function');
    expect(typeof ProjectsV2ItemArchivedEventSchema.safeParse).toBe('function');
  });

  it('should reject invalid data', () => {
    const result = ProjectsV2ItemArchivedEventSchema.safeParse({ invalid: 'data' });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _ProjectsV2ItemArchivedEventTest = ProjectsV2ItemArchivedEvent;

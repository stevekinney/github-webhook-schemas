/**
 * Auto-generated tests for ProjectsV2ItemCreatedEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import {
  type ProjectsV2ItemCreatedEvent,
  ProjectsV2ItemCreatedEventSchema,
} from './projects-v2-item-created-event.js';

describe('ProjectsV2ItemCreatedEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(ProjectsV2ItemCreatedEventSchema).toBeDefined();
    expect(typeof ProjectsV2ItemCreatedEventSchema.parse).toBe('function');
    expect(typeof ProjectsV2ItemCreatedEventSchema.safeParse).toBe('function');
  });

  it('should reject invalid data', () => {
    const result = ProjectsV2ItemCreatedEventSchema.safeParse({ invalid: 'data' });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _ProjectsV2ItemCreatedEventTest = ProjectsV2ItemCreatedEvent;

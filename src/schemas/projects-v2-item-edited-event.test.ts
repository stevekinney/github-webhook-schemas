/**
 * Auto-generated tests for ProjectsV2ItemEditedEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import {
  type ProjectsV2ItemEditedEvent,
  ProjectsV2ItemEditedEventSchema,
} from './projects-v2-item-edited-event.js';

describe('ProjectsV2ItemEditedEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(ProjectsV2ItemEditedEventSchema).toBeDefined();
    expect(typeof ProjectsV2ItemEditedEventSchema.parse).toBe('function');
    expect(typeof ProjectsV2ItemEditedEventSchema.safeParse).toBe('function');
  });

  it('should reject invalid data', () => {
    const result = ProjectsV2ItemEditedEventSchema.safeParse({ invalid: 'data' });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _ProjectsV2ItemEditedEventTest = ProjectsV2ItemEditedEvent;

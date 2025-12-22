/**
 * Auto-generated tests for ProjectsV2ItemConvertedEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import {
  type ProjectsV2ItemConvertedEvent,
  ProjectsV2ItemConvertedEventSchema,
} from './projects-v2-item-converted-event.js';

describe('ProjectsV2ItemConvertedEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(ProjectsV2ItemConvertedEventSchema).toBeDefined();
    expect(typeof ProjectsV2ItemConvertedEventSchema.parse).toBe('function');
    expect(typeof ProjectsV2ItemConvertedEventSchema.safeParse).toBe('function');
  });

  it('should reject invalid data', () => {
    const result = ProjectsV2ItemConvertedEventSchema.safeParse({ invalid: 'data' });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _ProjectsV2ItemConvertedEventTest = ProjectsV2ItemConvertedEvent;

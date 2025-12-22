/**
 * Auto-generated tests for PageBuildEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import { type PageBuildEvent, PageBuildEventSchema } from './page-build-event.js';

describe('PageBuildEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(PageBuildEventSchema).toBeDefined();
    expect(typeof PageBuildEventSchema.parse).toBe('function');
    expect(typeof PageBuildEventSchema.safeParse).toBe('function');
  });

  it('should reject invalid data', () => {
    const result = PageBuildEventSchema.safeParse({ invalid: 'data' });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _PageBuildEventTest = PageBuildEvent;

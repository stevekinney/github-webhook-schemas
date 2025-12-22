/**
 * Auto-generated tests for RepositoryArchivedEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import {
  type RepositoryArchivedEvent,
  RepositoryArchivedEventSchema,
} from './repository-archived-event.js';

describe('RepositoryArchivedEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(RepositoryArchivedEventSchema).toBeDefined();
    expect(typeof RepositoryArchivedEventSchema.parse).toBe('function');
    expect(typeof RepositoryArchivedEventSchema.safeParse).toBe('function');
  });

  it('should reject invalid data', () => {
    const result = RepositoryArchivedEventSchema.safeParse({ invalid: 'data' });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _RepositoryArchivedEventTest = RepositoryArchivedEvent;

/**
 * Auto-generated tests for RepositoryUnarchivedEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import {
  type RepositoryUnarchivedEvent,
  RepositoryUnarchivedEventSchema,
} from './repository-unarchived-event.js';

describe('RepositoryUnarchivedEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(RepositoryUnarchivedEventSchema).toBeDefined();
    expect(typeof RepositoryUnarchivedEventSchema.parse).toBe('function');
    expect(typeof RepositoryUnarchivedEventSchema.safeParse).toBe('function');
  });

  it('should reject invalid data', () => {
    const result = RepositoryUnarchivedEventSchema.safeParse({ invalid: 'data' });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _RepositoryUnarchivedEventTest = RepositoryUnarchivedEvent;

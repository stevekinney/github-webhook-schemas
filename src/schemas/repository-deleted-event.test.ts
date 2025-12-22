/**
 * Auto-generated tests for RepositoryDeletedEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import {
  type RepositoryDeletedEvent,
  RepositoryDeletedEventSchema,
} from './repository-deleted-event.js';

describe('RepositoryDeletedEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(RepositoryDeletedEventSchema).toBeDefined();
    expect(typeof RepositoryDeletedEventSchema.parse).toBe('function');
    expect(typeof RepositoryDeletedEventSchema.safeParse).toBe('function');
  });

  it('should reject invalid data', () => {
    const result = RepositoryDeletedEventSchema.safeParse({ invalid: 'data' });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _RepositoryDeletedEventTest = RepositoryDeletedEvent;

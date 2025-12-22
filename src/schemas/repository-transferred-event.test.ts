/**
 * Auto-generated tests for RepositoryTransferredEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import {
  type RepositoryTransferredEvent,
  RepositoryTransferredEventSchema,
} from './repository-transferred-event.js';

describe('RepositoryTransferredEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(RepositoryTransferredEventSchema).toBeDefined();
    expect(typeof RepositoryTransferredEventSchema.parse).toBe('function');
    expect(typeof RepositoryTransferredEventSchema.safeParse).toBe('function');
  });

  it('should reject invalid data', () => {
    const result = RepositoryTransferredEventSchema.safeParse({ invalid: 'data' });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _RepositoryTransferredEventTest = RepositoryTransferredEvent;

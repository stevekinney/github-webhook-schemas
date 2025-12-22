/**
 * Auto-generated tests for RepositoryRenamedEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import {
  type RepositoryRenamedEvent,
  RepositoryRenamedEventSchema,
} from './repository-renamed-event.js';

describe('RepositoryRenamedEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(RepositoryRenamedEventSchema).toBeDefined();
    expect(typeof RepositoryRenamedEventSchema.parse).toBe('function');
    expect(typeof RepositoryRenamedEventSchema.safeParse).toBe('function');
  });

  it('should reject invalid data', () => {
    const result = RepositoryRenamedEventSchema.safeParse({ invalid: 'data' });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _RepositoryRenamedEventTest = RepositoryRenamedEvent;

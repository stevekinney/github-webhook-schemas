/**
 * Auto-generated tests for RepositoryPrivatizedEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import {
  type RepositoryPrivatizedEvent,
  RepositoryPrivatizedEventSchema,
} from './repository-privatized-event.js';

describe('RepositoryPrivatizedEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(RepositoryPrivatizedEventSchema).toBeDefined();
    expect(typeof RepositoryPrivatizedEventSchema.parse).toBe('function');
    expect(typeof RepositoryPrivatizedEventSchema.safeParse).toBe('function');
  });

  it('should reject invalid data', () => {
    const result = RepositoryPrivatizedEventSchema.safeParse({ invalid: 'data' });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _RepositoryPrivatizedEventTest = RepositoryPrivatizedEvent;

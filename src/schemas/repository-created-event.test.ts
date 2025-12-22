/**
 * Auto-generated tests for RepositoryCreatedEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import {
  type RepositoryCreatedEvent,
  RepositoryCreatedEventSchema,
} from './repository-created-event.js';

describe('RepositoryCreatedEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(RepositoryCreatedEventSchema).toBeDefined();
    expect(typeof RepositoryCreatedEventSchema.parse).toBe('function');
    expect(typeof RepositoryCreatedEventSchema.safeParse).toBe('function');
  });

  it('should reject invalid data', () => {
    const result = RepositoryCreatedEventSchema.safeParse({ invalid: 'data' });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _RepositoryCreatedEventTest = RepositoryCreatedEvent;

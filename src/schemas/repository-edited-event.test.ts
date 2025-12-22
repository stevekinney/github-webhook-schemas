/**
 * Auto-generated tests for RepositoryEditedEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import {
  type RepositoryEditedEvent,
  RepositoryEditedEventSchema,
} from './repository-edited-event.js';

describe('RepositoryEditedEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(RepositoryEditedEventSchema).toBeDefined();
    expect(typeof RepositoryEditedEventSchema.parse).toBe('function');
    expect(typeof RepositoryEditedEventSchema.safeParse).toBe('function');
  });

  it('should reject invalid data', () => {
    const result = RepositoryEditedEventSchema.safeParse({ invalid: 'data' });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _RepositoryEditedEventTest = RepositoryEditedEvent;

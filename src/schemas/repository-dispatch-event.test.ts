/**
 * Auto-generated tests for RepositoryDispatchEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import {
  type RepositoryDispatchEvent,
  RepositoryDispatchEventSchema,
} from './repository-dispatch-event.js';

describe('RepositoryDispatchEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(RepositoryDispatchEventSchema).toBeDefined();
    expect(typeof RepositoryDispatchEventSchema.parse).toBe('function');
    expect(typeof RepositoryDispatchEventSchema.safeParse).toBe('function');
  });

  it('should reject invalid data', () => {
    const result = RepositoryDispatchEventSchema.safeParse({ invalid: 'data' });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _RepositoryDispatchEventTest = RepositoryDispatchEvent;

/**
 * Auto-generated tests for RepositoryImportEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import {
  type RepositoryImportEvent,
  RepositoryImportEventSchema,
} from './repository-import-event.js';

describe('RepositoryImportEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(RepositoryImportEventSchema).toBeDefined();
    expect(typeof RepositoryImportEventSchema.parse).toBe('function');
    expect(typeof RepositoryImportEventSchema.safeParse).toBe('function');
  });

  it('should reject invalid data', () => {
    const result = RepositoryImportEventSchema.safeParse({ invalid: 'data' });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _RepositoryImportEventTest = RepositoryImportEvent;

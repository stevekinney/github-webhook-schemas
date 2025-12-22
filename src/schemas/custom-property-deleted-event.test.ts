/**
 * Auto-generated tests for CustomPropertyDeletedEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import {
  type CustomPropertyDeletedEvent,
  CustomPropertyDeletedEventSchema,
} from './custom-property-deleted-event.js';

describe('CustomPropertyDeletedEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(CustomPropertyDeletedEventSchema).toBeDefined();
    expect(typeof CustomPropertyDeletedEventSchema.parse).toBe('function');
    expect(typeof CustomPropertyDeletedEventSchema.safeParse).toBe('function');
  });

  it('should reject invalid data', () => {
    const result = CustomPropertyDeletedEventSchema.safeParse({ invalid: 'data' });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _CustomPropertyDeletedEventTest = CustomPropertyDeletedEvent;

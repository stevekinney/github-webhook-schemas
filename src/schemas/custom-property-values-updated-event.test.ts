/**
 * Auto-generated tests for CustomPropertyValuesUpdatedEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import {
  type CustomPropertyValuesUpdatedEvent,
  CustomPropertyValuesUpdatedEventSchema,
} from './custom-property-values-updated-event.js';

describe('CustomPropertyValuesUpdatedEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(CustomPropertyValuesUpdatedEventSchema).toBeDefined();
    expect(typeof CustomPropertyValuesUpdatedEventSchema.parse).toBe('function');
    expect(typeof CustomPropertyValuesUpdatedEventSchema.safeParse).toBe('function');
  });

  it('should reject invalid data', () => {
    const result = CustomPropertyValuesUpdatedEventSchema.safeParse({ invalid: 'data' });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _CustomPropertyValuesUpdatedEventTest = CustomPropertyValuesUpdatedEvent;

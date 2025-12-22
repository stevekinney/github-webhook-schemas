/**
 * Auto-generated tests for CustomPropertyCreatedEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import {
  type CustomPropertyCreatedEvent,
  CustomPropertyCreatedEventSchema,
} from './custom-property-created-event.js';

describe('CustomPropertyCreatedEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(CustomPropertyCreatedEventSchema).toBeDefined();
    expect(typeof CustomPropertyCreatedEventSchema.parse).toBe('function');
    expect(typeof CustomPropertyCreatedEventSchema.safeParse).toBe('function');
  });

  it('should reject invalid data', () => {
    const result = CustomPropertyCreatedEventSchema.safeParse({ invalid: 'data' });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _CustomPropertyCreatedEventTest = CustomPropertyCreatedEvent;

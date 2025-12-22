/**
 * Auto-generated tests for DependabotAlertCreatedEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import {
  type DependabotAlertCreatedEvent,
  DependabotAlertCreatedEventSchema,
} from './dependabot-alert-created-event.js';

describe('DependabotAlertCreatedEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(DependabotAlertCreatedEventSchema).toBeDefined();
    expect(typeof DependabotAlertCreatedEventSchema.parse).toBe('function');
    expect(typeof DependabotAlertCreatedEventSchema.safeParse).toBe('function');
  });

  it('should reject invalid data', () => {
    const result = DependabotAlertCreatedEventSchema.safeParse({ invalid: 'data' });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _DependabotAlertCreatedEventTest = DependabotAlertCreatedEvent;

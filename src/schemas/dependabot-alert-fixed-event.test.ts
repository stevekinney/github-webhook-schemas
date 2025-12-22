/**
 * Auto-generated tests for DependabotAlertFixedEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import {
  type DependabotAlertFixedEvent,
  DependabotAlertFixedEventSchema,
} from './dependabot-alert-fixed-event.js';

describe('DependabotAlertFixedEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(DependabotAlertFixedEventSchema).toBeDefined();
    expect(typeof DependabotAlertFixedEventSchema.parse).toBe('function');
    expect(typeof DependabotAlertFixedEventSchema.safeParse).toBe('function');
  });

  it('should reject invalid data', () => {
    const result = DependabotAlertFixedEventSchema.safeParse({ invalid: 'data' });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _DependabotAlertFixedEventTest = DependabotAlertFixedEvent;

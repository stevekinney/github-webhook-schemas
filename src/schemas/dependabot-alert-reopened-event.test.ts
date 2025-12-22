/**
 * Auto-generated tests for DependabotAlertReopenedEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import {
  type DependabotAlertReopenedEvent,
  DependabotAlertReopenedEventSchema,
} from './dependabot-alert-reopened-event.js';

describe('DependabotAlertReopenedEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(DependabotAlertReopenedEventSchema).toBeDefined();
    expect(typeof DependabotAlertReopenedEventSchema.parse).toBe('function');
    expect(typeof DependabotAlertReopenedEventSchema.safeParse).toBe('function');
  });

  it('should reject invalid data', () => {
    const result = DependabotAlertReopenedEventSchema.safeParse({ invalid: 'data' });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _DependabotAlertReopenedEventTest = DependabotAlertReopenedEvent;

/**
 * Auto-generated tests for DependabotAlertReintroducedEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import {
  type DependabotAlertReintroducedEvent,
  DependabotAlertReintroducedEventSchema,
} from './dependabot-alert-reintroduced-event.js';

describe('DependabotAlertReintroducedEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(DependabotAlertReintroducedEventSchema).toBeDefined();
    expect(typeof DependabotAlertReintroducedEventSchema.parse).toBe('function');
    expect(typeof DependabotAlertReintroducedEventSchema.safeParse).toBe('function');
  });

  it('should reject invalid data', () => {
    const result = DependabotAlertReintroducedEventSchema.safeParse({ invalid: 'data' });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _DependabotAlertReintroducedEventTest = DependabotAlertReintroducedEvent;

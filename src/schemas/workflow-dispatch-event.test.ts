/**
 * Auto-generated tests for WorkflowDispatchEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import {
  type WorkflowDispatchEvent,
  WorkflowDispatchEventSchema,
} from './workflow-dispatch-event.js';

describe('WorkflowDispatchEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(WorkflowDispatchEventSchema).toBeDefined();
    expect(typeof WorkflowDispatchEventSchema.parse).toBe('function');
    expect(typeof WorkflowDispatchEventSchema.safeParse).toBe('function');
  });

  it('should reject invalid data', () => {
    const result = WorkflowDispatchEventSchema.safeParse({ invalid: 'data' });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _WorkflowDispatchEventTest = WorkflowDispatchEvent;

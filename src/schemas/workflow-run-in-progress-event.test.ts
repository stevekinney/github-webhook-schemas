/**
 * Auto-generated tests for WorkflowRunInProgressEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import {
  type WorkflowRunInProgressEvent,
  WorkflowRunInProgressEventSchema,
} from './workflow-run-in-progress-event.js';

describe('WorkflowRunInProgressEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(WorkflowRunInProgressEventSchema).toBeDefined();
    expect(typeof WorkflowRunInProgressEventSchema.parse).toBe('function');
    expect(typeof WorkflowRunInProgressEventSchema.safeParse).toBe('function');
  });

  it('should reject invalid data', () => {
    const result = WorkflowRunInProgressEventSchema.safeParse({ invalid: 'data' });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _WorkflowRunInProgressEventTest = WorkflowRunInProgressEvent;

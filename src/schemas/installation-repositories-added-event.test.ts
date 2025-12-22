/**
 * Auto-generated tests for InstallationRepositoriesAddedEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import {
  type InstallationRepositoriesAddedEvent,
  InstallationRepositoriesAddedEventSchema,
} from './installation-repositories-added-event.js';

describe('InstallationRepositoriesAddedEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(InstallationRepositoriesAddedEventSchema).toBeDefined();
    expect(typeof InstallationRepositoriesAddedEventSchema.parse).toBe('function');
    expect(typeof InstallationRepositoriesAddedEventSchema.safeParse).toBe('function');
  });

  it('should reject invalid data', () => {
    const result = InstallationRepositoriesAddedEventSchema.safeParse({
      invalid: 'data',
    });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _InstallationRepositoriesAddedEventTest = InstallationRepositoriesAddedEvent;

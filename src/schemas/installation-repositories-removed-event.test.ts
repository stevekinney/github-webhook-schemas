/**
 * Auto-generated tests for InstallationRepositoriesRemovedEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import {
  type InstallationRepositoriesRemovedEvent,
  InstallationRepositoriesRemovedEventSchema,
} from './installation-repositories-removed-event.js';

describe('InstallationRepositoriesRemovedEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(InstallationRepositoriesRemovedEventSchema).toBeDefined();
    expect(typeof InstallationRepositoriesRemovedEventSchema.parse).toBe('function');
    expect(typeof InstallationRepositoriesRemovedEventSchema.safeParse).toBe('function');
  });

  it('should reject invalid data', () => {
    const result = InstallationRepositoriesRemovedEventSchema.safeParse({
      invalid: 'data',
    });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _InstallationRepositoriesRemovedEventTest =
  InstallationRepositoriesRemovedEvent;

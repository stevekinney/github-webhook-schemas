/**
 * Auto-generated tests for GithubAppAuthorizationRevokedEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import {
  type GithubAppAuthorizationRevokedEvent,
  GithubAppAuthorizationRevokedEventSchema,
} from './github-app-authorization-revoked-event.js';

describe('GithubAppAuthorizationRevokedEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(GithubAppAuthorizationRevokedEventSchema).toBeDefined();
    expect(typeof GithubAppAuthorizationRevokedEventSchema.parse).toBe('function');
    expect(typeof GithubAppAuthorizationRevokedEventSchema.safeParse).toBe('function');
  });

  it('should reject invalid data', () => {
    const result = GithubAppAuthorizationRevokedEventSchema.safeParse({
      invalid: 'data',
    });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _GithubAppAuthorizationRevokedEventTest = GithubAppAuthorizationRevokedEvent;

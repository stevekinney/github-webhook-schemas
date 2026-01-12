import { describe, it } from 'bun:test';
import { z } from 'zod';

import * as Schemas from '../schemas/index.js';
import * as Fixtures from './index.js';

type FixtureFactory = () => unknown;

const fixtureFactories = Object.entries(Fixtures).filter(
  (entry) => entry[0].startsWith('create') && typeof entry[1] === 'function',
) as [string, FixtureFactory][];

describe('fixtures and type guards', () => {
  it('keep fixtures, schemas, and guards in sync', () => {
    for (const [factoryName, factory] of fixtureFactories) {
      const eventName = factoryName.slice('create'.length);
      const schemaKey = `${eventName}Schema` as keyof typeof Schemas;
      const guardKey = `is${eventName}` as keyof typeof Schemas;

      const schema = Schemas[schemaKey] as z.ZodTypeAny | undefined;
      const guard = Schemas[guardKey] as ((value: unknown) => boolean) | undefined;

      if (!schema) {
        throw new Error(`Missing schema export: ${String(schemaKey)} (${factoryName})`);
      }

      if (!guard) {
        throw new Error(`Missing guard export: ${String(guardKey)} (${factoryName})`);
      }

      const event = factory();
      const parsed = schema.safeParse(event);

      if (!parsed.success) {
        throw new Error(
          `Fixture ${factoryName} failed ${String(schemaKey)}: ${parsed.error.message}`,
        );
      }

      if (!guard(event)) {
        throw new Error(`Fixture ${factoryName} failed ${String(guardKey)}`);
      }
    }
  });
});

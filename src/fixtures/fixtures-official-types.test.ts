import type * as OctokitTypes from '@octokit/webhooks-types';
import { describe, expect, it } from 'bun:test';

import * as Fixtures from './index.js';

type EventNameFromFactories = {
  [K in keyof typeof Fixtures]: K extends `create${infer Name}` ? Name : never;
}[keyof typeof Fixtures];

type FixtureEvent<K extends EventNameFromFactories> = ReturnType<
  (typeof Fixtures)[`create${K}`]
>;

type AllTrue<T> = Exclude<T, true> extends never ? true : false;

type CompatCheck = AllTrue<
  {
    [K in EventNameFromFactories]: FixtureEvent<K> extends OctokitTypes.Schema
      ? true
      : false;
  }[EventNameFromFactories]
>;

const _typeCheck: CompatCheck = true;

describe('official types', () => {
  it('schema types line up with @octokit/webhooks-types', () => {
    expect(_typeCheck).toBe(true);
  });
});

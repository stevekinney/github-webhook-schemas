import { describe, expect, it } from 'bun:test';
import { Project } from 'ts-morph';
import { z } from 'zod';

import * as SharedSchemas from './index.js';

type ZodSchema = z.ZodTypeAny;

function unwrapSchema(schema: ZodSchema): ZodSchema {
  if (schema.type === 'default' || schema.type === 'optional') {
    const def = schema.def as { innerType?: ZodSchema };
    if (def.innerType) {
      return unwrapSchema(def.innerType);
    }
  }

  return schema;
}

function isNullableSchema(schema: ZodSchema): boolean {
  const unwrapped = unwrapSchema(schema);

  if (unwrapped.type === 'nullable' || unwrapped.type === 'null') {
    return true;
  }

  if (unwrapped.type === 'union') {
    const def = unwrapped.def as { options?: ZodSchema[] };
    return (def.options ?? []).some((option) => isNullableSchema(option));
  }

  return false;
}

function getObjectShape(schema: ZodSchema): Record<string, ZodSchema> | null {
  const unwrapped = unwrapSchema(schema);

  if (unwrapped.type === 'object') {
    const def = unwrapped.def as { shape?: Record<string, ZodSchema> };
    return def.shape ?? null;
  }

  if (unwrapped.type === 'intersection') {
    const def = unwrapped.def as { left?: ZodSchema; right?: ZodSchema };
    const leftShape = def.left ? getObjectShape(def.left) : null;
    const rightShape = def.right ? getObjectShape(def.right) : null;

    if (leftShape || rightShape) {
      return { ...(leftShape ?? {}), ...(rightShape ?? {}) };
    }
  }

  return null;
}

describe('shared schemas nullability', () => {
  it('keeps nullable properties aligned with @octokit/webhooks-types', () => {
    const project = new Project({
      skipAddingFilesFromTsConfig: true,
      compilerOptions: { strictNullChecks: true },
    });
    const sourceFile = project.addSourceFileAtPath(
      'node_modules/@octokit/webhooks-types/schema.d.ts',
    );

    const schemaKeys = Object.keys(SharedSchemas).filter((key) => key.endsWith('Schema'));
    const sharedNames = schemaKeys.map((key) => key.replace(/Schema$/, ''));
    const missing: string[] = [];
    const mismatches: string[] = [];

    for (const name of sharedNames) {
      const interfaceDecl = sourceFile.getInterface(name);
      if (!interfaceDecl) {
        continue;
      }

      const schemaKey = `${name}Schema` as keyof typeof SharedSchemas;
      const schema = SharedSchemas[schemaKey] as ZodSchema | undefined;
      if (!schema) {
        missing.push(schemaKey);
        continue;
      }

      const shape = getObjectShape(schema);
      if (!shape) {
        mismatches.push(`${name} (schema is not an object)`);
        continue;
      }

      for (const prop of interfaceDecl.getProperties()) {
        const propType = prop.getType();
        const hasNull =
          propType.isNull() ||
          (propType.isUnion() && propType.getUnionTypes().some((type) => type.isNull()));

        if (!hasNull) continue;

        const schemaProp = shape[prop.getName()];
        if (!schemaProp) {
          mismatches.push(`${name}.${prop.getName()} (missing schema property)`);
          continue;
        }

        if (!isNullableSchema(schemaProp)) {
          mismatches.push(`${name}.${prop.getName()} (expected nullable schema)`);
        }
      }
    }

    expect(missing, 'Missing shared schema exports').toEqual([]);
    expect(mismatches, 'Nullable properties mismatch').toEqual([]);
  });
});

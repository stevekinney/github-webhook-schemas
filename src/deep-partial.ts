/**
 * Deep-partial transformation for Zod schemas.
 *
 * GitHub's published webhook types over-require fields relative to real
 * deliveries (see https://github.com/stevekinney/github-webhook-schemas/issues/8).
 * `deepPartial` turns any schema from this package into a "validate what's
 * present" variant: every object property, at every depth, becomes optional
 * while present values are still validated against their original schemas.
 *
 * Zod v4 removed `.deepPartial()`; this is a standalone replacement scoped to
 * the schema constructs this package generates.
 */

import { z } from 'zod';

export type DeepPartial<T> = T extends readonly unknown[]
  ? number extends T['length']
    ? T extends readonly (infer E)[]
      ? DeepPartial<E>[]
      : never
    : { [K in keyof T]: DeepPartial<T[K]> }
  : T extends object
    ? { [K in keyof T]?: DeepPartial<T[K]> }
    : T;

const cache = new WeakMap<z.ZodType, z.ZodType>();

function transform(schema: z.ZodType): z.ZodType {
  const cached = cache.get(schema);
  if (cached) return cached;

  const result = transformUncached(schema);
  cache.set(schema, result);
  return result;
}

/**
 * Object-union members may share only part of their shape. Once every field is
 * optional, a member could otherwise accept a sibling-only key as unknown and
 * strip it before that key's own schema gets a chance to validate it. Block
 * only keys known to sibling members; truly unknown keys retain the original
 * object's behavior.
 */
function blockSiblingObjectKeys(options: z.ZodType[]): z.ZodType[] {
  const objects = options.filter(
    (option): option is z.ZodObject<Record<string, z.ZodType>> =>
      option instanceof z.ZodObject,
  );
  if (objects.length < 2) return options;

  const allKeys = new Set(objects.flatMap((option) => Object.keys(option.shape)));
  return options.map((option) => {
    if (!(option instanceof z.ZodObject)) return option;

    const blockers: Record<string, z.ZodType> = {};
    for (const key of allKeys) {
      if (!(key in option.shape)) {
        blockers[key] = z.never().optional();
      }
    }
    return Object.keys(blockers).length > 0 ? option.extend(blockers) : option;
  });
}

function flattenUnionOptions(options: z.ZodType[]): z.ZodType[] {
  return options.flatMap((option) =>
    option instanceof z.ZodUnion
      ? flattenUnionOptions(option.options as z.ZodType[])
      : [option],
  );
}

function transformUncached(schema: z.ZodType): z.ZodType {
  if (schema instanceof z.ZodObject) {
    const shape: Record<string, z.ZodType> = {};
    for (const [key, value] of Object.entries(schema.shape)) {
      if (!(value instanceof z.ZodType)) continue;
      shape[key] = transform(value).optional();
    }
    return z.object(shape);
  }

  if (schema instanceof z.ZodUnion) {
    const transformed = (schema.options as z.ZodType[]).map((option) => transform(option));
    return z.union(blockSiblingObjectKeys(flattenUnionOptions(transformed)));
  }

  if (schema instanceof z.ZodIntersection) {
    const { left, right } = schema._def as unknown as {
      left: unknown;
      right: unknown;
    };
    if (!(left instanceof z.ZodType) || !(right instanceof z.ZodType)) {
      return schema;
    }
    return z.intersection(transform(left), transform(right));
  }

  if (schema instanceof z.ZodArray) {
    return z.array(transform(schema.element as z.ZodType));
  }

  if (schema instanceof z.ZodTuple) {
    const { items: rawItems, rest } = schema._def as unknown as {
      items: unknown[];
      rest: unknown;
    };
    const items: z.ZodType[] = [];
    for (const item of rawItems) {
      if (!(item instanceof z.ZodType)) return schema;
      items.push(transform(item));
    }

    if (rest !== null && !(rest instanceof z.ZodType)) return schema;
    if (items.length === 0) return rest ? schema : z.tuple([]);

    const tupleItems = items as [z.ZodType, ...z.ZodType[]];
    const tupleSchema = z.tuple(tupleItems);
    return rest ? tupleSchema.rest(transform(rest)) : tupleSchema;
  }

  if (schema instanceof z.ZodRecord) {
    const { keyType, valueType } = schema._def as unknown as {
      keyType: unknown;
      valueType: unknown;
    };
    if (!(keyType instanceof z.ZodType) || !(valueType instanceof z.ZodType)) {
      return schema;
    }
    return z.record(keyType as z.ZodRecord['keyType'], transform(valueType));
  }

  if (schema instanceof z.ZodOptional) {
    const { innerType } = schema._def as unknown as { innerType: unknown };
    return innerType instanceof z.ZodType ? transform(innerType).optional() : schema;
  }

  if (schema instanceof z.ZodNullable) {
    const { innerType } = schema._def as unknown as { innerType: unknown };
    return innerType instanceof z.ZodType ? transform(innerType).nullable() : schema;
  }

  if (schema instanceof z.ZodDefault) {
    // A defaulted field is already optional on input; keep the inner schema
    // and let the enclosing object mark it optional.
    const { innerType } = schema._def as unknown as { innerType: unknown };
    return innerType instanceof z.ZodType ? transform(innerType) : schema;
  }

  if (typeof z.ZodReadonly === 'function' && schema instanceof z.ZodReadonly) {
    const { innerType } = schema._def as unknown as { innerType: unknown };
    return innerType instanceof z.ZodType ? transform(innerType) : schema;
  }

  if (schema instanceof z.ZodLazy) {
    const { getter } = schema._def as unknown as { getter: unknown };
    if (typeof getter !== 'function') return schema;
    const getInner = getter as () => unknown;
    return z.lazy(() => {
      const inner = getInner();
      return inner instanceof z.ZodType ? transform(inner) : schema;
    });
  }

  // Primitives, literals, enums, and anything else pass through unchanged.
  return schema;
}

/**
 * Returns a deep-partial variant of `schema`: every object property at every
 * depth is optional, and present values are validated against the original
 * property schemas. Unions, intersections, arrays, tuples, and records are
 * traversed; primitives and literals are preserved.
 *
 * ```ts
 * import { schemas } from 'github-webhook-schemas/registry';
 * import { deepPartial } from 'github-webhook-schemas/deep-partial';
 *
 * const LoosePullRequestSchema = deepPartial(schemas.get('pull_request'));
 * LoosePullRequestSchema.parse(payload); // validates only what's present
 * ```
 */
export function deepPartial<T>(schema: z.ZodType<T>): z.ZodType<DeepPartial<T>> {
  return transform(schema) as z.ZodType<DeepPartial<T>>;
}

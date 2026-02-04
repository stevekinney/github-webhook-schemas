import { emitterEventNames as eventTypes } from '@octokit/webhooks';
import type {
  WebhookEvent,
  WebhookEventMap,
  WebhookEventName,
  WebhookEvents,
} from '@octokit/webhooks-types';
import { z } from 'zod';

import * as Schemas from './schemas/index.js';

export type { WebhookEvent, WebhookEventMap, WebhookEventName, WebhookEvents };

function toKebabCase(value: string): string {
  let result = '';

  for (let i = 0; i < value.length; i += 1) {
    const char = value[i] ?? '';
    const prev = i > 0 ? (value[i - 1] ?? '') : '';
    const next = i + 1 < value.length ? (value[i + 1] ?? '') : '';

    const isUpper = char >= 'A' && char <= 'Z';
    const isLower = char >= 'a' && char <= 'z';
    const prevIsUpper = prev >= 'A' && prev <= 'Z';
    const prevIsLower = prev >= 'a' && prev <= 'z';
    const prevIsDigit = prev >= '0' && prev <= '9';
    const nextIsLower = next >= 'a' && next <= 'z';

    if (i > 0) {
      if (isUpper) {
        if (prevIsLower || prevIsDigit || (prevIsUpper && nextIsLower)) {
          result += '-';
        }
      } else if (isLower && prevIsDigit) {
        result += '-';
      }
    }

    result += char;
  }

  return result.replace(/_/g, '-').toLowerCase();
}

type EventSchemaEntry = {
  name: string;
  slug: string;
  schema: z.ZodTypeAny;
};

const eventSchemaEntries: EventSchemaEntry[] = Object.entries(Schemas)
  .filter(([name]) => name.endsWith('EventSchema'))
  .map(([name, schema]) => {
    const baseName = name.slice(0, -'Schema'.length);
    return {
      name: baseName,
      slug: toKebabCase(baseName),
      schema: schema as z.ZodTypeAny,
    };
  });

const candidateEventNames = Array.from(
  new Set(eventTypes.map((eventType) => eventType.split('.')[0] ?? eventType)),
).sort() as WebhookEventName[];

const eventTypeSlugs = candidateEventNames
  .map((eventType) => ({
    eventType,
    slug: eventType.replace(/_/g, '-'),
  }))
  .sort((a, b) => b.slug.length - a.slug.length);

function findEventType(schemaSlug: string): WebhookEventName | undefined {
  for (const { eventType, slug } of eventTypeSlugs) {
    if (schemaSlug === `${slug}-event` || schemaSlug.startsWith(`${slug}-`)) {
      return eventType;
    }
  }
  return undefined;
}

function createUnionSchema(schemas: [z.ZodTypeAny, ...z.ZodTypeAny[]]): z.ZodTypeAny {
  if (schemas.length === 1) {
    return schemas[0];
  }

  return z.union(schemas as [z.ZodTypeAny, z.ZodTypeAny, ...z.ZodTypeAny[]]);
}

const schemasByEvent = new Map<WebhookEventName, z.ZodTypeAny[]>();

for (const entry of eventSchemaEntries) {
  const eventType = findEventType(entry.slug);
  if (!eventType) {
    continue;
  }

  const bucket = schemasByEvent.get(eventType);
  if (bucket) {
    bucket.push(entry.schema);
  } else {
    schemasByEvent.set(eventType, [entry.schema]);
  }
}

const schemaRegistry = new Map<WebhookEventName, z.ZodTypeAny>();
for (const [eventType, schemas] of schemasByEvent) {
  if (schemas.length === 0) {
    continue;
  }
  schemaRegistry.set(
    eventType,
    createUnionSchema(schemas as [z.ZodTypeAny, ...z.ZodTypeAny[]]),
  );
}

const allEventSchemas = eventSchemaEntries.map((entry) => entry.schema);
const eventTypeSet = new Set<WebhookEventName>(schemaRegistry.keys());

export const schemas = {
  get<EventType extends WebhookEventName>(
    eventType: EventType,
  ): z.ZodType<WebhookEventMap[EventType]> {
    const schema = schemaRegistry.get(eventType);
    if (!schema) {
      throw new Error(`No schema registered for event type: ${eventType}`);
    }
    return schema as z.ZodType<WebhookEventMap[EventType]>;
  },
};

export function isWebhookEventName(value: unknown): value is WebhookEventName {
  return typeof value === 'string' && eventTypeSet.has(value as WebhookEventName);
}

export function isWebhookEvent(value: unknown): value is WebhookEvent {
  for (const schema of allEventSchemas) {
    if (schema.safeParse(value).success) {
      return true;
    }
  }
  return false;
}

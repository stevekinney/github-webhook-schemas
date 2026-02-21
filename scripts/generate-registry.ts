#!/usr/bin/env bun
/**
 * Generates src/registry.ts with static imports and a hard-coded
 * event-to-schema mapping instead of runtime discovery.
 */

import { writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';

import { emitterEventNames } from '@octokit/webhooks';
import type { WebhookEventName } from '@octokit/webhooks-types';
import { camelCase, pascalCase } from 'change-case';

const ROOT_DIR = resolve(import.meta.dirname, '..');
const SCHEMAS_DIR = resolve(ROOT_DIR, 'src/schemas');
const OUTPUT_FILE = resolve(ROOT_DIR, 'src/registry.ts');

// ---------------------------------------------------------------------------
// 1. Scan schema files
// ---------------------------------------------------------------------------

async function getSchemaFiles(): Promise<string[]> {
  const schemaFiles: string[] = [];
  const glob = new Bun.Glob('*.ts');

  for await (const file of glob.scan({ cwd: SCHEMAS_DIR })) {
    if (file.endsWith('.test.ts') || file === 'index.ts') continue;
    schemaFiles.push(file.replace('.ts', ''));
  }

  return schemaFiles.sort();
}

// ---------------------------------------------------------------------------
// 2. Derive event-type mapping (same logic as the old runtime registry)
// ---------------------------------------------------------------------------

/** Unique base event names from @octokit/webhooks emitterEventNames. */
const candidateEventNames = Array.from(
  new Set(emitterEventNames.map((n) => n.split('.')[0] ?? n)),
).sort() as WebhookEventName[];

/** Actions for each base event type, extracted from emitterEventNames. */
const eventActionsMap = new Map<string, string[]>();
for (const name of emitterEventNames) {
  const dotIndex = name.indexOf('.');
  if (dotIndex >= 0) {
    const base = name.slice(0, dotIndex);
    const action = name.slice(dotIndex + 1);
    const existing = eventActionsMap.get(base);
    if (existing) {
      existing.push(action);
    } else {
      eventActionsMap.set(base, [action]);
    }
  }
}

/** Convert a snake_case event type + optional action to a camelCase route key. */
function toCamelRouteKey(eventType: string, action?: string): string {
  const base = camelCase(eventType);
  if (!action) return base;
  return base + pascalCase(action);
}

/** Event type slugs sorted longest-first for greedy matching. */
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

// ---------------------------------------------------------------------------
// 3. Group schemas by event type
// ---------------------------------------------------------------------------

type SchemaEntry = {
  slug: string;
  schemaName: string;
};

function groupSchemas(schemaFiles: string[]): Map<WebhookEventName, SchemaEntry[]> {
  const grouped = new Map<WebhookEventName, SchemaEntry[]>();

  for (const slug of schemaFiles) {
    const eventType = findEventType(slug);
    if (!eventType) continue;

    const schemaName = `${pascalCase(slug)}Schema`;
    const entry: SchemaEntry = { slug, schemaName };

    const bucket = grouped.get(eventType);
    if (bucket) {
      bucket.push(entry);
    } else {
      grouped.set(eventType, [entry]);
    }
  }

  return grouped;
}

// ---------------------------------------------------------------------------
// 4. Emit src/registry.ts
// ---------------------------------------------------------------------------

function renderImports(grouped: Map<WebhookEventName, SchemaEntry[]>): string {
  const lines: string[] = [];

  for (const entries of grouped.values()) {
    for (const { slug, schemaName } of entries) {
      lines.push(`import { ${schemaName} } from './schemas/${slug}.js';`);
    }
  }

  return lines.join('\n');
}

function renderRegistryEntries(grouped: Map<WebhookEventName, SchemaEntry[]>): string {
  const entries: string[] = [];

  for (const [eventType, schemas] of grouped) {
    const schemaNames = schemas.map((s) => s.schemaName);
    let value: string;

    if (schemaNames.length === 1) {
      value = schemaNames[0]!;
    } else {
      value = `z.union([${schemaNames.join(', ')}])`;
    }

    entries.push(`  ['${eventType}', ${value}],`);
  }

  return entries.join('\n');
}

function renderAllEventSchemas(grouped: Map<WebhookEventName, SchemaEntry[]>): string {
  const names: string[] = [];
  for (const entries of grouped.values()) {
    for (const { schemaName } of entries) {
      names.push(`  ${schemaName},`);
    }
  }
  return names.join('\n');
}

function renderRouteKeyEventMap(grouped: Map<WebhookEventName, SchemaEntry[]>): string {
  const lines: string[] = ['interface WebhookRouteKeyEventMap {'];
  const eventTypes = Array.from(grouped.keys()).sort();

  for (const eventType of eventTypes) {
    const camelName = camelCase(eventType);
    lines.push(`  ${camelName}: WebhookEventMap['${eventType}'];`);

    const actions = eventActionsMap.get(eventType);
    if (actions) {
      for (const action of actions.sort()) {
        const camelKey = toCamelRouteKey(eventType, action);
        lines.push(
          `  ${camelKey}: Extract<WebhookEventMap['${eventType}'], { action: '${action}' }>;`,
        );
      }
    }
  }

  lines.push('}');
  return lines.join('\n');
}

function renderRouteKeyInfoMap(grouped: Map<WebhookEventName, SchemaEntry[]>): string {
  const lines: string[] = [
    'const routeKeyInfoMap: Record<string, { eventType: WebhookEventName; action?: string }> = {',
  ];
  const eventTypes = Array.from(grouped.keys()).sort();

  for (const eventType of eventTypes) {
    const camelName = camelCase(eventType);
    lines.push(`  ${camelName}: { eventType: '${eventType}' },`);

    const actions = eventActionsMap.get(eventType);
    if (actions) {
      for (const action of actions.sort()) {
        const camelKey = toCamelRouteKey(eventType, action);
        lines.push(`  ${camelKey}: { eventType: '${eventType}', action: '${action}' },`);
      }
    }
  }

  lines.push('};');
  return lines.join('\n');
}

function renderSnakeToCamelBaseMap(
  grouped: Map<WebhookEventName, SchemaEntry[]>,
): string {
  const lines: string[] = ['const snakeToCamelBaseMap: Record<string, string> = {'];
  const eventTypes = Array.from(grouped.keys()).sort();

  for (const eventType of eventTypes) {
    const camelName = camelCase(eventType);
    lines.push(`  ${eventType}: '${camelName}',`);
  }

  lines.push('};');
  return lines.join('\n');
}

function renderFile(grouped: Map<WebhookEventName, SchemaEntry[]>): string {
  const schemaImports = renderImports(grouped);
  const registryEntries = renderRegistryEntries(grouped);
  const allSchemas = renderAllEventSchemas(grouped);
  const routeKeyEventMap = renderRouteKeyEventMap(grouped);
  const routeKeyInfoMapCode = renderRouteKeyInfoMap(grouped);
  const snakeToCamelBaseMapCode = renderSnakeToCamelBaseMap(grouped);

  return `/**
 * Auto-generated webhook event schema registry
 * DO NOT MODIFY - regenerate with: bun run scripts/generate-registry.ts
 */

import type {
  WebhookEvent,
  WebhookEventMap,
  WebhookEventName,
  WebhookEvents,
} from '@octokit/webhooks-types';
import { z } from 'zod';

${schemaImports}

export type { WebhookEvent, WebhookEventMap, WebhookEventName, WebhookEvents };

${routeKeyEventMap}

export type WebhookRouteKey = keyof WebhookRouteKeyEventMap;

export type WebhookRouteEvent<K extends WebhookRouteKey> = WebhookRouteKeyEventMap[K];

export type WebhookHandler<K extends WebhookRouteKey> = (
  event: WebhookRouteEvent<K>,
) => void | Promise<void>;

export type WebhookErrorHandler = (error: unknown) => void;

export interface WebhookRouter {
  on<K extends WebhookRouteKey>(event: K, handler: WebhookHandler<K>): this;
  on(event: 'error', handler: WebhookErrorHandler): this;
  off<K extends WebhookRouteKey>(event: K, handler: WebhookHandler<K>): this;
  off(event: 'error', handler: WebhookErrorHandler): this;
  removeAllListeners(event?: string): this;
  receive(payload: unknown): void;
}

const schemaRegistry = new Map<WebhookEventName, z.ZodTypeAny>([
${registryEntries}
]);

const allEventSchemas: z.ZodTypeAny[] = [
${allSchemas}
];

const eventTypeSet = new Set<WebhookEventName>(schemaRegistry.keys());

${routeKeyInfoMapCode}

${snakeToCamelBaseMapCode}

function actionToPascal(action: string): string {
  return action.replace(/(^|_)(\\w)/g, (_, __, c: string) => c.toUpperCase());
}

export const schemas = {
  get<EventType extends WebhookEventName>(
    eventType: EventType,
  ): z.ZodType<WebhookEventMap[EventType]> {
    const schema = schemaRegistry.get(eventType);
    if (!schema) {
      throw new Error(\`No schema registered for event type: \${eventType}\`);
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

export type WebhookRouteHandlers = Partial<{
  [RouteKey in WebhookRouteKey]: (
    event: WebhookRouteEvent<RouteKey>,
  ) => void | Promise<void>;
}>;

type WebhookRouteHandlerFunction = (event: unknown) => void | Promise<void>;

type WebhookRouteEntry = {
  routeKey: string;
  eventType: WebhookEventName;
  action?: string;
  handler: WebhookRouteHandlerFunction;
  schema: z.ZodTypeAny;
};

function parseWebhookRouteKey(routeKey: string): {
  eventType: WebhookEventName;
  action?: string;
} {
  const info = routeKeyInfoMap[routeKey];
  if (!info) {
    throw new Error(\`Unsupported webhook route key: \${routeKey}\`);
  }
  return info;
}

export function createGithubWebhookRouter<Handlers extends WebhookRouteHandlers>(
  handlers: Handlers,
): (payload: unknown) => Promise<void> {
  const routeEntries: WebhookRouteEntry[] = Object.entries(handlers)
    .filter(
      (entry): entry is [string, WebhookRouteHandlerFunction] =>
        typeof entry[1] === 'function',
    )
    .map(([routeKey, handler]) => {
      const parsedRoute = parseWebhookRouteKey(routeKey);
      return {
        routeKey,
        eventType: parsedRoute.eventType,
        action: parsedRoute.action,
        handler,
        schema: schemas.get(parsedRoute.eventType),
      };
    })
    .sort((left, right) => Number(Boolean(right.action)) - Number(Boolean(left.action)));

  return async (payload: unknown): Promise<void> => {
    for (const routeEntry of routeEntries) {
      const parsed = routeEntry.schema.safeParse(payload);
      if (!parsed.success) {
        continue;
      }

      if (routeEntry.action) {
        const parsedAction =
          typeof parsed.data === 'object' && parsed.data && 'action' in parsed.data
            ? (parsed.data as { action?: string }).action
            : undefined;

        if (parsedAction !== routeEntry.action) {
          continue;
        }
      }

      await routeEntry.handler(parsed.data);
      return;
    }
  };
}

export function createWebhookRouter(): WebhookRouter {
  type Handler = (arg: unknown) => void | Promise<void>;
  const listeners = new Map<string, Set<Handler>>();

  function getListeners(event: string): Set<Handler> {
    let set = listeners.get(event);
    if (!set) {
      set = new Set();
      listeners.set(event, set);
    }
    return set;
  }

  function handleError(error: unknown): void {
    const errorListeners = listeners.get('error');
    if (errorListeners && errorListeners.size > 0) {
      for (const handler of errorListeners) {
        void handler(error);
      }
    } else {
      throw error;
    }
  }

  return {
    on(event: string, handler: Handler) {
      getListeners(event).add(handler);
      return this;
    },

    off(event: string, handler: Handler) {
      listeners.get(event)?.delete(handler);
      return this;
    },

    removeAllListeners(event?: string) {
      if (event) {
        listeners.delete(event);
      } else {
        listeners.clear();
      }
      return this;
    },

    receive(payload: unknown) {
      // Collect snake_case event types that have at least one listener (via camelCase keys)
      const activeSnakeEventTypes = new Set<WebhookEventName>();
      for (const key of listeners.keys()) {
        if (key === 'error') continue;
        const info = routeKeyInfoMap[key];
        if (info) {
          activeSnakeEventTypes.add(info.eventType);
        }
      }

      for (const [eventType, schema] of schemaRegistry) {
        if (!activeSnakeEventTypes.has(eventType)) continue;

        const parsed = schema.safeParse(payload);
        if (!parsed.success) continue;

        const action =
          typeof parsed.data === 'object' && parsed.data && 'action' in parsed.data
            ? (parsed.data as { action?: string }).action
            : undefined;

        const camelBase = snakeToCamelBaseMap[eventType];
        if (!camelBase) continue;

        // Emit action-specific event first (more specific)
        if (action) {
          const camelActionKey = camelBase + actionToPascal(action);
          const actionListeners = listeners.get(camelActionKey);
          if (actionListeners) {
            for (const handler of actionListeners) {
              try {
                const result = handler(parsed.data);
                if (result instanceof Promise) {
                  result.catch(handleError);
                }
              } catch (err) {
                handleError(err);
              }
            }
          }
        }

        // Emit base event
        const baseListeners = listeners.get(camelBase);
        if (baseListeners) {
          for (const handler of baseListeners) {
            try {
              const result = handler(parsed.data);
              if (result instanceof Promise) {
                result.catch(handleError);
              }
            } catch (err) {
              handleError(err);
            }
          }
        }

        return;
      }
    },
  };
}
`;
}

// ---------------------------------------------------------------------------
// 5. Format the output
// ---------------------------------------------------------------------------

async function formatFile(filePath: string): Promise<void> {
  const eslint = Bun.spawn(['bunx', 'eslint', '--fix', filePath], {
    cwd: ROOT_DIR,
    stdout: 'pipe',
    stderr: 'pipe',
  });
  await eslint.exited;

  const prettier = Bun.spawn(['bunx', 'prettier', '--no-cache', '--write', filePath], {
    cwd: ROOT_DIR,
    stdout: 'inherit',
    stderr: 'inherit',
  });
  await prettier.exited;
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

async function main(): Promise<void> {
  console.log('Generating registry...');

  const schemaFiles = await getSchemaFiles();
  console.log(`  Found ${schemaFiles.length} schema files`);

  const grouped = groupSchemas(schemaFiles);
  console.log(`  Mapped to ${grouped.size} event types`);

  const content = renderFile(grouped);
  await writeFile(OUTPUT_FILE, content);

  console.log('  Formatting...');
  await formatFile(OUTPUT_FILE);

  console.log('Done!');
}

main().catch((error) => {
  console.error('Failed to generate registry:', error);
  process.exit(1);
});

/**
 * Auto-generated Zod schema for PackageUpdatedEvent
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { PackageUpdatedEvent as PackageUpdatedEventOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import {
  InstallationLiteSchema,
  OrganizationSchema,
  PackageNPMMetadataSchema,
  PackageNugetMetadataSchema,
  RepositorySchema,
  UserSchema,
} from './shared/index.js';

export const PackageUpdatedEventSchema = z.object({
  action: z.literal('updated'),
  package: z.object({
    id: z.number(),
    name: z.string(),
    namespace: z.string(),
    description: z.string().nullable(),
    ecosystem: z.string(),
    package_type: z.union([
      z.literal('npm'),
      z.literal('maven'),
      z.literal('rubygems'),
      z.literal('docker'),
      z.literal('nuget'),
      z.literal('CONTAINER'),
    ]),
    html_url: z.string(),
    created_at: z.string(),
    updated_at: z.string(),
    owner: UserSchema,
    package_version: z
      .object({
        id: z.number(),
        version: z.string(),
        summary: z.string(),
        name: z.string(),
        description: z.string(),
        body: z
          .union([
            z.string(),
            z.object({
              repository: z.object({
                repository: RepositorySchema,
              }),
              info: z.object({
                type: z.string(),
                oid: z.string(),
                mode: z.number(),
                name: z.string(),
                path: z.string(),
                size: z.number().nullable(),
                collection: z.boolean(),
              }),
              attributes: z.object({}),
              _formatted: z.boolean(),
            }),
          ])
          .optional(),
        body_html: z.string().optional(),
        release: z
          .object({
            url: z.string(),
            html_url: z.string(),
            id: z.number(),
            tag_name: z.string(),
            target_commitish: z.string(),
            name: z.string(),
            draft: z.boolean(),
            author: UserSchema,
            prerelease: z.boolean(),
            created_at: z.string(),
            published_at: z.string(),
          })
          .optional(),
        manifest: z.string().optional(),
        html_url: z.string(),
        tag_name: z.string().optional(),
        target_commitish: z.string().optional(),
        target_oid: z.string().optional(),
        draft: z.union([z.literal(false), z.literal(true)]).optional(),
        prerelease: z.union([z.literal(false), z.literal(true)]).optional(),
        created_at: z.string().optional(),
        updated_at: z.string().optional(),
        metadata: z.array(z.unknown()),
        container_metadata: z
          .object({
            labels: z.record(z.string(), z.unknown()).nullable().optional(),
            manifest: z.record(z.string(), z.unknown()).nullable().optional(),
            tag: z
              .object({
                digest: z.string().optional(),
                name: z.string().optional(),
              })
              .optional(),
          })
          .nullable()
          .optional(),
        docker_metadata: z.array(z.unknown()).optional(),
        npm_metadata: PackageNPMMetadataSchema.nullable().optional(),
        nuget_metadata: z.array(PackageNugetMetadataSchema).nullable().optional(),
        rubygems_metadata: z.array(z.unknown()).optional(),
        package_files: z.array(
          z.object({
            download_url: z.string(),
            id: z.number(),
            name: z.string(),
            sha256: z.string(),
            sha1: z.string(),
            md5: z.string(),
            content_type: z.string(),
            state: z.string(),
            size: z.number(),
            created_at: z.string(),
            updated_at: z.string(),
          }),
        ),
        package_url: z.string().optional(),
        author: UserSchema.optional(),
        source_url: z.string().optional(),
        installation_command: z.string(),
      })
      .nullable(),
    registry: z.object({
      about_url: z.string(),
      name: z.string(),
      type: z.string(),
      url: z.string(),
      vendor: z.string(),
    }),
  }),
  repository: RepositorySchema,
  sender: UserSchema,
  installation: InstallationLiteSchema.optional(),
  organization: OrganizationSchema.optional(),
}) satisfies z.ZodType<PackageUpdatedEventOctokit>;

export type PackageUpdatedEvent = PackageUpdatedEventOctokit;

export function isPackageUpdatedEvent(value: unknown): value is PackageUpdatedEvent {
  return PackageUpdatedEventSchema.safeParse(value).success;
}

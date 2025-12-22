/**
 * Auto-generated Zod schema for RegistryPackagePublishedEvent
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { RegistryPackagePublishedEvent as RegistryPackagePublishedEventOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import {
  InstallationLiteSchema,
  OrganizationSchema,
  PackageNPMMetadataSchema,
  PackageNugetMetadataSchema,
  RepositorySchema,
  UserSchema,
} from './shared/index.js';

export const RegistryPackagePublishedEventSchema = z.object({
  action: z.literal('published'),
  registry_package: z.object({
    id: z.number(),
    name: z.string(),
    namespace: z.string(),
    description: z.string(),
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
    package_version: z.object({
      id: z.number(),
      version: z.string(),
      summary: z.string(),
      name: z.string(),
      description: z.string(),
      body: z.union([
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
            size: z.number(),
            collection: z.boolean(),
          }),
          attributes: z.object({}).optional(),
          _formatted: z.boolean().optional(),
        }),
      ]),
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
      draft: z.boolean().optional(),
      prerelease: z.boolean().optional(),
      created_at: z.string().optional(),
      updated_at: z.string().optional(),
      metadata: z.array(z.unknown()),
      docker_metadata: z.array(z.unknown()).optional(),
      container_metadata: z.object({
        labels: z.object({
          description: z.string().optional(),
          source: z.string().optional(),
          revision: z.string().optional(),
          image_url: z.string().optional(),
          licenses: z.string().optional(),
          all_labels: z.object({}).optional(),
        }),
        manifest: z.object({
          digest: z.string().optional(),
          media_type: z.string().optional(),
          uri: z.string().optional(),
          size: z.number().optional(),
          config: z.object({
            digest: z.string().optional(),
            media_type: z.string().optional(),
            size: z.number().optional(),
          }),
          layers: z.array(
            z.object({
              digest: z.string().optional(),
              media_type: z.string().optional(),
              size: z.number().optional(),
            }),
          ),
        }),
        tag: z.object({
          digest: z.string().optional(),
          name: z.string().optional(),
        }),
      }),
      npm_metadata: PackageNPMMetadataSchema.optional(),
      nuget_metadata: z.array(PackageNugetMetadataSchema).optional(),
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
      author: z
        .object({
          avatar_url: z.string(),
          events_url: z.string(),
          followers_url: z.string(),
          following_url: z.string(),
          gists_url: z.string(),
          gravatar_id: z.string(),
          html_url: z.string(),
          id: z.number(),
          login: z.string(),
          node_id: z.string(),
          organizations_url: z.string(),
          received_events_url: z.string(),
          repos_url: z.string(),
          site_admin: z.boolean(),
          starred_url: z.string(),
          subscriptions_url: z.string(),
          type: z.string(),
          url: z.string(),
        })
        .optional(),
      source_url: z.string().optional(),
      installation_command: z.string(),
    }),
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
}) satisfies z.ZodType<RegistryPackagePublishedEventOctokit>;

export type RegistryPackagePublishedEvent = RegistryPackagePublishedEventOctokit;

export function isRegistryPackagePublishedEvent(
  value: unknown,
): value is RegistryPackagePublishedEvent {
  return RegistryPackagePublishedEventSchema.safeParse(value).success;
}

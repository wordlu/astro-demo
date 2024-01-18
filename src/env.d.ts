/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

declare module 'sortablejs'

interface ImportMetaEnv {
  readonly STRAPI_URL: string;
}
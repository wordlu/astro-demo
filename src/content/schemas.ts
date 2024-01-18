import { z , reference } from 'astro:content';

export const docsSchema = z.object({
  title: z.string()
})
import { defineCollection } from 'astro:content';
import { docsSchema } from './schemas'

const docsCollection = defineCollection({ 
  type: 'content',
  schema: docsSchema
});

export const collections = {
  'docs': docsCollection,
};
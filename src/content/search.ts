import { getCollection, getEntry } from 'astro:content';

// 获取集合中的所有条目。
// 需要集合的名称作为参数。
// 示例：检索 `src/content/blog/**`
export const allBlogPosts = await getCollection('docs');

// 从集合中获取单个条目。
// 需要集合的名称以及
// 条目 `slug`（内容集合）或 `id`（数据集合）
// 示例：检索 `src/content/authors/grace-hopper.json`
export const graceHopperProfile = await getEntry('docs', 'grace-hopper');


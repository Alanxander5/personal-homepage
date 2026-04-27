import { defineCollection, z } from 'astro:content';

const tutorials = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    tags: z.array(z.string()),
    difficulty: z.enum(['入门', '初级', '中级', '高级']),
    status: z.enum(['草稿', '更新中', '已完成']),
    abstract: z.string(),
  }),
});

const ideas = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    tags: z.array(z.string()),
    status: z.enum(['思考阶段', '文献调研阶段', '实验设计阶段', '进行中', '已搁置']),
    confidence: z.enum(['低', '中', '高']),
    abstract: z.string(),
  }),
});

export const collections = { tutorials, ideas };

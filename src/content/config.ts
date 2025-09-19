import { defineCollection, z } from "astro:content"

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    published: z.coerce.date(),
    tags: z.array(z.string()),
    author: z.string(),
    featured: z.boolean().default(false),
  }),
})

export const collections = {
  blog,
}

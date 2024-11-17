// Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content'
// Define a `type` and `schema` for each collection
const blogCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        publishDate: z.date(),
        excerpt: z.string(),
        categories: z.array(z.string()), // Allow multiple categories
        author: z.string(),
        image: z.string(),
        //tags: z.array(z.string()),
    }),
})
// Export a single `collections` object to register your collection(s)
export const collections = {
    blog: blogCollection,
}

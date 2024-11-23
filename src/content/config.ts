// Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';

// Define a `type` and `schema` for each collection
const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    publishDate: z.date(),
    excerpt: z.string(),
    categories: z.array(z.string()), // Allow multiple categories
    author: z.string(),
    image: z
      .string()
      .optional() // Make image optional
      .refine((val) => {
        // Check if the image is an external URL (starts with http)
        return val === undefined || val.startsWith("http") || val.startsWith("/");
      }, {
        message: "Image must be either an external URL or a local path.",
      }),
  }),
});

// Export a single `collections` object to register your collection(s)
export const collections = {
  blog: blogCollection,
};

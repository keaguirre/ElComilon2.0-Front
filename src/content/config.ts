import { defineCollection, z } from "astro:content"; //z -> zod schema
const menu = defineCollection({
    schema: z.object({
        title: z.string(),
        description: z.string(),
        price: z.number(),
        image: z.string(),
    }),
});

export const collections = { menu };
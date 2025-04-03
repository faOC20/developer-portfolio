import { defineCollection, z } from 'astro:content';

const descriptions = defineCollection({
    schema: z.object({
        dataId: z.string(),
        style: z.string()
    })
});

export const collections = {descriptions};

import { defineCollection, z } from 'astro:content';

const descriptions = defineCollection({
    type: 'content',
    schema: z.object({
        dataId: z.number()
    })
});

export const collections = {
    descriptions: descriptions
};

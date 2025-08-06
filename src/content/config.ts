import { defineCollection, z } from 'astro:content';

const descriptions = defineCollection({
    schema: z.object({
        dataId: z.string(),
        style: z.string()
    })
});

const projects = defineCollection({
    schema: z.object({
        dataId: z.string(),
        title: z.string(),
        description: z.string(),
        mockup: z.string(),
        shortCuts: z.object({
            Frontend: z.array(z.string()),
            Backend: z.array(z.string()),
            Deployment: z.array(z.string()),
            Preview: z.array(z.array(z.string())),
            Resources: z.array(z.array(z.string()))
        }),
        
    })
});

export const collections = {descriptions, projects};

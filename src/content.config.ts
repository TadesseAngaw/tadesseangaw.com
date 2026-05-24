import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const blog = defineCollection({
	loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
	schema: z.object({
		title: z.string(),
		slug: z.string(),
		excerpt: z.string().optional(),
		heroImage: z.string().optional(),
		heroImageAlt: z.string().optional(),
		heroImageCreditName: z.string().optional(),
		heroImageSourceUrl: z.string().url().optional(),
		heroImageLicenseName: z.string().optional(),
		heroImageLicenseUrl: z.string().url().optional(),
		publishedAt: z.coerce.date(),
		tags: z.array(z.string()).default([]),
		draft: z.boolean().default(false),
	}),
});

export const collections = { blog };

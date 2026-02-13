import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    // Core blog fields
    title: z.string(),
    description: z.string().default(""),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),

    // ✅ Simple + stable hero image handling (string path + alt)
    // Example: heroImage: "/images/posts/weeks-1-2.jpg"
    heroImage: z.string().optional(),
    heroImageAlt: z.string().default(""),

    // ✅ Internship structure (aligned to your school questions)
    periodStart: z.coerce.date(),
    periodEnd: z.coerce.date(),
    skillsUsed: z.array(z.string()).default([]),

    deadlinesMet: z.boolean().default(true),
    deadlineNotes: z.string().default(""),
    planNext: z.string().default(""),

    learned: z.string().default(""),
    environment: z.string().default(""),

    strengths: z.string().default(""),
    growth: z.string().default(""),
    actionPlan: z.string().default(""),

    positivePoint: z.string().default(""),
  }),
});

export const collections = { blog };
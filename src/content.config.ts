import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    tipo: z.string(),
    producto: z.string(),
    empresa: z.array(z.string()).default([]),
    ambiente: z.string().optional(),
    tecnologias: z.array(z.string()).default([]),
    talentoHumano: z.string().optional(),
    soporte: z.string().optional(),
    observaciones: z.string().optional(),
    maquinas: z.array(z.string()).default([]),
    caracteristicaMaquina: z.string().optional(),
    url: z.string().optional(),
    image: z.string().optional(),
    featured: z.boolean().default(false),
    order: z.number().default(0),
  }),
});

export const collections = { projects };

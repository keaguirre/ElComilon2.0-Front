import { defineCollection, z } from "astro:content"; //z -> zod schema
import menuData from "./menu/menu.json"; // Importar el JSON';

const menu = defineCollection({
    schema: z.object({
        title: z.string(),
        description: z.string(),
        price: z.number(),
        image: z.string(),
    }),
    // data: menuData // Asignar los datos del JSON a la colección
});

export const collections = { menu };
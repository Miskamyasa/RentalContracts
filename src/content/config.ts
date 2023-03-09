import {defineCollection, z} from "astro:content"


const pagesCollection = defineCollection({
  schema: z.object({
    isDraft: z.boolean(),
    lang: z.enum(["en", "ru"]),
    // TODO:  publishDate: z.date(),
    title: z.string(),
    description: z.string(),
  }),
})

// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  "pages": pagesCollection,
}

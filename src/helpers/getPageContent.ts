import {CollectionEntry, getEntryBySlug} from "astro:content"


export default async function getPageContent(
  slug: string,
  lang: "en" | "ru",
): Promise<CollectionEntry<"pages"> | undefined> {
  const entrySlug = `${lang}/${slug}`
  try {
    const page = await getEntryBySlug("pages", entrySlug)
    if (page) {
      return page
    }
  } catch (error) {
    console.warn({error})
  }
}

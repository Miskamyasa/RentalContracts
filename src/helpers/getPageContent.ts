import {getEntryBySlug} from "astro:content"

import errorHandler from "./errorHandler"


export default async function getPageContent(slug: string,lang: "en" | "ru") {
  const entrySlug = `${lang}/${slug}`
  try {
    const page = await getEntryBySlug("pages", entrySlug)
    if (page) {
      return page
    }
  } catch (error) {
    errorHandler(error)
  }
}

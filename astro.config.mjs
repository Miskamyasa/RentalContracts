/* eslint-disable @typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-assignment */
// import partytown from "@astrojs/partytown"
import solidJs from "@astrojs/solid-js"
import tailwind from "@astrojs/tailwind"
import {defineConfig} from "astro/config"


// const {NODE_ENV} = process.env

export default defineConfig({
  integrations: [
    solidJs(),
    tailwind(),
    // TODO: partytown is not working
    // partytown({
    //   config: {debug: NODE_ENV === "development"},
    // }),
  ],
})

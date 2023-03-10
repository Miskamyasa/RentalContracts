/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('tailwindcss').Config} */


module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      listStyleType: {
        square: "square",
      },
      colors: {
        paper: "#fefaf6",
      },
      boxShadow: {
        "xxs": "0 1px 5px 1px #ddd",
        "xs": "0 7px 14px rgba(50, 50, 93, .1), 0 3px 6px rgba(0, 0, 0, .08)",
        "sm": "0 .25rem .375rem -.0625rem hsla(0, 0%, 8%, .12), 0 .125rem .25rem -.0625rem hsla(0, 0%, 8%, .07)",
        "md": "0 4px 6px rgba(50, 50, 93, .1), 0 1px 3px rgba(0, 0, 0, .08)",
        "lg": "0 2px 12px 0 rgba(0, 0, 0, .16)",
        "xl": "0 0 2rem 0 rgba(136, 152, 170, .06)",
        "2xl": "0 .3125rem .625rem 0 rgba(0, 0, 0, .2)",
        "3xl": "0 8px 26px -4px hsla(0, 0%, 8%, .15),0 8px 9px -5px hsla(0, 0%, 8%, .06)",
      },
      keyframes: {
        "overlayShow": {from: {opacity: 0}, to: {opacity: 1}},
        "overlayHide": {from: {opacity: 1}, to: {opacity: 0}},
        "contentShow": {
          from: {opacity: 0, transform: "scale(0.96)"},
          to: {opacity: 1, transform: "scale(1)"},
        },
        "contentHide": {
          from: {opacity: 1, transform: "scale(1)"},
          to: {opacity: 0, transform: "scale(0.96)"},
        },
      },
      animation: {
        "overlayShow": "overlayShow 0.2s ease-out",
        "overlayHide": "overlayHide 0.2s ease-out",
        "contentShow": "contentShow 0.2s ease-out",
        "contentHide": "contentHide 0.2s ease-out",
      },
    },
  },
  plugins: [
    require("@kobalte/tailwindcss"),
    function ({addComponents, addBase, theme}) {
      addBase({
        body: {
          color: theme("colors.slate.700"),
        },
        "h1": {
          "font-size": "1.61rem",
          "font-weight": "700",
          "margin": `${theme("spacing.2")} 0 ${theme("spacing.4")}`,
        },
        "h2": {
          "font-size": "1.21rem",
          "font-weight": "700",
          "margin": `${theme("spacing.2")} 0 ${theme("spacing.4")}`,
        },
        "main": {
          "margin-bottom": theme("spacing.2"),
        },
        "p": {
          "margin": `${theme("spacing.2")} 0`,
        },
        "ul": {
          "margin": `${theme("spacing.2")} 0 ${theme("spacing.4")}`,
          "padding-left": theme("spacing.4"),
          "list-style-type": "square",
        },
      }),
      addComponents({
        ".outlined": {
          // outline-none focus-visible:outline-sky-600 focus-visible:outline-offset-2
          "outline": "none",
          "&:focus-visible": {
            "outline": `2px solid ${theme("colors.sky.600")}`,
            "outline-offset": "2px",
          },
        },
        ".btn": {
          "display": "inline-flex",
          "justify-content": "center",
          "align-items": "center",
          "height": theme("spacing.10"),
          "width": "auto",
          "border-radius": theme("borderRadius.lg"),
          "padding": `${theme("spacing.2")} ${theme("spacing.4")}`,
          "background-color": theme("colors.sky.600"),
          "color": theme("colors.sky.50"),
          "line-height": "0",
          "transition": "250ms background-color",
          "outline": "none",
          "&:hover": {
            "background-color": theme("colors.sky.700"),
          },
          "&:active": {
            "background-color": theme("colors.sky.700"),
          },
          "&:focus-visible": {
            "outline": `2px solid ${theme("colors.sky.600")}`,
            "outline-offset": "2px",
          },
        },
        ".overlay": {
          "position": "fixed",
          "inset": "0",
          "z-index": "50",
          "display": "flex",
          "justify-content": "center",
          "align-items": "center",
          "background-color": "rgba(0, 0, 0, 0.5)",
        },
        ".overlay-positioner": {
          "position": "fixed",
          "inset": "0",
          "z-index": "51",
          "display": "flex",
          "justify-content": "center",
          "align-items": "center",
        },
        ".overlay-content": {
          "max-width": `min(calc(100vw - ${theme("spacing.4")}), 500px)`,
          "background-color": theme("colors.gray.50"),
          "border-radius": theme("borderRadius.lg"),
          "box-shadow": theme("boxShadow.lg"),
          "margin": "10vh auto auto",
          "z-index": "52",
          "padding": `${theme("spacing.2")} ${theme("spacing.6")}`,
          "@screen lg": {
            "padding": `${theme("spacing.4")} ${theme("spacing.8")}`,
          },
        },
        ".container": {
          "margin": "0 auto",
          "max-width": theme("maxWidth.7xl"),
        },
        ".row": {
          "display": "flex",
          "justify-content": "space-between",
          "align-items": "center",
          "padding": `0 ${theme("spacing.2")}`,
          "@screen lg": {
            "padding": `0 ${theme("spacing.4")}`,
          },
        },
      })
    },
  ],
}

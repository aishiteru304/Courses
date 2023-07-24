/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        main: "rgb(255 99 14)",
        darkTransparent: "rgba(0,0,0,0.6)",
        lightTransparent: "rgba(255,255,255,0.6)",
        text: "rgba(0,0,0,0.6)",
        footer: "rgb(14 10 56)",
        titleTransparent: "rgba(14,10,56,0.7)"
      },
      screens: {
        xs: "475px",
        fold: "300px"
      }
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/pages/*.tsx", "./src/components/**/*.tsx"],
  theme: {
    extend: {
      gridTemplateColumns: {
        "main-xl": "30rem 18rem 18rem",
        "main-lg": "18rem",
        "main-sm": "minmax(4rem, 16rem)",
      },
      gridTemplateRows: {
        "main-xl": "16rem 13rem",
        "main-lg": "30rem 16rem 13rem",
        "main-sm": "minmax(12rem, 28rem) auto auto auto",
        section: "max-content 1fr max-content",
      },
      colors: {
        primary: "#8E87FA",
        secondary: "#6D67D0",
        tertiary: "#6660C8",
        overshadow: "#DAD8F7",
        alternative: "#C2BFF4",
      },
      backgroundImage: {
        "image-app": "url('/assets/img/bg-app.png')",
        "image-temperature": "url('/assets/svg/bg-temperature.svg')",
      },
    },
  },
  plugins: [],
};

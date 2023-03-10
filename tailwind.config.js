/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/pages/*.tsx", "./src/components/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        primary: "#8E87FA",
        secondary: "#6D67D0",
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

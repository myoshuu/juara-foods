/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#BD0808",
        gray: "#AFAFAF",
      },
    },
  },
  plugins: ["prettier-plugin-tailwind"],
};

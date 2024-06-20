/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#BD0808",
        secondary: "#AFAFAF",
        yllw: "#FFC700",
      },
    },
  },
  plugins: ["prettier-plugin-tailwind"],
};

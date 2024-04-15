/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#094f84",
          btn: "#0a528a",
          default: "#013b66",
          dark: "#00345c",
        },
      },
    },
  },
  plugins: [],
};

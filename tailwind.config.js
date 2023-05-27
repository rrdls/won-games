/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: "var(--font-poppins)",
      },
      colors: {
        primary: "#F231A5",
        secondary: "#3CD3C1",
        mainBg: "#06092B",
        white: "#FAFAFA",
        black: "#030517",
        lightGray: "#EAEAEA",
        gray: "#8F8F8F",
        darkGray: "#2E2F42",
      },
    },
  },
  plugins: [],
};

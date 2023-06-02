/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    fontSize: {
      xs: "1.2rem",
      sm: "1.4rem",
      base: "1.6rem",
      lg: "1.8rem",
      xl: "2.0rem",
      "2xl": "2.4rem",
      "3xl": "3.0rem",
      "4xl": "3.6rem",
    },
    screens: {
      "2xl": { max: "1535px" },
      xl: { max: "1279px" },
      lg: { max: "1023px" },
      md: { max: "767px" },
      sm: { max: "639px" },
    },
    extend: {
      backgroundImage: {
        button:
          "linear-gradient(178.59deg, #FF5F5F -14.51%, #F062C0 102.86%, #F23131 102.86%)",
        buttonHover:
          "linear-gradient(180deg, #E35565 0%, #D958A6 100%), linear-gradient(178.59deg, #FF5F5F -14.51%, #F062C0 102.86%, #F23131 102.86%);",
      },
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

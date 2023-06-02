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
    borderRadius: {
      sm: ".2rem",
      DEFAULT: ".4rem",
      md: ".6rem",
      lg: ".8rem",
      xl: "1.2rem",
      "2xl": "1.6rem",
      "3xl": "2.4rem",
    },
    lineHeight: {
      3: "1.2rem",
      4: "1.6rem",
      5: "2.0rem",
      6: "2.4rem",
      7: "2.8rem",
      8: "3.2rem",
      9: "3.6rem",
      10: "4.0rem",
    },
    fontSize: {
      xs: ["1.2rem", { lineHeight: "1.6rem" }],
      sm: ["1.4rem", { lineHeight: "2.0rem" }],
      base: ["1.6rem", { lineHeight: "2.4rem" }],
      lg: ["1.8rem", { lineHeight: "2.8rem" }],
      xl: ["2.0rem", { lineHeight: "2.8rem" }],
      "2xl": ["2.4rem", { lineHeight: "3.2rem" }],
      "3xl": ["3.0rem", { lineHeight: "3.6rem" }],
      "4xl": ["3.6rem", { lineHeight: "4.0rem" }],
      "5xl": ["4.8rem", { lineHeight: "1" }],
      "6xl": ["6.0rem", { lineHeight: "1" }],
      "7xl": ["7.2rem", { lineHeight: "1" }],
      "8xl": ["9.6rem", { lineHeight: "1" }],
      "9xl": ["12.8rem", { lineHeight: "1" }],
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

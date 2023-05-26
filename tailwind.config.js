const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        liniearPrimary: "linear-gradient(180deg, #6B76FF 0%, #5C33F6  39.8%)",
        circlularPrimary:
          "repeating-radial-gradient(#5C33F6 2px, #6B76FF 5px, #6B76FF 70px);",
      },
      fontFamily: {
        mont: ["var(--font-mont)", ...fontFamily.sans],
      },

      colors: {
        light: "#f5f5f5",
        primary: "#6B76FF",
      },
    },
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }

      xs: { max: "339px" },
      // => @media (max-width: 479px) { ... }
    },
  },
  plugins: [],
};

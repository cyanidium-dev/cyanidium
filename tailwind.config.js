const { heroui } = require("@heroui/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'max-370': { raw: '(max-width: 370px)' },
        'min-420': '420px',
        'min-451': '451px',
        'min-550': '550px',
        'min-608': '608px',
        'min-690': '690px',
        'min-771': '771px',
        'min-788': '788px',
        'min-840': '840px',
        'min-890': '890px',
        'min-1024': '1024px',
        'min-1110': '1110px',
        'min-1190': '1190px',
      },
      fontFamily: {
        actay: ['"Actay Wide"', 'sans-serif'],
        raleway: ['var(--font-raleway)', 'sans-serif'],
        montserrat: ['var(--font-montserrat)', 'sans-serif'],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        black: "#000000",
        white: "#ffffff",
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
      },
    },
  },
  darkMode: "class",
  plugins: [
    heroui({
      addCommonColors: true,
      colors: {
        primary: {
          DEFAULT: "#C9F76F",
          foreground: "#48036F",
        },
        myColor: "#48036F"
      },
    }),
  ],
};

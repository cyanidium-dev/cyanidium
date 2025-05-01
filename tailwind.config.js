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
        'max-370': { raw: '(max-width: 370)' },
        'min-420': { raw: '(min-width: 420)' },
        'min-451': { raw: '(min-width: 451)' },
        'min-550': { raw: '(min-width: 550)' },
        'min-608': { raw: '(min-width: 608)' },
        'min-690': { raw: '(min-width: 690)' },
        'min-771': { raw: '(min-width: 771)'},
        'min-788': { raw: '(min-width: 788)'},
        'min-840': { raw: '(min-width: 840)'},
        'min-890': { raw: '(min-width: 890)'},
        'min-1024': { raw: '(min-width: 1024)'},
        'min-1110': { raw: '(min-width: 1110)'},
        'min-1024': { raw: '(min-width: 1024)'},
        'min-1190': { raw: '(min-width: 1190)'},
      },
      fontFamily: {
        actay: ['"Actay Wide"', 'sans-serif'],
        raleway: ['Raleway', 'sans-serif'],
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

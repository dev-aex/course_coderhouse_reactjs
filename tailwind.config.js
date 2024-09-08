/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    spacing: {
      "4xs": "0.8rem",
      "3xs": "1rem",
      "2xs": "1.2rem",
      "xs": "1.6rem",
      "sm": "2.4rem",
      "md": "3.2rem",
      "lg": "4rem",
      "xl": "5.6rem",
      "2xl": "6.4rem",
      "3xl": "8rem",
      "4xl": "9.6rem",
    },
    fontSize: {
      'xs': '1rem',
      'sm': '1.2rem',
      'md': '1.4rem',
      'base': '1.6rem',
      'lg': '1.8rem',
      'xl': '2.4rem',
      '2xl': '3.2rem',
      '3xl': '4rem'
    },
    colors: {
      "ferre_blue20": "#BFCBED",
      "ferre_blue50": "#97AAE2",
      "ferre_blue100": "#4869CC",
      "ferre_blue200": "#154CFF",
      "ferre_blue300": "#113096",
      "ferre_blue400": "#081850",
      "ferre_blue500": "#050E2E",
      "ferre_red": "#FF6978",
      "ferre_yellow": "#FAA916",
      "ferre_white": "#F6F6F7",
      "white": "#FFFFFF",
      "oferta": "#FF416E",
      "primario-400": "#081850",
      "primario-300": "#113096",
      "primario-100": "#154CFF",
      "primario-50": "#A6B6E6",
      "primario-20": "#CED7F4",
      "blanco": "#FFFFFF",
    },
    fontFamily: {
      sans: ["TT Firs Neue", "sans-serif"],
    },
    "xs": "320px",
    "sm": "640px",
    "md": "768px",
    "lg": "1024px",
    "xl": "1280px",
    "2xl": "1536px",
    "3xl": "1920px",
    extend: {},
  },
  plugins: [],
};

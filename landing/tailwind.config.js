/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('src/assets/path.svg')",
        "price-pattern": "url('src/assets/Rectangle.svg')",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      screens: {
        pc: { min: "991px", max: "1199px" },
        ts: { min: "768px", max: "990px" },
        ms: { min: "481px", max: "768px" },
        xs: { min: "320px", max: "639px" },
      },
    },
  },
  plugins: [],
};

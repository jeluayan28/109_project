/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#F0F3FF",
        secondary: "#white",
        tertiary: "#211951",
        customGreen: '#86D293',
        customBrown: '#2B1B12',
        customPink: '#FDFAD9',
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
        customNeon: '#15F5BA',
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
    },
  },
  plugins: [],
};

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        secondary: "#365ed9",
        secondaryHover: "#2b4cb3",
      },
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
      },
    },
  },
  variants: {
    scrollSnapType: ["responsive"],
  },
  plugins: [require("tailwindcss-scroll-snap")],
};

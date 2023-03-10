/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        OpenSans: ["OpenSans", "sans-serif"],
      },
    },
    // screens: {
    //   sm: "480px",
    //   md: "768px",
    //   lg: "1024px",
    //   xl: "1280px",
    // },
  },
  plugins: [],
};

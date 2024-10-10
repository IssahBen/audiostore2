/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "hsl(0,0%,100%)",
        tintwhite: "hsl(0,0%,98%)",
        brown: "hsl(22,65%,57%)",
        hoverbrown: "hsl(21,94%,75%)",
        lightblack: "hsl(0,0%,6%)",
        extratintwhite: "hsl(0,0%,95%)",
        ash: "hsl(60,1%,30%)",
        ashwhite: "hsl(0,0%,80%)",
      },
    },
  },
  plugins: [],
};

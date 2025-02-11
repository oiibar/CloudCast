/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      raleway: ["Raleway", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        clouds: "url('/assets/Cloud-background.png')",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        geo: ["Geologica", "sans-serif"],
        inter: ['Inter Variable', 'sans-serif'],
        rubik: ['Rubik Variable', 'sans-serif'],	
      },
    },
  },
  plugins: [],
};

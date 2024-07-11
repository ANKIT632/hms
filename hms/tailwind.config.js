/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '480px',
      'xxs': '320px',
      },
      colors: {
        'btn-hover': '#267dbf'
      }
    },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor:{
        'common':'#FF9500'
      },
      fontFamily:{
        'vietnam': ["Be Vietnam Pro", "sans-seri"]
      },
      colors: {
        'webcolor':'#262626',
        'span':'#FF9500'

      }
      
      
    },
  },
  plugins: [],
}
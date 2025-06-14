/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // darkbg: '#292c33','black',
        darkbg: 'black',

      }
    }
  },
  plugins: [],
}


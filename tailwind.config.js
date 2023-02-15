/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primary: '#BD081C',
      secondary: '#EFEFEF',
      gray: '#808080',
    },
    extend: {
    },
    fontFamily: {
      'sans': ['Helvetica', 'Arial', 'sans-serif'],
    }
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
          colors: {
      'primary': '#103054',
      'secondary': '#E1862D',
      'tertiary': '#FFFFFF',
      'quaternary': '#E0A267',

    },
    
     fontFamily: {
      'archivo': ['Archivo Black', 'sans-serif'],
      'montserrat': ['Montserrat', 'sans-serif'],
    },
    },
  },
  plugins: [],
}
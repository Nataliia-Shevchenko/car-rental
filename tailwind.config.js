/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'accent': '#3470FF',
      'hover': '#0B44CD',
      'white': '#ffffff',
      'input': '#F7F7FB',
      'primaryt': '#121417',
      'secondaryt': 'rgba(18, 20, 23, 0.50)',
      'backdrop': 'rgba(18, 20, 23, 0.50);',


  
    },
    fontFamily: {
      'sans': ['Manrope', 'sans-serif'],}
  },
  plugins: [],
}
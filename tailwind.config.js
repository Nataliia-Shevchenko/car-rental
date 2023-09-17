/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      accent: "#3470FF",
      hover: "#0B44CD",
      white: "#ffffff",
      inputbg: "#F7F7FB",
      primaryt: "#121417",
      secondaryt: "rgba(18, 20, 23, 0.50)",
      backdrop: "rgba(18, 20, 23, 0.50)",
      inputtext: "rgba(18, 20, 23, 0.20)",
      inputborder: "rgba(138, 138, 137, 0.20)",
      scroll: "rgba(18, 20, 23, 0.05)",
  
    },
    fontFamily: {
      sans: ["Manrope", "sans-serif"],
      sans2: ["Montserrat", "sans-serif"],
    },
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};

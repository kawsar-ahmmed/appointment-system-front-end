/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  themes: [
    {
      mytheme: {

        "primary": "#0FCFEC",

        "secondary": "#19D3AE",

        "accent": "#3A4256",

        "neutral": "#2a323c",

        "base-100": "#1d232a",

        "info": "#3abff8",

        "success": "#36d399",

        "warning": "#fbbd23",

        "error": "#f87272",
      },
    },
  ],
  plugins: [require("daisyui")],
}
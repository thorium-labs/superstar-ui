/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "ss-orange-100": "#FEF5D7",
        "ss-orange-200": "#FEE9B0",
        "ss-orange-300": "#FDD989",
        "ss-orange-400": "#FBC96B",
        "ss-orange-500": "#FAAF3B",
        "ss-orange-600": "#D78C2B",
        "ss-orange-700": "#B36C1D",
        "ss-orange-800": "#905012",
        "ss-orange-900": "#773B0B",
      }
    },
  },
  plugins: [],
}

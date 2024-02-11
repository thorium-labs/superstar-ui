/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'ss-orange-100': '#FEF5D7',
        'ss-orange-200': '#FEE9B0',
        'ss-orange-300': '#FDD989',
        'ss-orange-400': '#FBC96B',
        'ss-orange-500': '#FAAF3B',
        'ss-orange-600': '#D78C2B',
        'ss-orange-700': '#B36C1D',
        'ss-orange-800': '#905012',
        'ss-orange-900': '#773B0B',
        'ss-bg': '#1c1917'
      },
      gridTemplateColumns: {
        "auto-150": "repeat(auto-fill,minmax(150px,1fr))",
        "auto-180": "repeat(auto-fill,minmax(180px,1fr))",
        "auto-200": "repeat(auto-fill,minmax(200px,1fr))",
        "auto-250": "repeat(auto-fill,minmax(250px,1fr))",
        "auto-300": "repeat(auto-fill,minmax(300px,1fr))",
      },
      keyframes: {
        floating: {
          '0%, 100%': { transform: 'translatey(0px)' },
          '50%': { transform: 'translatey(-10px)' }
        }
      },
      animation: {
        floating: 'floating 6s ease-in-out infinite',
        'floating-2': 'floating 4s ease-in-out infinite',
        'spin-slow': 'spin 2.5s linear infinite'
      }
    }
  },
  plugins: [require('tailwind-scrollbar')({ nocompatible: true })],
  variants: {
    scrollbar: ['rounded']
  }
};

/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: { animation: {
      slideRight: 'slideRight 0.60s ease-in-out',
      circle: 'moveCircle 0.60s ease-in-out',
    },
    keyframes: {
      slideRight: {
        '0%': { transform: 'translateX(25%)' },
        '100%': { transform: 'translateX(0)' },
      },
      moveCircle: {
        '0%': { transform: 'translateX(-35%)' },
        '100%': { transform: 'translateX(0)' },
      },
    },},
  },
  plugins: [],
}


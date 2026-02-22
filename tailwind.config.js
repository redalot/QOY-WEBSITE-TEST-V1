/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        qoy: {
          blue: '#002F6C', // Dark Royal Blue
          gold: '#FFD700', // Gold
          lightBlue: '#4A90E2', // Highlight Blue
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
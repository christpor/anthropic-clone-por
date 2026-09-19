/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: {
          light: '#fbfaf7',
          DEFAULT: '#f7f4ee',
          medium: '#f4efe6',
          dark: '#ede8df',
          card: '#eae4d9',
        },
        ink: {
          DEFAULT: '#191919',
          muted: '#666666',
          light: '#888888',
        },
        terracotta: {
          DEFAULT: '#cc785c',
          hover: '#b56449',
        },
        benchmark: {
          green: '#dbe8d4',
          border: '#b6d0ab',
          darkgreen: '#2e5b27',
        },
        cloud: {
          blue: '#5b83b3',
          light: '#8faed9',
        }
      },
      fontFamily: {
        serif: ['Charter', 'Reckless', 'Tiempos', 'Georgia', 'serif'],
        sans: ['Styrene', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      borderRadius: {
        '2.5xl': '20px',
        '3xl': '24px',
        '4xl': '32px',
      }
    },
  },
  plugins: [],
}

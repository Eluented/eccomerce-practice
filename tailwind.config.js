/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-blue': '#0C243C',
        'light-blue': '#1fc1c6',
        'light-gray': '#C9D1D5'
      }
    },
  },
  plugins: [],
}
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: 'class', // or 'media'
  theme: {
    extend: {
      colors: {
        primary: 'rgb(59 130 246)',
        secondary: 'rgb(16 185 129)',
        accent: 'rgb(245 158 11)',
        danger: 'rgb(239 68 68)'
      }
    },
  },
  plugins: [],
}
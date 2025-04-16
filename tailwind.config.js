module.exports = {
    content: [
      './src/pages/**/*.{js,ts,jsx,tsx}',
      './src/components/**/*.{js,ts,jsx,tsx}',
    ],
    darkMode: 'class',
    theme: {
      extend: {
        colors: {
          primary: {
            500: '#3B82F6',
            600: '#2563EB',
          },
          secondary: {
            500: '#10B981',
            600: '#059669',
          },
          accent: {
            500: '#F59E0B',
            600: '#D97706',
          },
        },
      },
    },
    plugins: [],
  }
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      fontFamily: {
        'Inter': ['Inter'],
      },
      colors: {
        primary : '#4d4d4d',
        secondary: '#64748b',
        dark : '#0f172a',
      },
      screens: {
        'xl': '1320px',
        '2xl': '1366px',
        '3xl' : '1440px'
      },
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'instrument-sans': ['"Instrument Sans"', 'system-ui', 'sans-serif'],
        'instrument-serif': ['"Instrument Serif"', 'Georgia', 'serif'],
      },
      colors: {
        brand: {
          blue: '#3054ff',
          'blue-hover': '#2040e0',
          dark: '#0a0400',
          gradient: '#b4c0ff',
        },
      },
      maxWidth: {
        '5xl': '64rem',
      },
    },
  },
  plugins: [],
}

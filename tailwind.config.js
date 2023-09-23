/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2c2c2c',
          dark: '#1e1e1e',
        },
      },
    },
  },
  plugins: [],
};

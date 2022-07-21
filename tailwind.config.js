/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          light: 'white',
          main: '#28282a',
          dark: '#1e1e1f',
        },
        secondary: {
          light: '#fff5f8',
          main: '#ff3366',
          dark: '#e62958',
        },
      },
    },
    plugins: [],
  },
};

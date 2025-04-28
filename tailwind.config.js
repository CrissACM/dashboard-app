/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ['./app/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        primary: '#3DD34C',
        secondary: {
          DEFAULT: '#6D62F7',
          100: '#414CAA',
        },
        tertiary: '#2280FF',
      },

      fontFamily: {
        'Montserrat-black': ['Montserrat-Black', 'sans-serif'],
        'Montserrat-light': ['Montserrat-Light', 'sans-serif'],
        'Montserrat-medium': ['Montserrat-Medium', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

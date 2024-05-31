/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	darkMode: false, // or 'media' or 'class'
	theme: {
    extend: {
      colors: {
        black: '#1c1c1c',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      }
    },
	},
	variants: {
		extend: {},
	},
	plugins: [],
}

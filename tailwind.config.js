/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'base-site': '#212529',
		'Light-Black':'#111418'
      },
    },
  },
  plugins: [],
}

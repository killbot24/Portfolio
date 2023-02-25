/** @type {import('tailwindcss').Config} */
module.exports = { 
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        'base-site': '#212529',
		'Light-Black':'#111418'
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],

}

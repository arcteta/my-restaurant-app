/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        'wImg': '34rem'
      },
      colors: {
        'firstContent': '#ED7D31',
        'secondContent': '#6C5F5B',
        'thirdContent': '#4F4A45',
        'fourthContent': '#F6F1EE',
      },
      fontFamily: {
        'mainFont': ['Montserrat'],
      },
    },
  },
  plugins: [],
}
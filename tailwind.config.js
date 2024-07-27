/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'text-gray' : '#6b6b6b',
        'html' : '#f16a30',
        'css' : '#306af1',
        'javascript' : '#f7e025',
        'typescript' : '#377cc8',
        'react' : '#1ba1cc',
        'trello' : '#087ec5',
        'git' : '#f05639',
        'tailwind' : '#36b6f2',
      },
      screens: {
        'desktop': '840px'
      }
    },
  },
  plugins: [],
}


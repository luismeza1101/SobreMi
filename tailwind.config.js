/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'fondo' : '#fff',
        'fondo-boton' : '#1f1f1f',
        'fondo-secundario' : '#f9fafb',
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
        'desktop': '900px',
        'semi-desktop': '890px'

      },
      fontFamily:{
        montserrat: ['Montserrat', 'sans-serif'],
      },
      boxShadow:{
        'shadow-picture': '0px 20px 0px 10px rgba(230,230,230,1);'
      }
    },
  },
  plugins: [],
}


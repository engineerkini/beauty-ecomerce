/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-color': '#F5A3B7',
        'text-color1': '#697586',
        'text-color2': '#383838',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        google: ['Poppins', 'sans-serif'], 
      },
      fontSize:{
            'h1':'36px',
             'p-lg':'24px',
             'p-md':'16px',
             'p-sm' :'14px'
             
      }
      ,
      lineHeight:{
        'h1':'54px',
        'p-lg':'27px',
        'p-md':'24px',
        'p-sm' :'22px'
      },
      backgroundImage: {
        'footer-linear': 'linear-gradient(88.13deg, #252525 -42.06%, #3A3A3A 58.46%, #323232 165.46%)',
      },
    },
  },
  plugins: [],
}

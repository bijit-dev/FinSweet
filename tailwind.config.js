/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#BBBBCB',
        'b2': '#282938',

      },
      fontFamily: {
        'pop': ["Poppins"],
        'man': ["Manrope"],
        
      },
      width: {
        'container': '1280px',
        'w313': '313px',
        '520': '520px',
        

      },
      spacing: {
        'p128': '128px',
      },
      lineHeight: {
        '64': '64px',
      }
    },
  },
  plugins: [],
}


module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx, html}",
    "./**/*.{js}"
  ],
  theme: {
    extend: {
      colors:{
        'blue-one': '#223844',
        'yellowOne': '#FAB400'
      },
      fontFamily:{
        'Lato': ['Lato', 'sans-serif']
      },
      borderWidth: {
        DEFAULT: '1px',
        '0': '0',
        '2': '2px',
        '3': '3px',
        '4': '4px',
        '6': '6px',
        '8': '8px',
      },
      fontSize: {
        'exsm': '10px',
        'suxs': '7px',
        'xxxs': '5px'
      },  
      screens: {
        'exsmall': '490px',
        'small': '640px',
        'medium': '768px',
        'large': '1024px',
        'xllarge': '1280px'
        
      },
      width: {
        '128': '30rem',
      },
      height: {
        '128': '32rem',
      }
      
      
    },
  },
  plugins: [],
}

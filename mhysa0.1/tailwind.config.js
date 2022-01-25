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
        'suxs': '7px'
      }
      
      
    },
  },
  plugins: [],
}

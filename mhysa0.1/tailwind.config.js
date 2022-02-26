module.exports = {
  mode: 'jit',
  content: [

    "./src/**/*.{js,jsx,ts,tsx, html}"

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
      },
      boxShadow: {
        sm: '5px 8px 20px 0 rgba(0, 0, 0, 0.3)',
        DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        md: '0px 3px 5px 0px rgba(0, 0, 0, 0.4)',
        lg: '0px 5px 5px 0px rgba(0, 0, 0, 0.5)',
        xl: '0 0 20px 2px rgba(0, 0, 0, 0.4)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
       '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
        inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
        none: 'none',
      },
      borderRadius: {
        'large': '2.5rem'
      }
    },
  },
  plugins: [],
}

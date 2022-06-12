module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // 'blue': '#191d3a',
        // 'purple': '#7e5bef',
        // 'pink': '#ff49db',
        // 'orange': '#ff7849',
        // 'green': '#13ce66',
        // 'yellow': '#ffc82c',
        // 'gray-dark': '#273444',
        // 'gray': '#8492a6',
        secondary:{
          900:'#bf1650',
        },
        white:{
          900:'#FFFFFF',
          200:'#FCFCFB',
          DEFAULT: '#FFFFFF',
        },
        pink: '#ec5990',
      },
      fontFamily:{
        roboto:"'Roboto', sans-serif",
        FjallaOne:"'Fjalla One', sans-serif"
      },
      backgroundImage:{
       'shock':"url('./assets/shock.png')",
      }
    },
    screens: {
    
      'sm': '370px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [],
}

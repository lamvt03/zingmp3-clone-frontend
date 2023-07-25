module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      width: {
        '15': '60px'
      },
      backgroundColor: {
        'main-100': '#E7ECEC',
        'main-200': '#DDE4E4',
        'main-300': '#CED9D9',
        'main-400': '#C0D8D8',
        'main-500': '#0E8080',
        'overlay-30': 'rgba(0,0,0,0.3)'
      },
      colors: {
        'main-100': '#E7ECEC',
        'main-200': '#DDE4E4',
        'main-300': '#CED9D9',
        'main-400': '#C0D8D8',
        'main-500': '#0E8080'
      },
      flex: {
        '3': '3 3 0%',
        '4': '4 4 0%',
        '6': '6 6 0%',
        '7': '7 7 0%',
      },
      zIndex: {
        '4': '4',
        '5': '5'
      },
      keyframes: {
        'slide-right': {
          '0%': {
            '-webkit-transform': 'translateX(-500px);',
            transform: 'translateX(-500px);'
          },
          '100%': {
            '-webkit-transform': 'translateX(0);',
            transform: 'translateX(0);'
          }
        },
        'slide-left': {
          '0%': {
            '-webkit-transform': 'translateX(500px);',
            transform: 'translateX(500px);'
          },
          '100%': {
            '-webkit-transform': 'translateX(0);',
            transform: 'translateX(0);'
          }
        },
        'slide-left2': {
          '0%': {
            '-webkit-transform': 'translateX(500px);',
            transform: 'translateX(500px);'
          },
          '100%': {
            '-webkit-transform': 'translateX(0);',
            transform: 'translateX(0);'
          }
        },
        'slide-sb-left': {
          '0%': {
            // right: '-330px'
            '-webkit-transform': 'translateX(0)',
            transform: 'translateX(0)'
          },
          '100%': {
            // right: '0px'
            '-webkit-transform': 'translateX(-100%)',
            transform: 'translateX(-100%)'
          }
        },
        'slide-sb-right': {
          '0%': {
            '-webkit-transform': 'translateX(-100%)',
            transform: 'translateX(-100%)'
          },
          '100%': {
            '-webkit-transform': 'translateX(0)',
            transform: 'translateX(0)'
          }
        }
      },
      animation: {
        'slide-right': 'slide-right 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;',
        'slide-left': 'slide-left 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;',
        'slide-left2': 'slide-left2 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;',
        'slide-sb-left': 'slide-sb-left 1s ease-out both',
        'slide-sb-right': 'slide-sb-right 1s ease-out both',
      }
    },
    plugins: [],
  }
}


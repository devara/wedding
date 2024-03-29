module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './nuxt.config.{js,ts}'
  ],
  theme: {
    extend: {
      fontFamily: {
        cookie: ['Cookie', 'cursive'],
        poppins: ['Bitter', 'serif'],
        lobster: ['Lobster Two', 'cursive']
      },
      fontSize: {
        '2rem': [
          '2rem',
          {
            lineHeight: '2.25rem'
          }
        ]
      },
      colors: {
        dark: {
          background: {
            primary: '#16162A',
            secondary: '#292946',
            thriary: '#494980',
            contrast: '#EAEAFF',
            main: '#292927'
          },
          basic: {
            primary: '#F3F3F3',
            secondary: '#8E8EA3',
            thriary: '#818191',
            strokes: '#52526B',
            main: '#DD9626'
          },
          accent: {
            primary: '#5C7AE5',
            secondary: '#563EEE'
          }
        }
      },
      textColor: {
        dark: {
          basic: {
            primary: '#F3F3F3',
            secondary: '#8E8EA3',
            thriary: '#818191',
            strokes: '#52526B',
            main: '#DD9626'
          },
          accent: {
            primary: '#5C7AE5'
          },
          invertion: {
            primary: '#16162A'
          }
        }
      },
      minHeight: {
        '70vh': '70vh'
      },
      borderRadius: {
        '100%': '100%'
      }
    }
  },
  variants: {
    extend: {
      ringColor: ['focus-visible']
    }
  }
}

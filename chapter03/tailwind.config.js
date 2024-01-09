import colors from 'tailwindcss/colors'

/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      colors: {
        primary: colors.amber[600],
        secondary: colors.slate[100],
        red: colors.red[600],
        yellow: colors.yellow[500]
      },

      fontFamily: {
        sans: ['Inter', 'sans-serif']
      },

      container: {
        center: true,
        padding: {
          DEFAULT: '1.5rem',
          lg: '4rem',
          xl: '4rem',
          '2xl': '4rem'
        },

        screens: {
          sm: '576px',
          md: '768px',
          lg: '992px',
          xl: '1200px',
          '2xl': '1400px'
        }
      }
    }
  },
  plugins: []
}

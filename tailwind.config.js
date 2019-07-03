const { colors } = require('tailwindcss/defaultTheme')

module.exports = {
  important: true,
  theme: {
    extend: {
      colors: {
        primary: colors.blue[500],
        secondary: colors.red[500],
        success: colors.green[500],
        warning: colors.yellow[500],
        info: colors.blue[500],
        error: colors.red[600],
        track: colors.gray[400],
        hint: colors.gray[300]
      },
      borderRadius: {
        xl: '1.5rem'
      },
      minHeight: {
        '100v': '100vh'
      },
      height: {
        '100v': '100vh'
      },
      width: {
        '100v': '100vw'
      }
    }
  },
  variants: {},
  plugins: []
}

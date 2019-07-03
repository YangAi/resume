import Vue from 'vue'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'

const { colors } = require('tailwindcss/defaultTheme')

MuseUI.theme.add('lvxingshai', {
  primary: colors.blue[500],
  secondary: colors.red[500],
  success: colors.green[500],
  warning: colors.yellow[500],
  info: colors.blue[500],
  error: colors.red[600],
  track: colors.gray[300],
  text: {
    primary: '#2c3643',
    secondary: 'gba(0, 0, 0, 0.44)',
    alternate: '#fff',
    disabled: 'rgba(0, 0, 0, 0.28)',
    hint: 'rgba(0, 0, 0, 0.28)' // 提示文字颜色
  },
  divider: 'rgba(0, 0, 0, 0.08)',
  background: {
    paper: '#fff',
    chip: colors.gray[200],
    default: colors.gray[100]
  }
}).use('lvxingshai')

Vue.use(MuseUI)

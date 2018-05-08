import { createMuiTheme } from 'material-ui/styles'
import green from 'material-ui/colors/green'

const theme = createMuiTheme({
  palette: {
    success: {
      light: green[300],
      main: green[500],
      dark: green[700]
    }
  },
  spacing: {
    unit: 8
  }
})

export default theme

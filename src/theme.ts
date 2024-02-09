import {
  createTheme,
} from '@mui/material/styles'

const theme = createTheme({
  components: {
    MuiBadge: {
      styleOverrides: {
        badge: { 
          position: 'static',
          transform: 'none',
          borderRadius: '4px',
          fontWeight: 700
        },
        colorInfo: {
          color: '#212121',
          backgroundColor: '#02d37f',
        },
        colorWarning: {
          color: '#fff',
          backgroundColor: '#e17a01',
        },
        colorSuccess: {
          color: '#fff',
          backgroundColor: '#321e41',
        },
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          border: '1px solid #d2d2d2'
        }
      }
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: '0 16px'
        }
      }
    }
  },
  palette: {
    primary: { main: '#014751' },
    secondary: { main: '#e3eced' },
  },
  typography: {
    fontFamily: 'Inter, sans-serif',
    body1: {
      color: '#212121'
    },
    body2: {
      color: '#212121'
    },
    h5: {
      fontWeight: 700,
      fontSize: 20,
      lineHeight: '24px',
      color: '#212121'
    }
  }
})

export default theme
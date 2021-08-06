import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#FFFFFF"
        },
        secondary: {
            main: "#282c34"
        }
    },
    breakpoints: {
        values: {
            xs: 300,
            sm: 500,
            md: 960,
            lg: 1280,
            xl: 1920,
        },
    },
    overrides: {
        MuiGrid: {
            root: {
                '& .MuiGrid-item': {
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }
            }
        },
        MuiSelect: {
            root: {
                background: '#24282f',
                color: '#ccc',
                flexGrow: 1
            },
            icon: {
                color: '#ccc'
            },
            select: {
                "&:not([multiple]) option": {
                    backgroundColor: "#24282f",
                }
            }
        },
        MuiFormHelperText: {
            root: {
                textAlign: 'center',
                fontWeight: '600',
                color: 'black',
                fontSize: '1rem',
                borderBottom: '2px solid',
                borderRadius: '5px'
            }
        }
    }
})

export default theme;
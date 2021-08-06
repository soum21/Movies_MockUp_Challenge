export default (theme) => ({
    wrapper: {
        flexGrow: 1,
      
        padding: theme.spacing(0, 3),
        [theme.breakpoints.down('sm')]: {
            padding: theme.spacing(0, 1)
        },
        
    },
    contentWrapper: {
        maxHeight: 70,
    },
    grid: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        [theme.breakpoints.down('xs')]: {
            justifyContent: 'space-around'
        },
    },
    title: {
        flexGrow: 1,
        padding: '10px',
        color: '#ccc',
        cursor:'pointer',
        margin: 0,
        '&:after': {
            content: '""',
            zIndex: 1,
            bottom: '60%',
            marginBottom: '2px',
            height: '2px',
            left: 0,
            right: 0,
            background: '#373d47',
            position: 'absolute',
            cursor:'default',
        }
    },
    line: {
        zIndex: 2,
        background: '#24282f',
        padding: '4px 8px',
        position: 'relative'
    },
   
    
});
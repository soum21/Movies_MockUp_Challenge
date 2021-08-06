export default (theme) => ({
    root: {
        overflow: 'hidden',
        display: 'flex',
        minHeight: '420px',
        margin: '0 auto 50px',
        padding: '1vw',
        justifyContent: 'center',
        backgroundColor: '#fff',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column'
        }
    },
    bgImageContainer: {
        clipPath: 'circle(90% at 100px 50px)',
        flex: 4,
        [theme.breakpoints.down('md')]: {
            flex: 5,
            clipPath: 'circle(80% at 45px 70px)'

        },
        [theme.breakpoints.down('sm')]: {
            clipPath: 'none',
            flex: 1,
            height: '400px'
        },

    },
    bgImage: {
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top left',
        width: '100%',
        height: '100%',
        [theme.breakpoints.down('xs')]: {
            backgroundSize: 'percentage',
            backgroundPosition: 'center',
        },
    },
    info: {
        display: 'flex',
        flex: 3,
        flexDirection: 'column',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        textAlign: 'right',
        padding: '30px 20px 30px 0',
        zIndex: 1,
        [theme.breakpoints.down('sm')]: {
            alignItems: 'flex-start',
            flex: 1,
            textAlign: 'left',
            padding: '30px 20px'
        }
    },
    detail: {
        textTransform: 'uppercase',
        margin: 0,
        padding: '0 0 10px',
        borderBottom: '2px solid rgba(0, 0, 0, 0.3)'
    },
    title: {
        fontWeight: 'bold',
        fontSize: '36px',
        margin: '20px 0 0'
    },
    synopsis: {
        margin: '20px 0 10px'
    },
    subtitle: {
        fontSize: '14px',
        margin: '10px 0',
        width: '110%',
    },
    tagContainer: {
        position: 'relative',
        width: '100%',
        [theme.breakpoints.down('sm')]:{
            width: '100%'
        }
    },
    tagData: {
        border: '2px solid black',
        borderRadius: '4px',
        display: 'inline-block',
        fontSize: '12px',
        padding: '3px 10px',
        margin: '5px',
    },
    linkButton: {
        fontSize: '14px',
        margin: '10px 0',
        width: '110%',
        [theme.breakpoints.down('sm')]:{
            display:'flex',
            justifyContent: 'flex-start',
        }

    },
    btn: {}
});
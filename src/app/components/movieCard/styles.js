export default (theme) => ({

    card: {
        cursor: 'pointer',
        borderRadius:12,
        height: 'auto',
        width:'fit-content',
        position: "relative",
        margin:'20px',
        boxShadow: '0px 1px 2px 0px rgba(0,0,0,0.4)',
        WebkitTransform: 'margin 0.5s ease-out',
        msTransform: 'margin 0.5s ease-out',
        '&:hover': {
            boxShadow: '-1px 10px 29px 0px rgba(0,0,0,0.8)',
            marginTop: '15px'
        }
    },
    cardActionarea: {
        position: "relative",
        height:'inherit',
        width:'inherit'
    },
    cardAction: {
        position: "relative"
    },
    cardContent: {
        position: "absolute",
        top: "70%",
        height:'100%',
        width: "100%",
        backgroundColor: "rgba(1,1,1,.40)",
        color: '#FFFFFF',
    },
    cardMedia: {
        height: 'inherit',
    },
    info:{
        display:'flex',
        flexDirection:'column',
        fontSize:'12%'
    },
    title:{
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        display: 'block',
        fontSize: '16px',
        textTransform:'uppercase'
    },
    subtitle:{
        overflowWrap: 'break-word',
        wordWrap: 'break-word',
        hyphens: 'auto'
    },
    iconRating:{
       fontSize:"14px"
    },
    cardMediaUnavailable:{
        height: '300px',
    }
})
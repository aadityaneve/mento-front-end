import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    cardStyle: {
        position: 'relative',

        border: '1px solid black',
        color: 'white',
        width: '380px',
        height: '410px',
        borderRadius: '12px',
        boxSizing: 'border-box',
        overflow: 'hidden',

        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
    },

    backgroundImage: {
        zIndex: '0',
        position: 'absolute',
        width: '380px',
        height: '410px',
        backgroundImage: (props) => `url(${props.card_img})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        transition: 'all 1s',
        '&:hover': {
            transform: 'scale(1.2)',
        },
    },

    playButton: {
        top: '5.5%',
        left: '71%',
        width: '80px',
        height: '80px',
        zIndex: '1',

        boxShadow: '1px 1px 5px grey',

        backgroundColor: 'white',
        color: '#F15340',
        borderRadius: '50px',
        '&:hover': {
            backgroundColor: 'white',
        },
    },

    slantedLine: {
        backgroundColor: 'white',
        width: '120%',
        marginLeft: '-10%',
        zIndex: '0',
        marginBottom: '-26px',
        paddingBottom: '33px',
        transform: 'rotateZ(-8deg)',
    },

    topic: {
        backgroundColor: 'white',
        color: 'black',
        zIndex: '1',

        padding: '25px',
    },

    cardDetails: {
        backgroundColor: 'white',
        color: 'black',
        zIndex: '1',
        padding: '10px',

        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },

    mentorDetails: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'flex-start',
    },

    videoCount: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
    },
});

export default useStyles;

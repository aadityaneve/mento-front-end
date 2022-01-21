import { makeStyles } from '@mui/styles';

const Singlecardstyle = makeStyles({
    root: {
        width: '87%',
        margin: '3% auto auto auto',
        display: 'flex',
        gap: '10px',

        color: '#e8e7e7',
    },

    topicsBox: {
        marginTop: '7px',
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
    },

    cardsBox: {
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
    },

    verticalAnimatedLine: {
        color: 'yellow',
        '&:hover': {
            content: '',
            position: 'absolute',
            height: '0',
            bottom: '-1px',
            width: '4px',
            background: '#f36f21',
            transition: 'all 0.3s ease',
        },
    },

    singleTopic: {
        cursor: 'pointer',
        transition: 'all 0.5s',
        '&:hover': {
            transform: 'scale(1.1)',
        },
    },

    displayTopicHeading: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',

        color: '#DD6721',

        marginLeft: '2%',
    },

    allCards: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
});

export default Singlecardstyle;

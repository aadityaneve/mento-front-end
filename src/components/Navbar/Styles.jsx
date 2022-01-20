import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    logoStyle: {
        ['@media (max-width: 1500px)']: {
            width: '10%',
        },
        ['@media (max-width: 1300px)']: {
            width: '12%',
        },
        ['@media (max-width: 1100px)']: {
            width: '15%',
        },
        ['@media (max-width: 900px)']: {
            width: '20%',
        },
    },
});

export default useStyles;

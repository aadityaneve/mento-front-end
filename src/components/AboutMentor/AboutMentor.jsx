import { Box, Typography } from '@mui/material';

const AboutMentor = ({ about: { name } }) => {
    return (
        <Box>
            <Typography
                variant='h6'
                component='h6'
                sx={{
                    textAlign: 'left',
                    fontSize: '16px',
                    fontWeight: '500',
                    lineHeight: 'normal',
                    color: '#AAAAAA',
                    marginBottom: '9px',
                    lineHeight: '25px',
                    marginBottom: '18px',
                }}
            >
                {name}
            </Typography>
        </Box>
    );
};

export default AboutMentor;

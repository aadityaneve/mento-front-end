import { Box, Typography } from '@mui/material';
import TimerIcon from '@mui/icons-material/Timer';

const VideoPanel = ({ video: { name, desc, duration } }) => {
    return (
        <Box sx={{ backgroundColor: '#F7F7F7', padding: '15px' }}>
            <Box
                sx={{
                    display: 'flex',
                    borderRadius: '15px',
                    cursor: 'pointer',
                }}
            >
                <Box
                    sx={{
                        backgroundImage:
                            'url("https://d1tthr7pv14hhy.cloudfront.net/Images/Courses/Entrepreneurship/RIA1.jpg")',
                        width: '25vw',
                        backgroundSize: 'contain',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: '0 0',
                        marginRight: '20px',
                        borderRadius: '8px',
                    }}
                ></Box>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        textAlign: 'left',
                        width: '100%',
                    }}
                >
                    <Typography
                        variant='h6'
                        component='h6'
                        sx={{
                            // fontSize: '1rem',
                            fontWeight: 'bold',
                            marginBottom: '9px',
                        }}
                    >
                        {name}
                    </Typography>
                    <Typography sx={{ color: '#666666', marginBottom: '9px' }}>
                        {desc}
                    </Typography>
                    <Typography sx={{ display: 'flex', alignItems: 'center' }}>
                        <TimerIcon fontSize='medium' /> {duration} MIN
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default VideoPanel;

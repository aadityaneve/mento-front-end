import React from 'react';

import { Box, Button, Typography, Card } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

const TopicCard = () => {
    const cardStyle = {
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
    };

    const backgroundImage = {
        zIndex: '0',
        position: 'absolute',
        width: '380px',
        height: '410px',
        backgroundImage: `url("https://d1tthr7pv14hhy.cloudfront.net/Images/Courses/Entrepreneurship/Ritesh+5.jpg")`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        transition: 'all 1s',
        '&:hover': {
            transform: 'scale(1.2)',
        },
    };

    const playButton = {
        top: '5.5%',
        left: '71%',
        width: '80px',
        height: '80px',
        zIndex: '1',

        boxShadow: '2px 2px 10px grey',

        backgroundColor: 'white',
        color: '#F15340',
        borderRadius: '50px',
        '&:hover': {
            backgroundColor: 'white',
        },
    };

    const slantedLine = {
        backgroundColor: 'white',
        width: '120%',
        marginLeft: '-10%',
        zIndex: '0',
        marginBottom: '-26px',
        paddingBottom: '33px',
        transform: 'rotateZ(-8deg)',
    };

    const topic = {
        backgroundColor: 'white',
        color: 'black',
        zIndex: '1',

        padding: '25px',
    };

    const cardDetails = {
        backgroundColor: 'white',
        color: 'black',
        zIndex: '1',
        padding: '10px',

        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    };

    const mentorDetails = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'flex-start',
    };

    const videoCount = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
    };

    return (
        <Card sx={cardStyle}>
            <Box sx={backgroundImage}></Box>
            <Button sx={playButton}>
                <PlayArrowIcon color='white' fontSize='large' />
            </Button>
            <Box sx={slantedLine}>SlantedLine</Box>
            <Typography sx={topic} variant='h5' component='h5' align='left'>
                Enterpreneurship 101
            </Typography>
            <Box sx={cardDetails}>
                <Box>PHOTO</Box>
                <Box sx={mentorDetails}>
                    <Typography>RITESH AGARWAL</Typography>
                    <Typography>FOUNDER, OYO ROOMS</Typography>
                </Box>
                <Box sx={videoCount}>
                    <Typography>9</Typography>
                    <Typography>VIDEOS</Typography>
                </Box>
            </Box>
        </Card>
    );
};

export default TopicCard;

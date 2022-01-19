import React from 'react';

import useStyles from './Styles';
import { Box, Button, Typography, Card } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

const TopicCard = ({
    topic: { card_img, desg, heading, name, total_count },
}) => {
    const props = {
        card_img,
    };
    const classes = useStyles(props);

    return (
        <Box className={classes.cardStyle}>
            <Box className={classes.backgroundImage}></Box>
            <Button className={classes.playButton}>
                <PlayArrowIcon color='white' fontSize='large' />
            </Button>
            <Box className={classes.slantedLine}>SlantedLine</Box>
            <Typography
                className={classes.topic}
                variant='h5'
                component='h5'
                align='left'
            >
                {heading}
            </Typography>
            <Box className={classes.cardDetails}>
                <Box className={classes.mentorPhoto}></Box>
                <Box className={classes.mentorDetails}>
                    <Typography className={classes.mentorName}>
                        {name}
                    </Typography>
                    <Typography className={classes.mentorDesg}>
                        {desg}
                    </Typography>
                </Box>
                <Box className={classes.videoCount}>
                    <Typography className={classes.count}>
                        {total_count}
                    </Typography>
                    <Typography className={classes.countText}>
                        VIDEOS
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default TopicCard;

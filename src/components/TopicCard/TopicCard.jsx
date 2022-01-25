import React from 'react';

import useStyles from './Styles';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Button, Typography, Card } from '@mui/material';
import { setOnClickTopic } from '../../features/actions';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { useNavigate } from 'react-router-dom';

const TopicCard = ({ topic, matchTopic }) => {
    const { card_img, desg, heading, name, total_count } = topic;
    const props = {
        card_img,
    };
    const classes = useStyles(props);

    const { allTopicsDetails, onClickTopic } = useSelector((state) => state);

    const dispatch = useDispatch();

    const handleTopicClick = (topic) => {
        dispatch(setOnClickTopic(topic));
        matchTopic(allTopicsDetails, onClickTopic);
    };

    const navigate = useNavigate();

    return (
        <Box
            sx={{cursor: 'pointer'}}
            onClick={() => {
                handleTopicClick(topic);
                navigate(`/mento-front-end/topicDetails`);
            }}
            className={classes.cardStyle}
        >
            <Box className={classes.backgroundImage}></Box>
            <Button
                sx={{
                    backgroundColor: 'white',
                    borderRadius: '50%',
                    '&:hover': {
                        backgroundColor: 'white',
                    },
                }}
                className={classes.playButton}
            >
                <PlayArrowIcon fontSize='large' />
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
                    <Typography
                        sx={{ fontSize: '0.9rem', fontWeight: 'bold' }}
                        className={classes.mentorName}
                    >
                        {name}
                    </Typography>
                    <Typography
                        sx={{ fontSize: '0.75rem' }}
                        className={classes.mentorDesg}
                    >
                        {desg}
                    </Typography>
                </Box>
                <Box className={classes.videoCount}>
                    <Typography
                        sx={{ fontSize: '0.9rem', fontWeight: 'bold' }}
                        className={classes.count}
                    >
                        {total_count}
                    </Typography>
                    <Typography
                        sx={{ fontSize: '0.75rem' }}
                        className={classes.countText}
                    >
                        VIDEOS
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default TopicCard;

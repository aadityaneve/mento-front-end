import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { setFilteredTopics } from '../../features/actions';
import useStyles from './Styles';

import { Box, Button, Typography, Card } from '@mui/material';
import TopicCard from '../TopicCard/TopicCard';

const AllTopics = () => {
    const listOfTopics = [
        'ALL TOPICS',
        'FILM MAKING',
        'BEAT BOXING',
        'CONTENT CREATION',
        'FILM PRODUCTION',
        'NOVEL WRITING',
        'ENTREPRENEURSHIP',
        'MUSIC',
        'FASHION BLOGGING',
        'DESIGN',
        'ILLUSTRATION',
        'F&B',
        'BAKING',
        'EMCEEING',
        'PERFORMING ARTS',
        'STAND UP COMEDY',
        'IMPROV COMEDY',
        'ARTIST MANAGEMENT',
        'FOOD BLOGGING',
        'CHEF',
        'RADIO JOCKEY',
        'PHOTOGRAPHY',
        'RESTAURANT BUSINESS',
        'WEB SERIES',
        'PERSONAL FINANCE',
    ];

    const [displayTopic, setDisplayTopic] = useState('All Videos');

    const { allTopics, allTopicsDetails, filteredTopics } = useSelector(
        (state) => state
    );
    const dispatch = useDispatch();
    const classes = useStyles();

    const titleCase = (str) => {
        var splitStr = str.toLowerCase().split(' ');
        for (var i = 0; i < splitStr.length; i++) {
            splitStr[i] =
                splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
        }
        return splitStr.join(' ');
    };

    const handleFilter = (topic) => {
        setDisplayTopic(topic);
        dispatch(setFilteredTopics(allTopics, topic));
    };

    return (
        <Box className={classes.root}>
            <Box className={classes.topicsBox}>
                {listOfTopics.map((topic, i) => (
                    <>
                        <Typography
                            onClick={() => handleFilter(topic)}
                            key={i}
                            className={classes.singleTopic}
                            variant='h7'
                            component='h7'
                            align='left'
                        >
                            <span
                                className={classes.verticalAnimatedLine}
                            ></span>
                            {topic}
                        </Typography>
                    </>
                ))}
            </Box>
            <Box className={classes.cardsBox}>
                <Typography
                    className={classes.displayTopicHeading}
                    variant='h5'
                    component='h5'
                >
                    {titleCase(displayTopic)}
                </Typography>
                <Box className={classes.allCards}>
                    {displayTopic === 'All Videos' ||
                    displayTopic === 'ALL TOPICS'
                        ? allTopics.map((topic) => (
                              <TopicCard key={topic._id} topic={topic} />
                          ))
                        : filteredTopics.map((topic) => (
                              <TopicCard key={topic._id} topic={topic} />
                          ))}
                </Box>
            </Box>
        </Box>
    );
};

export default AllTopics;

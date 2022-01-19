import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { Box, Button, Typography, Card } from '@mui/material';
import TopicCard from '../TopicCard/TopicCard';

const AllTopics = () => {
    const listOfTopics = [
        'ALL TOPICS',
        'FILM-MAKING',
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
        'STAND-UP COMEDY',
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

    const { allTopics, allTopicsDetails } = useSelector((state) => state);
    console.log('allTopics:', allTopics);
    const dispatch = useDispatch();

    const root = {
        width: '87%',
        margin: 'auto',
        display: 'flex',
        justifyContent: 'space-evenly',
        gap: '15px',

        color: '#e8e7e7',
    };

    const topicsBox = {
        marginTop: '7px',
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
    };

    const cardsBox = {
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
    };

    const verticalAnimatedLine = {
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
        /* '&:after': {
            boxSizing: 'border-box',
        }, */
    };

    const singleTopic = {
        cursor: 'pointer',

        transition: 'all 0.5s',
        '&:hover': {
            transform: 'scale(1.1)',
        },
    };

    const displayTopicHeading = {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',

        color: '#DD6721',

        marginLeft: '2%',
    };

    const allCards = {
        display: 'flex',
        flexWrap: 'wrap',
        // justifyContent: 'space-evenly',
        // alignItems: 'center',

        '@media(maxWidth: 1150px)': {
            // flexBasis: 'auto',
            // flexBasis: '2',
        },
    };

    const titleCase = (str) => {
        var splitStr = str.toLowerCase().split(' ');
        for (var i = 0; i < splitStr.length; i++) {
            splitStr[i] =
                splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
        }
        return splitStr.join(' ');
    };

    return (
        <Box sx={root}>
            <Box sx={topicsBox}>
                {listOfTopics.map((topic, i) => (
                    <>
                        <Typography
                            onClick={() => setDisplayTopic(topic)}
                            key={i}
                            sx={singleTopic}
                            variant='h7'
                            component='h7'
                            align='left'
                        >
                            <span className={verticalAnimatedLine}></span>
                            {topic}
                        </Typography>
                    </>
                ))}
            </Box>
            <Box sx={cardsBox}>
                <Typography
                    sx={displayTopicHeading}
                    variant='h5'
                    component='h5'
                >
                    {titleCase(displayTopic)}
                </Typography>
                <Box sx={allCards}>
                    {allTopics.map((topic) => (
                        <TopicCard key={topic._id} topic={topic} />
                    ))}
                </Box>
            </Box>
        </Box>
    );
};

export default AllTopics;

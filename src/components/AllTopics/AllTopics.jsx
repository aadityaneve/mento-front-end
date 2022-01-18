import React from 'react';

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

    const { allTopics, allTopicsDetails } = useSelector((state) => state);
    console.log('allTopics:', allTopics);
    const dispatch = useDispatch();

    const root = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        gap: '15px',
    };

    const topicsBox = {
        border: '1px solid black',
        display: 'flex',
        flexDirection: 'column',
        // justifyContent: 'space-evenly',
        gap: '12px',
    };

    const singleTopic = {
        cursor: 'pointer',
    };

    const allCards = {
        border: '1px solid black',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
    };

    return (
        <Box sx={root}>
            <Box sx={topicsBox}>
                {listOfTopics.map((topic, i) => (
                    <Typography
                        key={i}
                        sx={singleTopic}
                        variant='h6'
                        component='h6'
                        align='left'
                    >
                        {topic}
                    </Typography>
                ))}
            </Box>
            <Box sx={allCards}>
                {allTopics.map((topic) => (
                    <TopicCard key={topic._id} topic={topic} />
                ))}
            </Box>
        </Box>
    );
};

export default AllTopics;

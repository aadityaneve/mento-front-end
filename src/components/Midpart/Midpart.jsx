import React, { useState, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { setFilteredTopics } from '../../features/actions';
import useStyles from './Singlecardstyle';

import {
    Box,
    Button,
    Typography,
    Card,
    FormControl,
    InputLabel,
    Select,
    OutlinedInput,
    MenuItem,
} from '@mui/material';
// import TopicCard from './Singlecard';

import TopicCard from '../TopicCard/TopicCard';

const Midpart = () => {
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

    /* Getting Window Size Start */
    const [screenSize, getDimension] = useState({
        dynamicWidth: window.innerWidth,
        dynamicHeight: window.innerHeight,
    });

    const setDimension = () => {
        getDimension({
            dynamicWidth: window.innerWidth,
            dynamicHeight: window.innerHeight,
        });
    };

    useEffect(() => {
        window.addEventListener('resize', setDimension);

        return () => {
            window.removeEventListener('resize', setDimension);
        };
    }, [screenSize]);
    /* Getting Window Size End */

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

    const handleSelectChange = (e) => {
        e.preventDefault();
        setDisplayTopic(e.target.value);
        dispatch(setFilteredTopics(allTopics, e.target.value));
    };

    return (
        <>
            
            <Box className={classes.root}>
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
        </>
    );
};

export default Midpart;

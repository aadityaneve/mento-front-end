import React, { useState, useEffect } from 'react';
import stringSimilarity from 'string-similarity';

import { useDispatch, useSelector } from 'react-redux';
import {
    setFilteredTopics,
    setOnClickTopicDetails,
} from '../../features/actions';
import useStyles from './Styles';

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

    const [displayTopic, setDisplayTopic] = useState('ALL TOPICS');

    const {
        allTopics,
        allTopicsDetails,
        filteredTopics,
        onClickTopic,
        onClickTopicDetails,
    } = useSelector((state) => state);

    const dispatch = useDispatch();
    const classes = useStyles();

    const matchTopic = (allTopicsDetails, onClickTopic) => {
        allTopicsDetails?.map((topicDetail) => {
            let similarity = stringSimilarity.compareTwoStrings(
                onClickTopic?.heading?.toLowerCase(),
                topicDetail?.name?.toLowerCase()
            );
            if (similarity > 0.6) {
                dispatch(setOnClickTopicDetails(topicDetail));
                // return data;
            } else {
                return null;
            }

            /* onClickTopic?.heading?.toLowerCase() ==
            topicDetail?.name?.toLowerCase()
                ? dispatch(setOnClickTopicDetails(topicDetail))
                : null */
        });
    };

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
            {screenSize.dynamicWidth <= 960 ? (
                <Box sx={{ paddingTop: '60px' }}>
                    <FormControl sx={{ m: 1, width: 300 }}>
                        <Select
                            sx={{
                                backgroundColor: 'lightgrey',
                                color: 'black',
                                height: '40px',
                                border: 'grey',
                                borderRadius: '0px',
                            }}
                            value={displayTopic}
                            variant='standard'
                            onChange={(e) => handleSelectChange(e)}
                            input={<OutlinedInput label='Name' />}
                            // MenuProps={"MenuProps"}
                        >
                            {listOfTopics.map((name, i) => (
                                <MenuItem
                                    key={i}
                                    value={name}
                                    sx={{ color: 'black' }}
                                >
                                    {name}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Box>
            ) : null}
            <Box sx={{ paddingTop: '60px' }} className={classes.root}>
                <Box className={classes.topicsBox}>
                    {screenSize.dynamicWidth <= 960
                        ? null
                        : listOfTopics.map((topic, i) => (
                              <>
                                  <Typography
                                      onClick={() => handleFilter(topic)}
                                      key={i}
                                      sx={{ fontSize: '1rem' }}
                                      className={classes.singleTopic}
                                      variant='h6'
                                      component='h6'
                                      align='left'
                                  >
                                      <span
                                          className={
                                              classes.verticalAnimatedLine
                                          }
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
                                  <TopicCard
                                      matchTopic={matchTopic}
                                      key={topic._id}
                                      topic={topic}
                                  />
                              ))
                            : filteredTopics.map((topic) => (
                                  <TopicCard
                                      matchTopic={matchTopic}
                                      key={topic._id}
                                      topic={topic}
                                  />
                              ))}
                    </Box>
                </Box>
            </Box>
        </>
    );
};

export default AllTopics;

import React from 'react';
import stringSimilarity from 'string-similarity';

import { useDispatch, useSelector } from 'react-redux';
import {
    setFilteredTopics,
    setOnClickTopicDetails,
} from '../../features/actions';
import { Box, Typography } from '@mui/material';
import TopicCard from './../TopicCard/TopicCard';
import Midtextbox from '../Midtextbox/Midtextbox';
import Reactplayer from 'react-player';
import Videobox from './../Videobox/Videobox';

function Home() {
    const {
        allTopics,
        allTopicsDetails,
        filteredTopics,
        onClickTopic,
        onClickTopicDetails,
    } = useSelector((state) => state);
    const dispatch = useDispatch();

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

    return (
        <Box sx={{ width: '95%', margin: 'auto', paddingTop: '60px' }}>
            {/* Video Box */}
            <Box>
                <Videobox />
            </Box>
            <Typography>ALL LESSONS</Typography>
            {/* ALL CARDS */}
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-evenly',
                    alignItems: 'center',

                    margin: 'auto',                    
                    ['@media (max-width: 1140px)']: {
                        marginTop: '50px',
                    },
                    ['@media (max-width: 1100px)']: {
                        marginTop: '100px',
                    },
                    ['@media (max-width: 1049px)']: {
                        marginTop: '150px',
                    },
                    ['@media (max-width: 953px)']: {
                        marginTop: '200px',
                    },
                    ['@media (max-width: 400px)']: {
                        marginTop: '250px',
                    },
                    ['@media (max-width: 347px)']: {
                        marginTop: '300px',
                    },
                }}
            >
                {allTopics.map((topic, i) => {
                    if (i === 6) {
                        return [
                            <Midtextbox />,
                            <TopicCard
                                key={i}
                                topic={topic}
                                matchTopic={matchTopic}
                            />,
                        ];
                    } else {
                        return (
                            <TopicCard
                                key={i}
                                topic={topic}
                                matchTopic={matchTopic}
                            />
                        );
                    }
                })}
            </Box>
        </Box>
    );
}

export default Home;

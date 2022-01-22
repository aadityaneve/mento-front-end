import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Box, Typography } from '@mui/material';
import TopicCard from './../TopicCard/TopicCard';
import Midtextbox from '../Midtextbox/Midtextbox';

function Home() {
    const { allTopics } = useSelector((state) => state);

    return (
        <Box sx={{ width: '95%', margin: 'auto', paddingTop: '60px' }}>
            <Typography>ALL LESSONS</Typography>
            {/* ALL CARDS */}
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-evenly',
                    alignItems: 'center',

                    margin: 'auto',
                }}
            >
                {allTopics.map((topic, i) => {
                    if (i === 6) {
                        return [<Midtextbox />, <TopicCard topic={topic} />];
                    } else {
                        return <TopicCard topic={topic} />;
                    }
                })}
            </Box>
        </Box>
    );
}

export default Home;

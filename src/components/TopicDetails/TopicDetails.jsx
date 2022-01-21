import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CardMembershipIcon from '@mui/icons-material/CardMembership';

import { useDispatch, useSelector } from 'react-redux';
import { setFilteredTopics } from '../../features/actions';
import VideoPanel from '../VideoPanel/VideoPanel';
import AboutMentor from '../AboutMentor/AboutMentor';

const TopicDetails = () => {
    const {
        allTopics,
        allTopicsDetails,
        filteredTopics,
        onClickTopic,
        onClickTopicDetails,
    } = useSelector((state) => state);
    const dispatch = useDispatch();

    const handleFollow = () => {
        console.log('onClickTopic:', onClickTopic);
    };

    return (
        <Box sx={{ marginTop: '0px', color: 'white' }}>
            <Box
                sx={{
                    width: '100%',
                    // height: '500vh',
                    backgroundImage: `url(${onClickTopic.card_img})`,
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: '0 0',
                    marginBottom: '50px',
                }}
            >
                <Typography
                    sx={{ paddingTop: '14%', marginBottom: '12px' }}
                    variant='h6'
                    component='h6'
                >
                    LEARN FROM
                </Typography>
                <Typography
                    sx={{
                        margin: 'auto auto auto auto',
                        textAlign: 'center',
                        color: '#fff',
                        fontWeight: '700',
                        maxWidth: '700px',
                        lineHeight: 'normal',
                        marginBottom: '20px',
                    }}
                    variant='h3'
                    component='h3'
                >
                    {onClickTopicDetails.heading}
                </Typography>
                <Typography
                    sx={{ fontWeight: 'bold', marginBottom: '20px' }}
                    variant='h6'
                    component='h6'
                >
                    AT{' '}
                    <span
                        style={{
                            textDecoration: 'line-through',
                        }}
                    >
                        {onClickTopicDetails.price_initial}
                    </span>{' '}
                    <span style={{ color: '#F68C26' }}>
                        {onClickTopicDetails.price_after}
                    </span>
                    , YOU GET:
                </Typography>
                <Button
                    sx={{
                        background:
                            'linear-gradient(226deg, #f68c26 0%,  #ec1a5b 100%)',
                        marginBottom: '12px',
                    }}
                    variant='contained'
                    color='success'
                >
                    ENROLL NOW!
                </Button>
                <Typography
                    sx={{
                        marginBottom: '12px',
                        fontWeight: 'bold',
                        textAlign: 'center',
                    }}
                    variant='h6'
                    component='h6'
                >
                    <span
                        style={{
                            content: '',
                            display: 'inline-block',
                            width: '8px',
                            height: '20px',
                            border: 'solid #f68c26',
                            borderWidth: '0px 3px 3px 0px',
                            transform: 'rotate(45deg)',
                            marginRight: '12px',
                        }}
                    ></span>{' '}
                    {onClickTopicDetails.puch_line1}
                </Typography>
                <Typography
                    sx={{
                        marginBottom: '12px',
                        fontWeight: 'bold',
                        textAlign: 'center',
                    }}
                    variant='h6'
                    component='h6'
                >
                    <span
                        style={{
                            content: '',
                            display: 'inline-block',
                            width: '8px',
                            height: '20px',
                            border: 'solid #f68c26',
                            borderWidth: '0px 3px 3px 0px',
                            transform: 'rotate(45deg)',
                            marginRight: '12px',
                        }}
                    ></span>{' '}
                    {onClickTopicDetails.punch_line2}
                </Typography>
                <Box sx={{ marginBottom: '80px' }}>
                    <Button
                        sx={{
                            boxShadow: '1px 1px 5px grey',

                            width: '60px',
                            height: '60px',
                            backgroundColor: 'white',
                            color: '#F15340',
                            borderRadius: '50%',
                            '&:hover': {
                                backgroundColor: 'white',
                            },
                        }}
                    >
                        {' '}
                        <PlayArrowIcon fontSize='large' />
                    </Button>
                    <Button
                        sx={{
                            color: 'white',
                            fontSize: '1rem',
                            fontWeight: 'bold',
                        }}
                    >
                        Play Trailer
                    </Button>
                </Box>
                {/* White Panel */}
                <Box
                    sx={{
                        backgroundColor: 'white',
                        width: '85%',
                        margin: 'auto',
                        borderRadius: '8px',
                        padding: '30px',
                        color: 'black',

                        display: 'flex',
                        justifyContent: 'space-evenly',
                        position: 'relative',
                    }}
                >
                    {/* Videos Panel */}
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            width: '70%',
                            marginRight: '15px',
                        }}
                    >
                        {/* Top Bar */}
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                            }}
                        >
                            <Typography sx={{ fontWeight: '700' }}>
                                LEARN
                            </Typography>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <Typography
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        marginRight: '15px',
                                        cursor: 'pointer',
                                    }}
                                >
                                    <FavoriteBorderIcon
                                        sx={{ color: '#F36F21' }}
                                        fontSize='large'
                                    />
                                </Typography>{' '}
                                |
                                <Typography
                                    Typography
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        marginLeft: '15px',
                                        cursor: 'pointer',
                                        color: '#F36F21',
                                    }}
                                >
                                    <CardMembershipIcon
                                        sx={{
                                            color: '#F36F21',
                                            fontWeight: '700',
                                        }}
                                        fontSize='large'
                                    />
                                    DOWNLOAD CERTIFICATE
                                </Typography>
                            </Box>
                        </Box>
                        <hr
                            style={{
                                width: '100%',
                                margin: '35px 0px 35px 0px',
                                borderWidth: '1px',
                                broderColor: 'lightgrey',
                            }}
                        />
                        {/* Videos Block */}
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '15px',
                                justifyContent: 'space-evenly',
                                alignItems: 'center',
                            }}
                        >
                            {onClickTopicDetails.videos.map((video, i) => {
                                return <VideoPanel key={i} video={video} />;
                            })}
                        </Box>
                    </Box>
                    {/* About Panel */}
                    <Box
                        sx={{
                            width: '30%',
                            display: 'flex',
                            flexDirection: 'column',
                            backgroundColor: '#F7F7F7',
                            borderRadius: '8px',
                            margin: '-30px -30px 0px 0px',
                            padding: '27px',
                        }}
                    >
                        {/* Mentor Details */}
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-evenly',
                            }}
                        >
                            {/* Mentor PHOTO NAME DESG */}
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                }}
                            >
                                <Box
                                    sx={{
                                        width: '60px',
                                        height: '60px',
                                        borderRadius: '50%',
                                        backgroundImage: `url(${onClickTopic.card_img})`,
                                        backgroundSize: 'cover',
                                        backgroundRepeat: 'no-repeat',
                                        backgroundPosition: '0 0',

                                        marginRight: '15px',
                                        top: '0px',
                                    }}
                                ></Box>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'space-evenly',
                                        marginTop: '10px',
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            textAlign: 'left',
                                            fontWeight: '700',
                                            lineHeight: 'normal',
                                            marginBottom: '6px',
                                        }}
                                    >
                                        {onClickTopic.name}
                                    </Typography>
                                    <Typography
                                        sx={{
                                            textAlign: 'left',
                                            fontSize: '12px',
                                            fontWeight: '500',
                                            lineHeight: 'normal',
                                            color: '#AAAAAA',
                                            marginBottom: '9px',
                                        }}
                                    >
                                        {onClickTopic.desg}
                                    </Typography>
                                    {/* Follow Button And Followers */}
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'center',
                                        }}
                                    >
                                        <Button
                                            onClick={() => handleFollow()}
                                            sx={{
                                                borderWidth: '2px',
                                                borderColor: '#0099FF',
                                                '&:hover': {
                                                    borderWidth: '2px',
                                                },
                                            }}
                                            variant='outlined'
                                        >
                                            FOLLOW
                                        </Button>
                                        <Box>5308 FOLLOWING</Box>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                        <hr
                            style={{
                                width: '100%',
                                margin: '35px 0px 35px 0px',
                                borderWidth: '1px',
                                broderColor: 'lightgrey',
                            }}
                        />
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                            }}
                        >
                            <Typography
                                sx={{ textAlign: 'left' }}
                                variant='h6'
                                component='h6'
                            >
                                {onClickTopic.total_count}
                            </Typography>
                            <Typography
                                sx={{
                                    textAlign: 'left',
                                    fontSize: '12px',
                                    fontWeight: '500',
                                    lineHeight: 'normal',
                                    color: '#AAAAAA',
                                    marginBottom: '9px',
                                }}
                            >
                                LESSONS
                            </Typography>
                        </Box>
                        <hr
                            style={{
                                width: '100%',
                                margin: '35px 0px 35px 0px',
                                borderWidth: '1px',
                                broderColor: 'lightgrey',
                            }}
                        />
                        <Typography
                            variant='h6'
                            component='h6'
                            sx={{
                                textAlign: 'left',
                                fontWeight: '500',
                                lineHeight: 'normal',
                                color: '#AAAAAA',
                                marginBottom: '9px',
                            }}
                        >
                            ABOUT
                        </Typography>

                        {onClickTopicDetails.about.map((about, i) => {
                            return <AboutMentor key={i} about={about} />;
                        })}
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default TopicDetails;

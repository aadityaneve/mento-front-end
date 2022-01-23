import React from 'react';
import Reactplayer from 'react-player';
import { Grid, Box, Typography, Container } from '@mui/material';

function Videobox() {
    const h1style = {
        color: '#fff',
        fontFamily: "'Roboto Slab', serif",
        fontWeight: '700',
        fontSize: '3.4236363636em',
        textAlign: 'left',
        lineHeight: 1.3,
    };
    const h2style = {
        color: '#fff',
        fontFamily: "'Roboto Condensed', sans-serif",
        fontSize: '0.8572727273em',
        textAlign: 'left',
        fontWeight: '500',
        lineHeight: 1.9,
    };
    return (
        <div>
            <Grid
                container
                color='white'
                width='90%'
                margin='auto'
                height='500px'
            >
                <Grid item xs marginTop='20px'>
                    <Box marginBottom='20px'>
                        <Typography
                            sx={{ textAlign: 'left', fontWeight: 'bold' }}
                            variant='h3'
                            component='h3'
                        >
                            Learn From India's Biggest Mentors
                        </Typography>
                        {/* <Typography variant="h3" sx={h1style} component="h3">
                    </Typography>
                    <Typography variant="h3" sx={h1style} component="h3">
                    </Typography> */}
                    </Box>
                    <Box>
                        <Typography
                            sx={{ textAlign: 'left', fontWeight: 'bold' }}
                            variant='h6'
                            component='h6'
                        >
                            SCROLL DOWN TO DISCOVER LEARN FROM THE BEST OVER
                            350+ VIDEO LESSONS GET SIGNED CERTIFICATES
                        </Typography>
                        {/* <Typography variant='h3' sx={h2style} component='h3'>
                        </Typography>
                        <Typography variant='h3' sx={h2style} component='h3'>
                        </Typography>
                        <Typography variant='h3' sx={h2style} component='h3'>
                        </Typography> */}
                    </Box>
                    <Grid container color='white' justifyContent='center'>
                        <Grid item xs={6}>
                            <Box
                                sx={{
                                    width: '160px',
                                    height: '60px',
                                    marginLeft: '-40px',
                                    padding: '5px',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    backgroundImage:
                                        "url('https://www.mento.co.in/assets/google-play-black-f7eb60056f740e3f7175688fc28e4fc4c2c2a20fc8a26b4fe4d2e944e24fa014.svg')",
                                }}
                            ></Box>
                        </Grid>
                        <Grid item xs={6} marginLeft='-70px'>
                            <Box
                                sx={{
                                    width: '160px',
                                    height: '60px',
                                    marginLeft: '5px',
                                    padding: '6px',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    pointer: 'cursor',
                                    backgroundImage:
                                        "url('https://www.mento.co.in/assets/app-store-black-89aa31eafa093e3c654fd68421e895d386767ea78997aa91db6ef811c3fb0152.svg')",
                                }}
                            ></Box>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid
                    item
                    sx={{
                        margin: 'auto',
                        marginTop: '20px',
                    }}
                >
                    <Box>
                        <Reactplayer
                            url='https://d1tthr7pv14hhy.cloudfront.net/Images/general/background1.mp4'
                            playing={true}
                            loop={true}
                            muted={true}
                            width='100%'
                            height='400px'
                        />
                    </Box>
                </Grid>
            </Grid>
        </div>
    );
}

export default Videobox;

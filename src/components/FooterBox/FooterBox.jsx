import React from 'react';

import { Grid, Box } from '@mui/material';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
//dawdeamoneakjnjn
function FooterBox() {

    const boxstyle = {
        width: 1,
        height: 270,
        backgroundColor: '#1a1d24',
        borderTop: '1px solid #999999',
        fontFamily: 'Roboto Condensed, sans-serif'

    }

    const gridstyle = {
        direction: "row",
        justifyContent: "center",
        alignItems: "center",
        color: "#999999",
        marginTop: '60px',
        cursor: "pointer",
        fontSize: '12px',
        fontFamily: 'Roboto Condensed, sans-serif'
    }

    return (
        <footer>
            <Box
                sx={boxstyle}
                marginTop="30px"
            >
                <Grid container sx={gridstyle} >
                    <Grid item xs={0.5}>
                        {/* <a href="http://www.youtube.com/mentolearn" target="_blank"><i class="fa fa-youtube" style={{color: '#999999',height:"100px", width:"100px"}}></i></a> */}
                        <YouTubeIcon sx={{ fontSize: "40px", color: "white" }} />
                    </Grid>
                    <Grid item xs={0.5}>
                        <FacebookIcon sx={{ fontSize: "40px", color: "white" }} />            </Grid>
                    <Grid item xs={0.5}>
                        <InstagramIcon sx={{ fontSize: "40px", color: "white" }} />            </Grid>
                    <Grid item xs={0.5}>
                        <TwitterIcon sx={{ fontSize: "40px", color: "white" }} />            </Grid>
                </Grid>

                <Grid fontSize="12px" container sx={gridstyle}>
                    <Grid item xs={0.7}>ABOUT</Grid>
                    <Grid item xs={0.7}>FAQ</Grid>
                    <Grid item xs={1.4}>TERMS OF SERVICE</Grid>
                    <Grid item xs={1.4}>PRIVACY POLICY</Grid>
                    <Grid item xs={1.4}>CONTACT US</Grid>
                </Grid>
                <Box textAlign="center" marginTop='50px' sx={gridstyle} >
                    COPYRIGHT @GRADESDONTMATTER PVT LTD
                </Box>
            </Box>
        </footer>
    );
}

export default FooterBox;


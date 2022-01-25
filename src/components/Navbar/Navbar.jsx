import React, { useState } from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import { Button } from '@mui/material';
import TopicIcon from '@mui/icons-material/Topic';
import InfoIcon from '@mui/icons-material/Info';

import { useSelector, useDispatch } from 'react-redux';
import { Glogin, Glogout } from '../GoogleOauth/GoogleOauth';
import { useNavigate } from 'react-router-dom';
import useStyles from './Styles';
import { FaFacebookF } from 'react-icons/fa';
import { removeProfile } from '../../features/actions';
import { Avatar } from '@mui/material';
import { AuthContext } from '../Context/AuthContext';
import { useContext } from 'react';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));

export default function Navbar() {
    const classes = useStyles();
    const navigate = useNavigate();
    const { Token, setToken } = useContext(AuthContext);
    const [popup, setPopup] = useState(false);

    function crossbtn() {
        setPopup(false);
    }

    const { PROFILE } = useSelector((state) => state);
    const dispatch = useDispatch();

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            sx={{ marginTop: '48px' }}
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem
                onClick={() => {
                    handleMenuClose();
                    navigate(`mento-front-end/profile`);
                }}
            >
                My Profile
            </MenuItem>
            <MenuItem
                onClick={() => {
                    handleMenuClose();
                    navigate(`mento-front-end/`)
                }}
            >
                {/* {PROFILE?.googleId ? null : null} */}
                {PROFILE?.googleId ? <Glogout /> : <Glogin />}
            </MenuItem>
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-evenly',
                alignItems: 'center',
            }}
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <IconButton
                    size='medium'
                    sx={{ fontSize: '1rem' }}
                    onClick={() => navigate(`mento-front-end/allTopics`)}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                        }}
                    >
                        <TopicIcon sx={{ marginRight: '5px' }} />
                        <p>ALL TOPICS</p>
                    </Box>
                </IconButton>
            </MenuItem>

            {/* <MenuItem>
                <IconButton
                    size='large'
                    aria-label='show 4 new mails'
                    color='inherit'
                >
                    <Badge badgeContent={4} color='error'>
                        <MailIcon />
                    </Badge>
                </IconButton>
                <p>Messages</p>
            </MenuItem> */}
            <MenuItem>
                <IconButton
                    sx={{ fontSize: '1rem' }}
                    size='medium'
                    onClick={() => navigate(`mento-front-end/about`)}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                        }}
                    >
                        <InfoIcon sx={{ marginRight: '5px' }} />
                        <p>ABOUT</p>
                    </Box>
                </IconButton>
            </MenuItem>

            {PROFILE?.googleId ? (
                <MenuItem onClick={handleProfileMenuOpen}>
                    <IconButton
                        size='large'
                        aria-label='account of current user'
                        aria-controls='primary-search-account-menu'
                        aria-haspopup='true'
                        color='inherit'
                    >
                        {PROFILE?.googleId ? (
                            <Avatar
                                alt='Travis Howard'
                                src={PROFILE?.imageUrl}
                            />
                        ) : (
                            <AccountCircle />
                        )}
                    </IconButton>
                    <p>Profile</p>
                </MenuItem>
            ) : (
                <MenuItem>
                    <Button
                        onClick={() => {
                            setPopup(true);
                        }}
                        variant='contained'
                        sx={{
                            background:
                                'linear-gradient(226deg, #f68c26 0%,  #ec1a5b 100%)',
                        }}
                    >
                        LOGIN
                    </Button>
                </MenuItem>
            )}
        </Menu>
    );

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar
                    sx={{
                        background:
                            'linear-gradient(to top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%);',
                        position: 'fixed',
                        zIndex: '3',
                    }} //background: '#1A1D24'
                >
                    <Box sx={{ width: '93%', margin: 'auto' }}>
                        <Toolbar>
                            <img
                                style={{ cursor: 'pointer' }}
                                onClick={() => navigate(`mento-front-end/`)}
                                className={classes.logoStyle}
                                alt='logo'
                                src='https://www.mento.co.in/assets/logo-e65920660caecc5be1d6b1757278bcb5745b83cfbf08d0dcdc5cd30bead06334.svg'
                            ></img>
                            {/* <IconButton
                        size='large'
                        edge='start'
                        color='inherit'
                        aria-label='open drawer'
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton> */}
                            <Typography
                                variant='h6'
                                noWrap
                                component='div'
                                sx={{ display: { xs: 'none', sm: 'block' } }}
                            >
                                {/* MUI */}
                            </Typography>
                            <Box sx={{ flexGrow: 1 }} />
                            <Box
                                sx={{
                                    display: { xs: 'block flex', md: 'flex' },
                                    alignItems: 'center',
                                }}
                            >
                                <Search>
                                    <SearchIconWrapper>
                                        <SearchIcon />
                                    </SearchIconWrapper>
                                    <StyledInputBase
                                        sx={{ fontSize: '12px' }}
                                        placeholder='Topic name, Influencers name'
                                        inputProps={{ 'aria-label': 'search' }}
                                    />
                                </Search>
                                <IconButton
                                    size='large'
                                    aria-label='show 4 new mails'
                                    color='inherit'
                                    onClick={() =>
                                        navigate(`mento-front-end/allTopics`)
                                    }
                                >
                                    <Typography
                                        sx={{
                                            display: {
                                                xs: 'none',
                                                md: 'block',
                                            },
                                            fontSize: '0.8rem',
                                        }}
                                        variant='h6'
                                        component='h6'
                                    >
                                        ALL TOPICS
                                    </Typography>
                                    {/* <Badge badgeContent={4} color='error'>
                                <MailIcon />
                            </Badge> */}
                                </IconButton>
                                <IconButton
                                    size='large'
                                    aria-label='show 17 new notifications'
                                    color='inherit'
                                    onClick={() =>
                                        navigate(`mento-front-end/about`)
                                    }
                                >
                                    <Typography
                                        sx={{
                                            display: {
                                                xs: 'none',
                                                md: 'block',
                                            },
                                            fontSize: '0.8rem',
                                        }}
                                        variant='h6'
                                        component='h6'
                                    >
                                        ABOUT
                                    </Typography>
                                    {/* <Badge badgeContent={17} color='error'>
                                <NotificationsIcon />
                            </Badge> */}
                                </IconButton>

                                {PROFILE?.googleId ? (
                                    <IconButton
                                        sx={{
                                            display: {
                                                xs: 'none',
                                                md: 'block',
                                            },
                                        }}
                                        size='large'
                                        edge='end'
                                        aria-label='account of current user'
                                        aria-controls={menuId}
                                        aria-haspopup='true'
                                        onClick={handleProfileMenuOpen}
                                        color='inherit'
                                    >
                                        {PROFILE?.googleId ? (
                                            <Avatar
                                                alt='Travis Howard'
                                                src={PROFILE?.imageUrl}
                                            />
                                        ) : (
                                            <AccountCircle />
                                        )}
                                    </IconButton>
                                ) : (
                                    <>
                                        <Button
                                            onClick={() => {
                                                setPopup(true);
                                            }}
                                            variant='contained'
                                            sx={{
                                                background:
                                                    'linear-gradient(226deg, #f68c26 0%,  #ec1a5b 100%)',
                                            }}
                                        >
                                            LOGIN
                                        </Button>
                                    </>
                                )}
                            </Box>
                            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                                <IconButton
                                    size='large'
                                    aria-label='show more'
                                    aria-controls={mobileMenuId}
                                    aria-haspopup='true'
                                    onClick={handleMobileMenuOpen}
                                    color='inherit'
                                    sx={{ mr: 2 }}
                                >
                                    <MenuIcon />
                                </IconButton>
                                {/* <IconButton
                            size='large'
                            aria-label='show more'
                            aria-controls={mobileMenuId}
                            aria-haspopup='true'
                            onClick={handleMobileMenuOpen}
                            color='inherit'
                        >
                            <MoreIcon />
                        </IconButton> */}
                            </Box>
                        </Toolbar>
                    </Box>
                </AppBar>
                {renderMobileMenu}
                {renderMenu}
            </Box>

            {/* this area is for popup menu */}

            {popup && !Token ? (
                <div className='border mt-20  absolute ml-[20%] w-3/5 h-3/5  z-10'>
                    <div className='bg-gray-700  flex w-full h-full'>
                        <div>
                            <img
                                src='https://d1tthr7pv14hhy.cloudfront.net/Images/Courses/Film-Making/Finalnitish.jpg'
                                className='h-full'
                            />
                        </div>
                        <div className='bg-white grow h-full'>
                            <button
                                onClick={() => {
                                    crossbtn();
                                }}
                                className='absolute ml-[25%] mt-4 text-lg'
                            >
                                X
                            </button>
                            <div className='w-full h-full flex flex-col gap-y-3 justify-center place-self-center'>
                                <div className='text-3xl'>Welcome Back!</div>
                                <div className='text-base'>LOG IN WITH</div>
                                <div className='flex justify-center gap-x-4'>
                                    <div className='flex items-center gap-x-2 border border-black text-lg font-semibold text-white px-2 rounded-md bg-[#3b5997] cursor-pointer hover:bg-[#254179]'>
                                        <FaFacebookF className='w-7 h-7' />
                                        <div>FACEBOOK</div>
                                    </div>
                                    <div>
                                        <Glogin />
                                    </div>
                                </div>
                                <div className='text-gray-600'>
                                    Not a member yet? SIGN UP
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : null}

            {/* <div className='mt-20'>
                <button onClick={()=>{setPopup(true)}} className='text-white bg-[#d1521f] px-3 py-2 font-bold rounded-md' >LOGIN</button>
            </div>
            */}
        </>
    );
}

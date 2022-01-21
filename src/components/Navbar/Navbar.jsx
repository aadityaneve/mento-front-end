import * as React from 'react';
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
import TopicIcon from '@mui/icons-material/Topic';
import Avatar from '@mui/material/Avatar';

import { useSelector, useDispatch } from 'react-redux';
import { Glogin, Glogout } from '../GoogleOauth/GoogleOauth';
import { useNavigate } from 'react-router-dom';
import useStyles from './Styles';

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
    const { PROFILE } = useSelector((state) => state);

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
                    navigate(`/profile`);
                }}
            >
                My Profile
            </MenuItem>
            <MenuItem
                onClick={() => {
                    handleMenuClose();
                }}
            >
                {PROFILE?.googleId ? <Glogout /> : <Glogin />}
            </MenuItem>
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
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
            <MenuItem onClick={() => navigate(`/allTopics`)}>
                <IconButton
                    size='large'
                    aria-label='show 4 new mails'
                    color='inherit'
                >
                    <Badge color='error'>
                        <TopicIcon />
                    </Badge>
                </IconButton>
                <p>All Topics</p>
            </MenuItem>
            <MenuItem onClick={() => navigate(`/about`)}>
                <IconButton
                    size='large'
                    aria-label='show 17 new notifications'
                    color='inherit'
                >
                    <Badge color='error'>
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
                <p>About</p>
            </MenuItem>
            <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton
                    size='large'
                    aria-label='account of current user'
                    aria-controls='primary-search-account-menu'
                    aria-haspopup='true'
                    color='inherit'
                >
                    {PROFILE?.imageUrl ? (
                        <Avatar alt={PROFILE?.name} src={PROFILE?.imageUrl} />
                    ) : (
                        <AccountCircle />
                    )}
                </IconButton>
                <p>Profile</p>
            </MenuItem>
        </Menu>
    );

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar
                sx={{
                    background:
                        'linear-gradient(to top, transparent 0%, black 100%);',
                    position: 'stickey',
                    zIndex: '3',
                }} //background: '#1A1D24'
            >
                <Box sx={{ width: '93%', margin: 'auto' }}>
                    <Toolbar>
                        <img
                            style={{ cursor: 'pointer' }}
                            onClick={() => navigate(`/`)}
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
                                onClick={() => navigate(`/allTopics`)}
                            >
                                <Typography
                                    sx={{
                                        display: { xs: 'none', md: 'block' },
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
                                onClick={() => navigate(`/about`)}
                            >
                                <Typography
                                    sx={{
                                        display: { xs: 'none', md: 'block' },
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
                            <IconButton
                                sx={{ display: { xs: 'none', md: 'block' } }}
                                size='large'
                                edge='end'
                                aria-label='account of current user'
                                aria-controls={menuId}
                                aria-haspopup='true'
                                onClick={handleProfileMenuOpen}
                                color='inherit'
                            >
                                {PROFILE?.imageUrl ? (
                                    <Avatar
                                        alt={PROFILE?.name}
                                        src={PROFILE?.imageUrl}
                                    />
                                ) : (
                                    <AccountCircle />
                                )}
                            </IconButton>
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
    );
}

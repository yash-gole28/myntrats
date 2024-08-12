import { Box, Grid, MenuItem, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { styled, alpha } from '@mui/material/styles';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import logo from './../assets/logo.png'

const Nav = () => {

    const InsteadLogo = styled(Box)(({ theme }) => ({
        [theme.breakpoints.up('sm')]: {
            display: 'none'
        },
    }))

    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: '4px',
        height:'40px',
        backgroundColor: 'rgb(245,245,246)',
        '&:hover': {
            backgroundColor: 'rgb(245,245,246)',
        },
        marginLeft: 0,
        width: '80%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: '80%',
        },
        [theme.breakpoints.down('sm')]: {
           display:'none'
        }
    }));

    const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color:'grey',
        fontSize:'18px'
    }));

    const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        width: '100%',
        fontSize:'13px',
        '& .MuiInputBase-input': {
            padding: theme.spacing(1.5, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(5)})`,
            transition: theme.transitions.create('width'),
            [theme.breakpoints.up('sm')]: {
                width: '90%',
            },
        },
    }));
    return (
        <Box sx={{width:'100vw',position:'fixed',top:'0px',backgroundColor:'white',zIndex:123}}>
            <Toolbar sx={{boxShadow:'0px 0px 4px rgb(171, 165, 165)'}}>
                <Grid container sx={{ display: 'flex', justifyContent: 'space-between' ,marginTop:'.8rem',marginBottom:'.5rem',width:'100%'}}>
                    <Grid item md={6} xs={5} lg={6} sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>

                        <InsteadLogo>
                            <ArrowBackIcon sx={{ fontSize: '30px', fontWeight: '100' }} />

                        </InsteadLogo>
                        <InsteadLogo>
                            <Typography variant='h6' sx={{ fontSize: '14px', minWidth: '100px' }}>
                                Men T-Shirt
                            </Typography>
                            <Typography component="p" sx={{ fontSize: '10px', color: 'grey' }}>
                                140148 items
                            </Typography>
                        </InsteadLogo>


                        <Box sx={{ display: { xs: 'none', md: 'flex',lg:'flex' } }}>

                            <img className='myntra-logo' src={logo} alt="myntra Logo" />
                        </Box>

                        <Typography
                            variant="h6" component="div"
                            sx={{
                                // mr: 3,
                                display: { xs: 'none', md: 'flex' },
                                fontWeight: 600,
                                fontSize: '12px',
                                letterSpacing: '.1rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            MEN
                        </Typography>
                        <Typography
                            variant="h6"

                            // noWrap
                            component="a"
                            href="#app-bar-with-responsive-menu"
                            sx={{
                                // mr: 3,
                                display: { xs: 'none', md: 'flex' },

                                fontWeight: 600,
                                fontSize: '12px',
                                letterSpacing: '.1rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            WOMEN
                        </Typography>
                        <Typography
                            variant="h6"
                            // noWrap
                            component="a"
                            href="#app-bar-with-responsive-menu"
                            sx={{
                                // mr: 3,
                                display: { xs: 'none', md: 'flex' },

                                fontWeight: 600,
                                fontSize: '12px',
                                letterSpacing: '.1rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            KIDS
                        </Typography>
                        <Typography
                            variant="h6"
                            // noWrap
                            component="a"
                            href="#app-bar-with-responsive-menu"
                            sx={{
                                // mr: 3,
                                display: { xs: 'none', md: 'flex' },

                                fontWeight: 600,
                                fontSize: '12px',
                                letterSpacing: '.1rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            HOME & LIVING
                        </Typography>
                        <Typography
                            variant="h6"
                            // noWrap
                            component="a"
                            href="#app-bar-with-responsive-menu"
                            sx={{
                                // mr: 3,
                                display: { xs: 'none', md: 'flex' },

                                fontWeight: 600,
                                fontSize: '12px',
                                letterSpacing: '.1rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            BEAUTY
                        </Typography>
                        <Typography
                            variant="h6"
                            component="a"
                            href="#app-bar-with-responsive-menu"
                            sx={{
                                // mr: 3,
                                display: { xs: 'none', md: 'flex' },

                                fontWeight: 600,
                                fontSize: '12px',
                                letterSpacing: '.1rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            STUDIO<sup className='mens'>NEW</sup>
                        </Typography>

                    </Grid>
                    <Grid item md={4} sm={0} xs={0} sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: 'end',alignItems:'center'}}>
                        <Search>
                            <SearchIconWrapper>
                                <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="Search for products, brands and more"
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </Search>
                    </Grid>
                    <Grid item md={2} xs={4}sx={{display:'flex',justifyContent:'space-evenly'}}>
                        <MenuItem sx={{
                            flexDirection: 'column', padding: '8px'
                        }}>
                            <PermIdentityIcon sx={{  display: { xs: 'none', md: 'flex' } }} />
                            <SearchIcon sx={{  display: { xs: 'flex', md: 'none' } }} />
                            <Typography sx={{ display: { xs: 'none', md: 'flex', fontSize: '10px', fontWeight: 'bold' } }}>Profile</Typography>
                        </MenuItem>
                        <MenuItem sx={{
                            flexDirection: 'column', padding: '8px'
                        }}>
                            <FavoriteBorderIcon/>
                            <Typography sx={{ display: { xs: 'none', md: 'flex', fontSize: '10px', fontWeight: 'bold' } }}>Wishlist</Typography>
                        </MenuItem>
                        <MenuItem sx={{
                            flexDirection: 'column', padding: '8px'
                        }} >
                            <WorkOutlineIcon sx={{ }} />
                            <Typography sx={{ display: { xs: 'none', md: 'flex', fontSize: '10px', fontWeight: 'bold' } }}>Bag</Typography>
                        </MenuItem>
                    </Grid>

                </Grid>
            </Toolbar>

        </Box>
    )
}

export default Nav

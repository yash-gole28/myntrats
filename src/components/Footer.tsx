import { Box, Typography } from '@mui/material'
import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import i from './../assets/img1.png'
import j from './../assets/img2.png'
import k from './../assets/Capture1.png'
import l from './../assets/Capture2.png'
import Grid from '@mui/material/Unstable_Grid2';

const Footer = () => {
    return (
        <Box sx={{width:'100%'}}>
            <Grid container sx={{display:'flex',flexWrap:'wrap',width:'100%'}}>
                <Grid md={2} xs={5} sm={5} sx={{
                    margin: '1rem', ml:{xs:'1rem', sm:'1rem',md:'5rem'}
                }}>
                    <Typography variant='h6' component='h6' sx={{ fontSize: '12px', marginBottom: '2rem' }}>
                        ONLINE SHOPPING
                    </Typography>
                    <Typography component='p' sx={{ fontSize: '12px', color: 'grey' }}>
                        MEN
                    </Typography>
                    <Typography component='p' sx={{ fontSize: '12px', color: 'grey' }}>
                        WOMEN
                    </Typography>
                    <Typography component='p' sx={{ fontSize: '12px', color: 'grey' }}>
                        KIDS
                    </Typography>
                    <Typography component='p' sx={{ fontSize: '12px', color: 'grey' }}>
                        HOME & LIVING
                    </Typography>
                    <Typography component='p' sx={{ fontSize: '12px', color: 'grey' }}>
                        BEAUTY
                    </Typography>
                    <Typography component='p' sx={{ fontSize: '12px', color: 'grey' }}>
                        GIFT CARDS
                    </Typography>
                    <Typography component='p' sx={{ fontSize: '12px', color: 'grey' }}>
                        MYNTRA INSIDER
                    </Typography>


                    <Typography variant='h6' component='h6' sx={{ fontSize: '12px', marginBottom: '2rem', marginTop: '2rem' }}>
                        USEFUL LINKS
                    </Typography>
                    <Typography component='p' sx={{ fontSize: '12px', color: 'grey' }}>
                        Blog
                    </Typography>
                    <Typography component='p' sx={{ fontSize: '12px', color: 'grey' }}>
                        Careers
                    </Typography>
                    <Typography component='p' sx={{ fontSize: '12px', color: 'grey' }}>
                        Site Map
                    </Typography>
                    <Typography component='p' sx={{ fontSize: '12px', color: 'grey' }}>
                        Corporate Information
                    </Typography>
                    <Typography component='p' sx={{ fontSize: '12px', color: 'grey' }}>
                        WhiteChat
                    </Typography>
                    <Typography component='p' sx={{ fontSize: '12px', color: 'grey' }}>
                        Cleartrip
                    </Typography>
                    <Typography component='p' sx={{ fontSize: '12px', color: 'grey' }}>
                        MYNTRA INSIDER
                    </Typography>



                </Grid>
                <Grid md={2} xs={5} sm={5} sx={{
                    margin: '1rem'
                }}>

                    <Typography variant='h6' component='h6' sx={{ fontSize: '12px', marginBottom: '2rem' }}>
                        CUSTOMER POLICIES
                    </Typography>
                    <Typography component='p' sx={{ fontSize: '12px', color: 'grey' }}>
                        Contact Us
                    </Typography>
                    <Typography component='p' sx={{ fontSize: '12px', color: 'grey' }}>
                        FAQ
                    </Typography>
                    <Typography component='p' sx={{ fontSize: '12px', color: 'grey' }}>
                        T&C
                    </Typography>
                    <Typography component='p' sx={{ fontSize: '12px', color: 'grey' }}>
                        Terms Of Use
                    </Typography>
                    <Typography component='p' sx={{ fontSize: '12px', color: 'grey' }}>
                        Track Order
                    </Typography>
                    <Typography component='p' sx={{ fontSize: '12px', color: 'grey' }}>
                        Shipping
                    </Typography>
                    <Typography component='p' sx={{ fontSize: '12px', color: 'grey' }}>
                        Cancellation
                    </Typography>
                    <Typography component='p' sx={{ fontSize: '12px', color: 'grey' }}>
                        Returns
                    </Typography>
                    <Typography component='p' sx={{ fontSize: '12px', color: 'grey' }}>
                        Privacy policy
                    </Typography>
                    <Typography component='p' sx={{ fontSize: '12px', color: 'grey' }}>
                        Grievance Officer
                    </Typography>

                </Grid>
                <Grid  md={3} xs={12} sm={12} sx={{
                    margin: '1rem'
                }}>
                    <Typography variant='h6' component='h6' sx={{ fontSize: '12px', marginBottom: '2rem' }}>
                        EXPERIENCE MYNTRA APP ON MOBILE
                    </Typography>
                    <Box sx={{display:'flex'}}>
                        <img className='image' src={i} alt='sdklf' />
                        <img className='image' src={j} alt='' />
                    </Box>
                    <Typography variant='h6' component='h6' sx={{ fontSize: '12px', marginBottom: '1rem', marginTop: '2rem' }}>
                        KEEP IN TOUCH
                    </Typography>
                    <Box sx={{ color: 'grey' }}>
                        <FacebookIcon sx={{ marginRight: '0.5rem' }} />
                        <TwitterIcon sx={{ marginRight: '0.5rem' }} />
                        <YouTubeIcon sx={{ marginRight: '0.5rem' }} />
                        <InstagramIcon sx={{ marginRight: '0.5rem' }} />
                    </Box>
                </Grid>
                <Grid  md={3} xs={12} sm={12} sx={{
                    margin: '1rem'
                }}>
                    <Box sx={{ display: 'flex', color: 'grey', marginBottom: '20px' }}>
                        <img className='image1' src={k} alt='' />
                        <Typography sx={{ fontSize: '15px' }}>
                            <b className='bold'> 100% original</b> guarantee for all products at myntra.com
                        </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', color: 'grey' }}>
                        <img className='image1' src={l} alt='' />
                        <Typography sx={{ fontSize: '15px' }}>
                            <b className='bold'> Return within 10 days</b> of receiving ur order
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
            <Grid sx={{ display: 'flex', justifyContent: 'space-around' }}>
                <Typography component='h4' sx={{ fontSize: '13px', marginBottom: '1rem', marginTop: '2rem', color: 'grey' }}>
                    In case of any concern, <b>Contact Us</b>
                </Typography>
                <Typography component='h4' sx={{ fontSize: '13px', marginBottom: '1rem', marginTop: '2rem', color: 'grey' }}>
                    © 2024 www.myntra.com. All rights reserved.
                </Typography>
                <Typography component='h4' sx={{ fontSize: '13px', marginBottom: '1rem', marginTop: '2rem', color: 'grey' }}>
                    A Flipkart company.
                </Typography>
            </Grid>
        </Box>
    )
}

export default Footer;




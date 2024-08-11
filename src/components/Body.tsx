import React from 'react'
import { Box, Card, Grid, Typography, CardContent, CardMedia } from '@mui/material'
import { styled, alpha } from '@mui/material/styles';

const Body = () => {
    const BodyContainer = styled(Box)(({ theme }) => ({
        width: '100%',
        overflow: 'hidden',
        [theme.breakpoints.down('sm')]: {
            marginTop: '80px'
        },
    }))
    const Typo = styled(Typography)(({ theme }) => ({
        [theme.breakpoints.down('md')]: {
            backgroundColor: '',
        },
        [theme.breakpoints.up('md')]: {
            fontWeight: '600',
            Padding: '8px',
            margin: '1rem'
        }
    }))
    const MyCard = styled(Card)((theme) => ({
        borderRadius: '0px',
    }))
    return (

        <BodyContainer>
            <Box sx={{ display: 'flex', width: '100%', overflowX: 'hidden' }}>
                <Box sx={{ border: '1px solid red', display: { sm: 'none', md: 'flex', xs: 'none' }, width: '20vw' }}></Box>
                <Box sx={{ border: '1px solid green', width: { md: '80w', xs: '100%' }, overflow:'hidden'}}>
                    <Grid container sx={{ display: 'flex', flexWrap: 'wrap', width: { xs: '100vw', md: '100%' },overflow:'hidden',boxSizing:'border-box' }}>
                        <Grid item md={3} sm={6} xs={6} lg={3} sx={{padding:{xs:'0px',md:'1rem 1.3rem'},overflow:'hidden',boxSizing:'border-box'}}>

                            <MyCard sx={{ overflow: 'hidden', boxShadow: '0px 0px 0px white', borderRadius: '0px' }}>
                                <CardMedia
                                    sx={{ height: 270, width: '100%', backgroundSize: 'cover', backgroundPosition: 'top', border: '1px solid rgb(224, 219, 219)' }}
                                    image='https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/16571518/2022/1/25/c76dda20-9072-493e-8ed5-873fb028cc611643087274273-Allen-Solly-Men-Tshirts-9401643087273706-1.jpg'
                                    title="green iguana"
                                />
                                <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
                                    <Typo>

                                    </Typo>
                                    <Typography sx={{ fontSize: '12px' }} variant="body2" component='p' color="text.secondary" noWrap>

                                    </Typography>
                                    <Typography sx={{ display: 'flex' }} gap={1}>
                                        <Typography variant='h6' component='p' sx={{ fontSize: '12px' }}>Rs. </Typography>
                                        <Typography component='p' sx={{ fontSize: '12px', textDecorationLine: 'line-through', color: 'grey' }}></Typography>
                                        <Typography component='p' sx={{ fontSize: '12px', color: 'orange' }}></Typography>
                                    </Typography>
                                </CardContent>

                            </MyCard>

                        </Grid>
                       
                      
                        {/* <Grid item md={3} sm={12} sx={{ border: '1px solid black', height:'200px'}}></Grid>
                        <Grid item md={3} sm={12} sx={{ border: '1px solid black', height:'200px'}}></Grid>
                        <Grid item md={3} sm={12} sx={{ border: '1px solid black', height:'200px'}}></Grid>
                        <Grid item md={3} sm={12} sx={{ border: '1px solid black', height:'200px'}}></Grid>
                        <Grid item md={3} sm={12} sx={{ border: '1px solid black', height:'200px'}}></Grid> */}
                    </Grid>
                </Box>
            </Box>

        </BodyContainer>
    )
}

export default Body

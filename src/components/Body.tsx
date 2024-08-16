import React, { useEffect, useState } from 'react'
import { Box, Card, Typography, CardContent, CardMedia } from '@mui/material'
import { styled, alpha } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';
import { useNavigate } from 'react-router-dom';
import { API } from './../Network'
import toast from 'react-hot-toast';
import { apiList } from '../apiList';
import Loading from './Skeleton';
import StarIcon from '@mui/icons-material/Star';

const Body = () => {
    const [productData, setProductData] = useState<any[]>([])
    const [categoriesData, setCategoriesData] = useState<any[]>([])
    const route = useNavigate()
    const BodyContainer = styled(Box)(({ theme }) => ({
        width: '100%',
        // border:'2px solid red',
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

        }
    }))
    const MyCard = styled(Card)((theme) => ({
        borderRadius: '0px',
    }))

    const fetchData = async () => {
        try {
            const url = apiList.product
            const response = await API.get(url)
            if (response) {
                setProductData(response.data.products)
                console.log(response.data)
                toast.success('data fetched')
            } else {
                toast.error('data not fetched')
            }
        } catch (error) {
            console.log('error', error)
        }
    }
    const fetchCategoriesData = async () => {
        try {
            const url = apiList.category
            const response = await API.get(url)
            if (response) {
                setCategoriesData(response.data)
                console.log(response.data)
            }
        } catch (error) {
            console.log('error', error)
        }
    }
    useEffect(() => {
        fetchData()
        fetchCategoriesData()
    }, [])
    return (

        <BodyContainer>
            <Box sx={{ display: 'flex', width: '100%', overflowX: 'hidden', height: 'auto', borderBottom: '1px solid rgb(224, 219, 219)' }}>
                <Box sx={{ border: '1px solid rgb(224, 219, 219)', position: 'sticky', top: '0px', height: 'fit-content', display: { sm: 'none', md: 'flex', xs: 'none' }, width: '20%', flexDirection: 'column' }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', padding: '1rem', borderBottom: '1px solid rgb(224, 219, 219)' }}>
                        <Typography variant='h6' sx={{ marginBottom: '1rem', fontSize: '13px', fontWeight: 'bold' }}>CATEGORIES</Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
                            {categoriesData.map((data) => (
                                <Box sx={{ display: 'flex', justifyContent: 'start', marginBottom: '5px' }}>
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label className='gap'> {data} </label>
                                    <Typography sx={{ fontSize: "10px", color: 'grey', marginLeft: '3px' }}>(14430)</Typography>
                                </Box>
                            ))}

                        </Box>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', padding: '1rem', borderBottom: '1px solid rgb(224, 219, 219)' }}>
                        <Typography variant='h6' sx={{ marginBottom: '1rem', fontSize: '13px', fontWeight: 'bold' }}>CATEGORIES</Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
                            {categoriesData.map((data) => (
                                <Box sx={{ display: 'flex', justifyContent: 'start', marginBottom: '5px' }}>
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label className='gap'> {data} </label>
                                    <Typography sx={{ fontSize: "10px", color: 'grey', marginLeft: '3px' }}>(14430)</Typography>
                                </Box>
                            ))}

                        </Box>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', padding: '1rem', borderBottom: '1px solid rgb(224, 219, 219)' }}>
                        <Typography variant='h6' sx={{ marginBottom: '1rem', fontSize: '13px', fontWeight: 'bold' }}>BRAND</Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label className='gap'>Tshirts </label>
                            <Typography sx={{ fontSize: "10px", color: 'grey', marginLeft: '3px' }}>(14430)</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label className='gap'>Lounge Tshirts </label>
                            <Typography sx={{ fontSize: "10px", color: 'grey', marginLeft: '3px' }}>(14430)</Typography>
                        </Box>

                    </Box>
                </Box>
                <Box sx={{ border: '1px solid rgb(224, 219, 219)', width: { md: '80%', xs: '100%' }, overflow: 'hidden'}}>
                    <Grid container sx={{ display: 'flex', flexWrap: 'wrap', width: { xs: '100%', md: '100%' }, overflow: 'hidden' }}>
                        {productData?.length !== 0 ? productData.map((data) => (

                            <Grid sm={6} xs={6} lg={3} sx={{ padding: { xs: '0px', md: '1rem 1.3rem' }, overflow: 'hidden' }}>

                                <MyCard onClick={() => route(`/product/${data.id}`)} sx={{ overflow: 'hidden', boxShadow: '0px 0px 0px white', borderRadius: '0px' }}>

                                    <Box
                                        sx={{
                                            overflow: 'hidden',
                                            position: 'relative',
                                            // '&:hover .media': {
                                            //     transform: 'scale(1.1)',
                                            // },
                                            transition: 'transform 0.3s ease',

                                        }}
                                    >
                                        <CardMedia
                                            className="media"
                                            sx={{
                                                height: 270,
                                                width: '100%',
                                                objectFit: 'contain',
                                                backgroundPosition: 'top',
                                                backgroundColor: 'rgb(245,245,246)', // Background color
                                                transition: 'transform 0.3s ease', 
                                            }}
                                            image={data.images[0]}
                                            title={data.title}
                                            component="img"
                                        />
                                        <Box sx={{ position: 'absolute', bottom: '5px', left: '5px', opacity: 0.7, zIndex: 10, backgroundColor: 'white' }}>
                                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 'fit-content' }}>
                                                <Typography sx={{ fontWeight: 'bold', fontSize: '13px', marginLeft: '6px', marginRight: '6px' }}>
                                                    {data.rating} <StarIcon sx={{ color: 'rgb(20, 149, 143)', fontSize: '13px', marginBottom: '3px' }} />
                                                </Typography>
                                                <Box sx={{ width: '1px', border: '1px solid rgb(224, 219, 219)', height: '14px' }}></Box>
                                                <Typography sx={{ fontSize: '13px', marginLeft: '6px', marginRight: '6px' }}>
                                                    {data.reviews?.length}
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </Box>
                                    <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
                                        <Typo>
                                            {data.brand}
                                        </Typo>
                                        <Typography sx={{ fontSize: '12px' }} variant="body2" component='p' color="text.secondary" noWrap>
                                            {data.title}
                                        </Typography>
                                        <Typography sx={{ display: 'flex' }} gap={1}>
                                            <Typography variant='h6' component='p' sx={{ fontSize: '12px', fontWeight: 'bold' }}>Rs.{data.price} </Typography>
                                            <Typography component='p' sx={{ fontSize: '12px', textDecorationLine: 'line-through', color: 'grey' }}></Typography>
                                            <Typography component='p' sx={{ fontSize: '12px', color: 'orange' }}></Typography>
                                        </Typography>
                                    </CardContent>

                                </MyCard>

                            </Grid>
                        )) : <Box sx={{ m: '2rem' }}>
                            <Loading />
                        </Box>}

                    </Grid>
                </Box>
            </Box>

        </BodyContainer>
    )
}

export default Body

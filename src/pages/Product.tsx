import React, { useEffect, useState } from 'react';
import { Box, Breadcrumbs, Button, CardMedia, Grid, Skeleton, Typography, useMediaQuery, useTheme } from '@mui/material';
import { useParams } from 'react-router-dom';
import Link from '@mui/material/Link';
import StarIcon from '@mui/icons-material/Star';
import { API } from './../Network';
import toast from 'react-hot-toast';
import { apiList } from '../apiList';
import Footer from '../components/Footer';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const Product = () => {
    const [productData, setProductData] = useState<any>('');
    const { id } = useParams();
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const fetchdata = async () => {
        try {
            const params = id;
            const url = `${apiList.product}/${params}`;
            const response = await API.get(url);
            if (response) {
                setProductData(response.data);
                toast.success('Data fetched successfully');
                console.log(response.data); // Check the data in console
            } else {
                toast.error('Unable to fetch data');
            }
        } catch (error) {
            toast.error('Unable to fetch data');
            console.error(error);
        }
    };

    useEffect(() => {
        fetchdata();
    }, [id]);

    return (
        <Box sx={{ width: '100%', overflow: 'hidden' }}>
            <Box sx={{ marginTop: '100px', marginBottom: '15px', ml: '20px', display: { xs: 'none', md: 'flex' } }}>
                <Breadcrumbs style={{ fontSize: "14px" }} aria-label="breadcrumb">
                    <Link style={{ marginRight: '1px' }} underline="hover" color="inherit" href="/">
                        Home
                    </Link>
                    <Link style={{ marginLeft: '1px' }} underline="hover" color="inherit" href="/material-ui/getting-started/installation/">
                        Clothing
                    </Link>
                    <Link style={{ marginLeft: '1px' }} underline="hover" color="inherit" href="/material-ui/getting-started/installation/">
                        Men Clothing
                    </Link>
                    <Link style={{ marginLeft: '1px', fontSize: "14px", fontWeight: "bold" }} underline="hover" color="inherit" href="/material-ui/getting-started/installation/">
                        Maniac Tshirts
                    </Link>
                    <Link style={{ marginLeft: '1px', fontSize: "14px", fontWeight: "bold" }} underline="hover" color="inherit" href="/material-ui/getting-started/installation/">
                        Men T-Shirt
                    </Link>
                </Breadcrumbs>
            </Box>

            {isSmallScreen ? (
                <Box sx={{ width: '100%', marginTop: { xs: '70px', md: '0px' } }}>
                    <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            {productData?.images ? productData.images.map((data: any, index: number) => (
                                <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`} data-bs-interval="2000">
                                    <img
                                        src={data}
                                        className="d-block w-100"
                                        alt={`Slide ${index}`}
                                        style={{ height: '450px', objectFit: 'contain', backgroundColor: 'rgb(245,245,246)' }}
                                    />
                                </div>
                            )) : <Skeleton variant="rectangular" width="100%" height={450} />}
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </Box>
            ) : (
                <Box sx={{ display: 'flex', justifyContent: 'space-around', flexDirection: { xs: 'column', md: 'row' } }}>
                    <Box sx={{ width: { xs: '100%', sm: '100%', md: '55%' } }}>
                        <Grid container sx={{ display: 'flex', flexWrap: { xs: 'nowrap', md: 'wrap' }, justifyContent: 'space-between' }}>
                            {productData?.images ? productData.images.map((data: any, index: number) => (
                                <Grid sx={{ marginBottom: '.7rem', }} item md={5.9} xs={12} key={index}>
                                    <Box
                                        sx={{
                                            overflow: 'hidden',
                                            position: 'relative',
                                            '&:hover .media': {
                                                transform: 'scale(1.05)',
                                            },
                                            transition: 'transform 0.3s ease',
                                        }}
                                    >
                                        <CardMedia
                                            className="media"
                                            sx={{
                                                backgroundColor: 'rgb(245,245,246)',
                                                height: 450,
                                                width: { md: '100%', xs: '100vw' },
                                                objectFit: 'contain',
                                                objectPosition: 'top',
                                                transition: 'transform 0.3s ease',
                                            }}
                                            image={data}
                                            title="Product Image"
                                            component="img"
                                        />
                                    </Box>
                                </Grid>
                            )) : <Skeleton variant="rectangular" width={310} height={450} />}
                        </Grid>
                    </Box>
                    <Box sx={{ width: { xs: '100vw', md: '38%' } }}>
                        <Typography variant='h5' sx={{ fontWeight: 'bold' }}>{productData.brand}</Typography>
                        <Typography variant='h6' component='p' sx={{ fontWeight: '300', color: 'grey' }}>{productData.title}</Typography>
                        <Box sx={{ border: '1px solid rgb(224, 219, 219)', mt: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', width: 'fit-content' }}>
                            <Typography sx={{ fontWeight: 'bold', fontSize: '15px', marginLeft: '6px', marginRight: '6px' }}>
                                {productData.rating} <StarIcon sx={{ color: 'rgb(20, 149, 143)', fontSize: '15px', marginBottom: '3px' }} />
                            </Typography>
                            <Box sx={{ width: '1px', border: '1px solid rgb(224, 219, 219)', height: '14px' }}></Box>
                            <Typography sx={{ fontSize: '15px', marginLeft: '6px', marginRight: '6px' }}>
                                {productData.reviews?.length} Ratings
                            </Typography>
                        </Box>
                        <Box sx={{ width: '90%', height: '1px', backgroundColor: 'rgb(224, 219, 219)', marginTop: '.5rem', marginBottom: '1rem' }}></Box>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Typography sx={{ fontWeight: 'bold', fontSize: '24px' }} variant='h6' component='p'> &#8377; {productData.price}</Typography>
                            <Typography sx={{ fontSize: '20px', fontWeight: '100', color: 'grey', marginLeft: '1rem' }}>MRP</Typography>
                            <Typography sx={{ textDecoration: 'line-through', fontSize: '20px', fontWeight: '100', color: 'grey', marginLeft: '.3rem' }}>&#8377;{productData.price * 2}</Typography>
                            <Typography sx={{ marginLeft: '1rem', fontWeight: 'bold', color: '#ff5a5a' }}>
                                (50% OFF)
                            </Typography>
                        </Box>
                        <Box>
                            <Typography sx={{ color: 'rgb(3, 166, 133)', fontWeight: 'bold', fontSize: '14px' }}>inclusive of all taxes</Typography>
                        </Box>

                        <Typography sx={{ marginTop: '1rem', fontSize: '15px', fontWeight: 'bold' }}>MORE COLORS</Typography>
                        <Box sx={{ display: 'flex', gap: '.2rem' }}>
                            {productData?.images ? <CardMedia image={productData?.images[0]} component='img' sx={{ width: '70px', height: '100px', objectFit: 'contain', backgroundColor: 'rgb(224, 219, 219)' }} alt="" /> : null}
                            {productData?.images ? <CardMedia image={productData?.images[0]} component='img' sx={{ width: '70px', height: '100px', objectFit: 'contain', backgroundColor: 'rgb(224, 219, 219)' }} alt="" /> : null}
                            {productData?.images ? <CardMedia image={productData?.images[0]} component='img' sx={{ width: '70px', height: '100px', objectFit: 'contain', backgroundColor: 'rgb(224, 219, 219)' }} alt="" /> : null}
                        </Box>
                        <Box sx={{ display: 'flex', gap: 5, alignItems: 'end', marginTop: '1.5rem' }}>
                            <Typography sx={{ fontSize: '15px', fontWeight: 'bold' }}>SELECT SIZE</Typography>
                            <Typography sx={{ fontSize: '14px', fontWeight: 'bold', color: '#ff5a5a' }}>SIZE CHART &gt;</Typography>

                        </Box>
                        <Box sx={{ display: 'flex', gap: 2, mt: '1rem' }}>
                            <Box sx={{ width: '50px', height: '50px', border: '1px solid rgb(224, 219, 219)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Typography>XS</Typography></Box>
                            <Box sx={{ width: '50px', height: '50px', border: '1px solid rgb(224, 219, 219)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Typography>S</Typography></Box>
                            <Box sx={{ width: '50px', height: '50px', border: '1px solid rgb(224, 219, 219)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Typography>M</Typography></Box>
                            <Box sx={{ width: '50px', height: '50px', border: '1px solid rgb(224, 219, 219)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Typography>L</Typography></Box>
                            <Box sx={{ width: '50px', height: '50px', border: '1px solid rgb(224, 219, 219)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Typography>XL</Typography></Box>
                        </Box>
                        
                        <Box sx={{display:'flex', gap:2 ,marginTop:'1.5rem'}}>
                            <Button
                                variant="contained"
                                disableRipple
                                disableElevation
                                disableFocusRipple
                                disableTouchRipple

                                sx={{
                                    borderRadius: '6px', minWidth: "225px", height: "50px", backgroundColor: "#ff3e6c", ':hover': { backgroundColor: "#ff3e6c" },
                                    fontweight: "40px"
                                }}
                                startIcon={<ShoppingBagIcon />}
                            >
                                Add to Bag
                            </Button>
                            <Button
                                variant='text'
                                color="secondary"
                                sx={{ minWidth: "159", border: '1px solid rgb(212, 213, 217)', height: '50px',color:'rgb(40, 44, 63)',fontWeight:'bold',padding:'0px 2rem' }}
                                startIcon={<FavoriteBorderIcon />}
                            >
                                Wishlist
                            </Button>
                        </Box>
                        <Box sx={{ width: '90%', height: '1px', backgroundColor: 'rgb(224, 219, 219)', marginTop: '1rem', marginBottom: '1rem' }}></Box>

                    </Box>
                </Box>
            )}
            <Box sx={{ width: { xs: '100vw', md: '45%' }, display: { md: 'none', xs: 'flex' }, flexDirection: 'column',padding:'1rem' }}>
                <Typography variant='h6' component='p' sx={{ fontWeight: '500', color: 'rgb(85, 88, 103)',fontSize:'15px' }}>{productData.title}</Typography>
                <Typography variant='h5' sx={{ fontWeight: '300',fontSize:'14px',color:'rgb(85, 88, 103)' }}>{productData.brand}</Typography>
                {/* <Box sx={{ border: '1px solid rgb(224, 219, 219)', mt: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', width: 'fit-content' }}>
                    <Typography sx={{ fontWeight: 'bold', fontSize: '15px', marginLeft: '6px', marginRight: '6px' }}>
                        {productData.rating} <StarIcon sx={{ color: 'rgb(20, 149, 143)', fontSize: '15px', marginBottom: '3px' }} />
                    </Typography>
                    <Box sx={{ width: '1px', border: '1px solid rgb(224, 219, 219)', height: '14px' }}></Box>
                    <Typography sx={{ fontSize: '15px', marginLeft: '6px', marginRight: '6px' }}>
                        {productData.reviews?.length} Ratings
                    </Typography>
                </Box> */}
                {/* <Box sx={{ width: '90%', height: '1px', backgroundColor: 'rgb(224, 219, 219)', marginTop: '.5rem', marginBottom: '1rem' }}></Box> */}
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Typography sx={{ fontWeight: 'bold', fontSize: '15px' }} variant='h6' component='p'> &#8377; {productData.price}</Typography>
                    <Typography sx={{ fontSize: '15px', fontWeight: '100', color: 'grey', marginLeft: '1rem' }}>MRP</Typography>
                    <Typography sx={{ textDecoration: 'line-through', fontSize: '13px', fontWeight: '100', color: 'grey', marginLeft: '.3rem' }}>&#8377;{productData.price * 2}</Typography>
                    <Typography sx={{ marginLeft: '1rem', fontWeight: 'bold', color: 'rgb(227, 128, 80)',fontSize:'13px' }}>
                        (50% OFF)
                    </Typography>
                </Box>
            </Box>
            <Footer />
        </Box>
    );
};

export default Product;

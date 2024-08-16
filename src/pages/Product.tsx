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
// import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { format } from 'date-fns';


const Product = () => {
    const [productData, setProductData] = useState<any>('');
    const { id } = useParams();
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));


    const formatDate = (isoDate: any) => {
        const date = new Date(isoDate);
        return <Typography>{format(date, 'MMMM dd, yyyy')}</Typography>; // Example: "May 23, 2024"
    };

    const fetchdata = async () => {
        try {
            const params = id;
            const url = `${apiList.product}/${params}`;
            const response = await API.get(url);
            if (response) {
                setProductData(response.data);
                toast.success('Data fetched successfully');
                console.log(response.data);
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

                        <Box sx={{ display: 'flex', gap: 2, marginTop: '1.5rem' }}>
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
                                sx={{ minWidth: "159", border: '1px solid rgb(212, 213, 217)', height: '50px', color: 'rgb(40, 44, 63)', fontWeight: 'bold', padding: '0px 2rem' }}
                                startIcon={<FavoriteBorderIcon />}
                            >
                                Wishlist
                            </Button>
                        </Box>
                        <Box sx={{ width: '90%', height: '1px', backgroundColor: 'rgb(224, 219, 219)', marginTop: '1rem', marginBottom: '1rem' }}></Box>
                        <Typography sx={{ fontSize: '15px', fontWeight: 'bold', mb: '1rem' }}>DELIVERY OPTIONS <LocalShippingOutlinedIcon /></Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 5, border: '1px solid rgb(212, 213, 217)', width: 'fit-content', padding: '.5rem .8rem' }}>
                            <Typography sx={{ fontWeight: '300', color: 'grey' }}>Enter pincode</Typography>
                            <Typography sx={{ fontWeight: 'bold', color: '#ff5a5a', fontSize: '14px' }}>Check</Typography>
                        </Box>
                        <Typography sx={{ fontSize: '13px', color: 'grey', mb: '1.5rem' }}>Please enter PIN code to check delivery time & Pay on Delivery Availability</Typography>
                        <Typography sx={{ fontSize: '14px' }}>
                            100% Original Products
                        </Typography>
                        <Typography sx={{ fontSize: '14px' }}>
                            Pay on delivery might be available
                        </Typography>
                        <Typography sx={{ fontSize: '14px' }}>
                            Easy 7 days returns and exchanges
                        </Typography>
                        <Typography sx={{ fontSize: '15px', fontWeight: 'bold', mt: '2rem' }}>BEST OFFERS <LocalOfferOutlinedIcon sx={{ fontSize: '15px' }} /></Typography>
                        <Box sx={{ display: 'flex', mt: '.8rem', gap: 1 }}>
                            <Typography sx={{ fontSize: '15px', fontWeight: 'bold' }}>Best Price: </Typography><Typography sx={{ color: '#ff905a', fontWeight: 'bold' }}>{productData.price > 2 ? productData.price - 1 : productData.price}</Typography>
                        </Box>
                        <ul className='list'>
                            <li>
                                <Typography sx={{ fontWeight: '300', fontSize: '15px' }}>Coupon code: <b style={{ fontWeight: 'bold' }}>MYNTRA300</b> </Typography>
                            </li>
                            <li>
                                <Typography sx={{ fontWeight: '300', fontSize: '15px' }}>Coupon Discount: Rs. 300 off (check cart for final savings)</Typography>
                            </li>
                            <li>
                                <Typography sx={{ fontWeight: '300', fontSize: '15px' }}>Applicable on: Orders above Rs. 1199 (only on first purchase)</Typography>
                            </li>
                        </ul>
                        <Typography sx={{ color: '#ff3f6c', fontSize: '13px', fontWeight: 'bold', mb: '1rem' }}>View Eligible Products</Typography>
                        <Typography sx={{ fontWeight: 'bold' }}>
                            10% Instant Discount on RuPay Credit Card.
                        </Typography>
                        <ul className='list'>
                            <li >
                                <Typography sx={{ fontWeight: '300', fontSize: '14px' }}> Min Spend ₹3,500; Max Discount ₹1,000.</Typography>
                            </li>
                        </ul>
                        <Typography sx={{ color: '#ff3f6c', fontSize: '13px', fontWeight: 'bold', mb: '1rem' }}>Terms & Condition</Typography>
                        <Typography sx={{ fontWeight: 'bold' }}>
                            10% Instant Discount on select Kotak Credit and Debit Cards.
                        </Typography>
                        <ul className='list'>
                            <li >
                                <Typography sx={{ fontWeight: '300', fontSize: '14px' }}> Min Spend ₹3,500; Max Discount ₹1,000.</Typography>
                            </li>
                        </ul>
                        <Typography sx={{ color: '#ff3f6c', fontSize: '13px', fontWeight: 'bold', mb: '1rem' }}>Terms & Condition</Typography>
                        <Typography sx={{ fontWeight: 'bold' }}>
                            10% Instant Discount on select Kotak Credit and Debit Cards.
                        </Typography>
                        <ul className='list'>
                            <li >
                                <Typography sx={{ fontWeight: '300', fontSize: '14px' }}> Min Spend ₹3,500; Max Discount ₹1,000.</Typography>
                            </li>
                        </ul>
                        <Typography sx={{ color: '#ff3f6c', fontSize: '13px', fontWeight: 'bold', mb: '1rem' }}>Terms & Condition</Typography>
                        <Typography sx={{ fontWeight: 'bold' }}>
                            10% Instant Discount on select Kotak Credit and Debit Cards.
                        </Typography>
                        <ul className='list'>
                            <li >
                                <Typography sx={{ fontWeight: '300', fontSize: '14px' }}> Min Spend ₹3,500; Max Discount ₹1,000.</Typography>
                            </li>
                        </ul>
                        <Typography sx={{ color: '#ff3f6c', fontSize: '13px', fontWeight: 'bold', mb: '1rem' }}>Terms & Condition</Typography>
                        <Typography sx={{ fontWeight: 'bold' }}>
                            10% Instant Discount on select Kotak Credit and Debit Cards.
                        </Typography>
                        <ul className='list'>
                            <li >
                                <Typography sx={{ fontWeight: '300', fontSize: '14px' }}> Min Spend ₹3,500; Max Discount ₹1,000.</Typography>
                            </li>
                        </ul>
                        <Box sx={{ width: '90%', height: '1px', backgroundColor: 'rgb(224, 219, 219)', marginTop: '.5rem', marginBottom: '1rem' }}></Box>

                        <Box sx={{ display: 'flex', mt: '1rem' }}>
                            <Typography sx={{ fontSize: '15px', fontWeight: 'bold' }}>RATINGS </Typography>
                            <StarBorderIcon sx={{ fontSize: '18px' }} />

                        </Box>
                        <Box sx={{
                            display: 'flex',
                            mt: '2rem'
                        }}>
                            <Box sx={{ width: '30%', borderRight: '1px solid rgb(224, 219, 219)', pt: '1rem' }}>
                                <Typography variant='h4'>
                                    {productData.rating}
                                    <StarIcon sx={{ color: 'rgb(20, 149, 143)' }} />
                                </Typography>
                                <Typography component='p' sx={{ fontSize: '13px', mt: '.5rem' }}>7 Verified Buyers</Typography>
                            </Box>
                            <Box sx={{ width: '70%', pl: '3rem' }}>
                                <Box sx={{ display: 'flex', alignItems: 'center' }}> <Typography sx={{ fontSize: '13px', color: '#a9abb3' }}>5</Typography> <StarIcon sx={{ fontSize: "12px", color: '#a9abb3', m: '0rem .3rem ' }} /> <Box sx={{ width: '120px', mr: '.3rem', height: '4px', backgroundColor: '#f5f5f6' }}> <Box sx={{ width: '75px', height: '4px', backgroundColor: '#14958f' }}>  </Box> </Box> <Typography sx={{ fontSize: '13px', color: 'grey' }}>4</Typography>  </Box>
                                <Box sx={{ display: 'flex', alignItems: 'center' }}> <Typography sx={{ fontSize: '13px', color: '#a9abb3' }}>4</Typography> <StarIcon sx={{ fontSize: "12px", color: '#a9abb3', m: '0rem .3rem ' }} /> <Box sx={{ width: '120px', mr: '.3rem', height: '4px', backgroundColor: '#f5f5f6' }}> <Box sx={{ width: '40px', height: '4px', backgroundColor: '#14958f' }}>  </Box> </Box> <Typography sx={{ fontSize: '13px', color: 'grey' }}>3</Typography>  </Box>
                                <Box sx={{ display: 'flex', alignItems: 'center' }}> <Typography sx={{ fontSize: '13px', color: '#a9abb3' }}>3</Typography> <StarIcon sx={{ fontSize: "12px", color: '#a9abb3', m: '0rem .3rem ' }} /> <Box sx={{ width: '120px', mr: '.3rem', height: '4px', backgroundColor: '#f5f5f6' }}> <Box sx={{ width: '15px', height: '4px', backgroundColor: '#72bfbc' }}>  </Box> </Box> <Typography sx={{ fontSize: '13px', color: 'grey' }}>2</Typography>  </Box>
                                <Box sx={{ display: 'flex', alignItems: 'center' }}> <Typography sx={{ fontSize: '13px', color: '#a9abb3' }}>2</Typography> <StarIcon sx={{ fontSize: "12px", color: '#a9abb3', m: '0rem .3rem ' }} /> <Box sx={{ width: '120px', mr: '.3rem', height: '4px', backgroundColor: '#f5f5f6' }}> <Box sx={{ width: '0px', height: '4px', backgroundColor: '#14958f' }}>  </Box> </Box> <Typography sx={{ fontSize: '13px', color: 'grey' }}>0</Typography>  </Box>
                                <Box sx={{ display: 'flex', alignItems: 'center' }}> <Typography sx={{ fontSize: '13px', color: '#a9abb3' }}>1</Typography> <StarIcon sx={{ fontSize: "12px", color: '#a9abb3', m: '0rem .3rem ' }} /> <Box sx={{ width: '120px', mr: '.3rem', height: '4px', backgroundColor: '#f5f5f6' }}> <Box sx={{ width: '25px', height: '4px', backgroundColor: '#f16565' }}>  </Box> </Box> <Typography sx={{ fontSize: '13px', color: 'grey' }}>2</Typography>  </Box>

                            </Box>
                        </Box>
                        <Box sx={{ width: '90%', height: '1px', backgroundColor: 'rgb(224, 219, 219)', marginTop: '1rem', marginBottom: '1rem' }}></Box>
                        <Box>
                            <Typography sx={{ fontSize: '15px', fontWeight: 'bold' }}>Customer Reviews ({productData.reviews?.length}) </Typography>
                            <Box sx={{ mt: '.5rem', display: 'flex' }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', backgroundColor: '#14958f', height: '16px', p: '0px 3px', mr: '.5rem' }}><StarIcon sx={{ color: 'white', fontSize: '12px', height: 'fit-content' }} /> <Typography sx={{ fontSize: '12px', color: 'white' }}> {productData.reviews ? productData.reviews[0].rating : null}</Typography> </Box>
                                <Typography sx={{ fontSize: '15px', fontWeight: '300' }}> {productData.reviews ? productData.reviews[0].comment : null} </Typography></Box>
                            <Typography sx={{ fontSize: '14px', fontWeight: '300' }}> {productData.reviews ? productData.reviews[0].reviewerName : null} </Typography>

                        </Box>
                    </Box>

                </Box>
            )}


            {/* mobile view  */}

            <Box sx={{ backgroundColor: '#f4f4f5', width: { xs: '100vw', md: '45%' }, display: { md: 'none', xs: 'flex' }, flexDirection: 'column' }}>
                <Box sx={{ padding: '1rem', backgroundColor: 'white' }}>
                    <Typography variant='h6' component='p' sx={{ fontWeight: '500', color: 'rgb(85, 88, 103)', fontSize: '15px' }}>{productData.title}</Typography>
                    <Typography variant='h5' sx={{ fontWeight: '300', fontSize: '14px', color: 'rgb(85, 88, 103)' }}>{productData.brand}</Typography>

                    <Box sx={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
                        <Typography sx={{ fontWeight: 'bold', fontSize: '15px' }} variant='h6' component='p'> &#8377; {productData.price}</Typography>
                        <Typography sx={{ fontSize: '15px', fontWeight: '100', color: 'grey', marginLeft: '1rem' }}>MRP</Typography>
                        <Typography sx={{ textDecoration: 'line-through', fontSize: '13px', fontWeight: '100', color: 'grey', marginLeft: '.3rem' }}>&#8377;{productData.price * 2}</Typography>
                        <Typography sx={{ marginLeft: '1rem', fontWeight: 'bold', color: 'rgb(227, 128, 80)', fontSize: '13px' }}>
                            (50% OFF)
                        </Typography>
                    </Box>
                </Box>
                <Box sx={{ padding: '1rem', backgroundColor: 'white', mt: '.5rem' }}>
                    <Typography sx={{ fontSize: '13px', fontWeight: 'bold', mb: '.5rem', mt: '.5rem' }}>DELIVERY OPTIONS & SERVICES</Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', border: '1px solid rgb(212, 213, 217)', width: '100%', padding: '.5rem .8rem' }}>
                        <Typography sx={{ fontWeight: '300', color: 'grey', fontSize: '13px' }}>Enter a PIN code</Typography>
                        <Typography sx={{ fontWeight: 'bold', color: 'grey', fontSize: '13px' }}>CHECK</Typography>
                    </Box>
                    <Typography sx={{ color: '#7e808c', fontSize: '12px', mt: '.8rem' }}>Pay on delivery might be available</Typography>
                    <Typography sx={{ color: '#7e808c', fontSize: '12px' }}>Easy 7 day returns and exchanges</Typography>
                </Box>
                <Box sx={{ padding: '1rem', backgroundColor: 'white', mt: '.5rem' }}>
                    <Box sx={{ display: 'flex' }}>
                        <Typography sx={{ color: '#fff', backgroundColor: '#03a685', p: '0px 6px', fontSize: '13px', fontWeight: 'bold' }}>OFFER</Typography>
                        <Typography sx={{ p: '0px 6px', fontSize: '13px', fontWeight: 'bold' }}> Flat 300 Off</Typography>
                    </Box>
                    <Box sx={{ display: 'flex' }}>
                        <Box>
                            <Typography>Applicable on your first order</Typography>
                            <Typography>Use code:MYNTRA300</Typography>
                        </Box>
                    </Box>
                </Box>
                <Box sx={{ padding: '1rem', backgroundColor: 'white', mt: '.5rem' }}>

                    <Box sx={{ width: '100%', display: 'flex', mb: '1rem' }}>
                        <Box sx={{ width: '80%' }}>
                            <Typography sx={{ fontWeight: 'bold', fontSize: '13px' }}>
                                10% Instant Discount on RuPay Credit Card.
                            </Typography>
                            <Typography sx={{ fontWeight: '400', color: 'grey', fontSize: '13px' }}> Min Spend ₹3,500; Max Discount ₹1,000.</Typography>
                        </Box>
                        <Box sx={{ width: '20%', display: 'flex', alignItems: 'center', justifyContent: 'end', color: '#ff3e6c', fontSize: '13px', fontWeight: 'bold' }}>T&C</Box>

                    </Box>

                    <Box>
                        <Box sx={{ width: '100%', display: 'flex', mb: '1rem' }}>
                            <Box sx={{ width: '80%' }}>
                                <Typography sx={{ fontWeight: 'bold', fontSize: '13px' }}>
                                    10% Instant Discount on select Kotak Credit and Debit Cards.
                                </Typography>
                                <Typography sx={{ fontWeight: '400', color: 'grey', fontSize: '13px' }}> Min Spend ₹3,500; Max Discount ₹1,000.</Typography>
                            </Box>
                            <Box sx={{ width: '20%', display: 'flex', alignItems: 'center', justifyContent: 'end', color: '#ff3e6c', fontSize: '13px', fontWeight: 'bold' }}>T&C</Box>
                        </Box>
                    </Box>
                    <Box>
                        <Box sx={{ width: '100%', display: 'flex', mb: '1rem' }}>
                            <Box sx={{ width: '80%' }}>
                                <Typography sx={{ fontWeight: 'bold', fontSize: '13px' }}>
                                    10% Instant Discount on select Kotak Credit and Debit Cards.
                                </Typography>
                                <Typography sx={{ fontWeight: '400', color: 'grey', fontSize: '13px' }}> Min Spend ₹3,500; Max Discount ₹1,000.</Typography>
                            </Box>
                            <Box sx={{ width: '20%', display: 'flex', alignItems: 'center', justifyContent: 'end', color: '#ff3e6c', fontSize: '13px', fontWeight: 'bold' }}>T&C</Box>
                        </Box>
                    </Box>
                    <Box>
                        <Box sx={{ width: '100%', display: 'flex', mb: '1rem' }}>
                            <Box sx={{ width: '80%' }}>
                                <Typography sx={{ fontWeight: 'bold', fontSize: '13px' }}>
                                    10% Instant Discount on select Kotak Credit and Debit Cards.
                                </Typography>
                                <Typography sx={{ fontWeight: '400', color: 'grey', fontSize: '13px' }}> Min Spend ₹3,500; Max Discount ₹1,000.</Typography>
                            </Box>
                            <Box sx={{ width: '20%', display: 'flex', alignItems: 'center', justifyContent: 'end', color: '#ff3e6c', fontSize: '13px', fontWeight: 'bold' }}>T&C</Box>
                        </Box>
                    </Box>
                    <Box>
                        <Box sx={{ width: '100%', display: 'flex', mb: '1rem' }}>
                            <Box sx={{ width: '80%' }}>
                                <Typography sx={{ fontWeight: 'bold', fontSize: '13px' }}>
                                    10% Instant Discount on select Kotak Credit and Debit Cards.
                                </Typography>
                                <Typography sx={{ fontWeight: '400', color: 'grey', fontSize: '13px' }}> Min Spend ₹3,500; Max Discount ₹1,000.</Typography>
                            </Box>
                            <Box sx={{ width: '20%', display: 'flex', alignItems: 'center', justifyContent: 'end', color: '#ff3e6c', fontSize: '13px', fontWeight: 'bold' }}>T&C</Box>
                        </Box>
                    </Box>

                </Box>

                <Box sx={{ padding: '1rem', backgroundColor: 'white', mt: '.5rem' }}>
                    <Box sx={{ display: 'flex', alignItems: 'end', marginTop: '.2rem', justifyContent: 'space-between' }}>
                        <Typography sx={{ fontSize: '13px', fontWeight: 'bold' }}>Select Size</Typography>
                        <Typography sx={{ fontSize: '13px', fontWeight: 'bold', color: '#ff5a5a' }}>SIZE CHART &gt;</Typography>

                    </Box>
                    <Box sx={{ display: 'flex', gap: 1, mt: '1rem' }}>
                        <Box sx={{ width: '50px', height: '50px', border: '1px solid rgb(224, 219, 219)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Typography>XS</Typography></Box>
                        <Box sx={{ width: '50px', height: '50px', border: '1px solid rgb(224, 219, 219)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Typography>S</Typography></Box>
                        <Box sx={{ width: '50px', height: '50px', border: '1px solid rgb(224, 219, 219)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Typography>M</Typography></Box>
                        <Box sx={{ width: '50px', height: '50px', border: '1px solid rgb(224, 219, 219)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Typography>L</Typography></Box>
                        <Box sx={{ width: '50px', height: '50px', border: '1px solid rgb(224, 219, 219)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Typography>XL</Typography></Box>
                    </Box>
                </Box>

                <Box sx={{ padding: '1rem', backgroundColor: 'white', mt: '.5rem' }}>

                </Box>

                <Box sx={{ pb: '8px', display: 'flex', gap: 2, marginTop: '1.5rem', position: 'fixed', bottom: '0px', zIndex: '20', backgroundColor: 'white' }}>

                    <Button
                        variant='text'
                        color="secondary"
                        sx={{ minWidth: "140", backgroundColor: 'white', border: '1px solid rgb(212, 213, 217)', height: '40px', color: 'rgb(40, 44, 63)', fontWeight: 'bold', padding: '0px 2rem' }}
                        startIcon={<FavoriteBorderIcon />}
                    >
                        Wishlist
                    </Button>
                    <Button
                        variant="contained"
                        disableRipple
                        disableElevation
                        disableFocusRipple
                        disableTouchRipple
                        sx={{
                            borderRadius: '6px', minWidth: "180px", height: "40px", backgroundColor: "#ff3e6c", ':hover': { backgroundColor: "#ff3e6c" },
                            fontweight: "40px"
                        }}
                        startIcon={<ShoppingBagIcon />}
                    >
                        Add to Bag
                    </Button>
                </Box>
            </Box>
            <Footer />
        </Box>
    );
};

export default Product;

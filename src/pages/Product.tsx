import { Box, Breadcrumbs, CardMedia, Divider, Grid, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Nav from '../components/Nav'
import Link from '@mui/material/Link';
import StarIcon from '@mui/icons-material/Star';

const Product = () => {
    const [productData, setProductData] = useState<any>('')
    const { id } = useParams()
    const fetchdata = async () => {
        try {
            const response = await axios.get(`https://dummyjson.com/products/${id}`)
            if (response) {
                setProductData(response.data)
                console.log(response.data)
            }
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        fetchdata()
    }, [])
    return (
        <Box sx={{ width: '100%', overflow: 'hidden' }}>
            {/* <Nav /> */}
            <Box sx={{ marginTop: '100px' ,marginBottom:'15px',ml:'20px'}}>
                <Breadcrumbs style={{ fontSize: "14px" }} aria-label="breadcrumb">
                    <Link style={{ marginRight: '1px' }} underline="hover" color="inherit" href="/">
                        Home
                    </Link>
                    <Link
                        style={{ marginLeft: '1px' }}
                        underline="hover"
                        color="inherit"
                        href="/material-ui/getting-started/installation/"
                    >
                        Clothing
                    </Link>
                    <Link
                        style={{ marginLeft: '1px' }}
                        underline="hover"
                        color="inherit"
                        href="/material-ui/getting-started/installation/"
                    >
                        Men Clothing
                    </Link>

                    <Link
                        style={{ marginLeft: '1px', fontSize: "14px", fontWeight: "bold" }}
                        underline="hover"
                        color="inherit"
                        href="/material-ui/getting-started/installation/"
                    >
                        Maniac Tshirts
                    </Link>
                    <Link
                        style={{ marginLeft: '1px', fontSize: "14px", fontWeight: "bold" }}
                        underline="hover"
                        color="inherit"
                        href="/material-ui/getting-started/installation/"
                    >
                        Men T-Shirt
                    </Link>

                </Breadcrumbs>
            </Box>
            <Box sx={{display:'flex',justifyContent:'space-around'}}>
                <Box sx={{width:'50%'}}>
                    <Grid container sx={{display:'flex',flexWrap:'wrap',justifyContent:'space-between'}}>
                        {productData?.images ? productData.images.map((data:any)=>(
                            <Grid item md={5.9} sx={{}}>
                              <CardMedia   sx={{ height: 500, width: '100%', backgroundSize: 'contain', backgroundPosition: 'top' }}
                                    image={data}
                                    title="green iguana">

                              </CardMedia>
                            </Grid>

                        )):null}
                       
                    </Grid>
                </Box>
                <Box sx={{width:'45%',height:'200px'}}>
                    <Typography variant='h5' sx={{fontWeight:'bold'}}>{productData.brand}</Typography>
                    <Typography variant='h6'component='p'sx={{fontWeight:'300',color:'grey'}}>{productData.title}</Typography>
                    <Box sx={{border:'1px solid rgb(224, 219, 219)',mt:'1rem',display:'flex',alignItems:'center',justifyContent:'center',width:'fit-content'}}>
                      <Typography sx={{fontWeight:'bold',fontSize:'15px',marginLeft:'6px',marginRight:'6px'}}>
                      {productData.rating}  <StarIcon sx={{color:'rgb(20, 149, 143)',fontSize:'15px',marginBottom:'3px'}}/>
                      </Typography>
                      <Box sx={{width:'1px',border:'1px solid rgb(224, 219, 219)',height:'14px'}}></Box>
                      <Typography sx={{fontSize:'15px',marginLeft:'6px',marginRight:'6px'}}>
                        {productData.reviews?.length} Ratings
                      </Typography>
                    </Box>
                    <Box sx={{width:'90%',height:'1px',backgroundColor:'rgb(224, 219, 219)',marginTop:'.5rem',marginBottom:'1rem'}}></Box>
                    {/* <Typography variant='h6'component='p'>{productData.rating}</Typography> */}
                    <Box sx={{display:'flex',alignItems:'center'}}>
                    <Typography sx={{fontWeight:'bold',fontSize:'24px'}} variant='h6'component='p'> &#8377; {productData.price}</Typography>
                    <Typography sx={{fontSize:'20px',fontWeight:'100',color:'grey',marginLeft:'1rem'}}>MRP</Typography>
                    <Typography sx={{textDecoration:'line-through',fontSize:'20px',fontWeight:'100',color:'grey',marginLeft:'.3rem'}}>&#8377;{productData.price*2}</Typography>
                    <Typography sx={{marginLeft:'1rem',fontWeight:'bold',color:'rgb(227, 128, 80)'}}>
                        (50% OFF)
                    </Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Product
import React, { useEffect, useState } from 'react'
import { Card, CardContent, CardMedia, Stack, Typography } from '@mui/material'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { Grid, Paper } from '@mui/material';
import axios from 'axios';

const Content = () => {

    const [productData , setProductData] = useState<any[]>([])
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        [theme.breakpoints.down('md')]: {
            // padding: theme.spacing(0)
            padding: '0px'
        },
    }));
    const MyBox = styled(Box)(({ theme }) => ({
        [theme.breakpoints.down('md')]: {
            display: 'none'
        },
        border: '1px solid rgb(197, 195, 195)'
    }))
    const MyBox2 = styled(Box)(({ theme }) => ({
        borderTop: '1px solid rgb(197, 195, 195)',
        borderBottom: '1px solid rgb(197, 195, 195)',
        padding: '1rem',
        [theme.breakpoints.down('md')]: {
            padding: '0rem'
        },
    }))
    const Typo = styled(Typography)(({ theme }) => ({
        [theme.breakpoints.down('md')]: {
            backgroundColor: '',
        },
        [theme.breakpoints.up('md')]: {
            fontWeight: '600',
            Padding: '8px'
        }
    }))
    const MyCard = styled(Card)((theme) => ({
        borderRadius: '0px',
    }))
    const MyStack = styled(Stack)(({ theme }) => ({
        width:'100%',
        [theme.breakpoints.down('md')]: {
            paddingTop: '80px'
        }
    }))

    const fetchData = async()=>{
        try{

            const response = await axios.get('https://dummyjson.com/products')
            if(response){
                setProductData(response.data.products)
                console.log(response.data.products)
            }
        }catch(error){
            console.log('error',error)
        }
    }

    useEffect(()=>{
        fetchData()
    },[])
    return (
        <MyStack direction='row'>
            <MyBox flex={2.5} p={0} sx={{
                position: 'sticky', bottom: '0px', display: 'flex', flexDirection: 'column', color: 'grey', fontSize: '10px'
            }}>

                <Box sx={{ display: 'flex', alignItems: 'start', flexDirection: 'column', borderBottom: '1px solid rgb(197, 195, 195)' }} p={4}>
                    <Typography variant='h6' sx={{ color: 'black', fontSize: '14px', mb: '15px' }}>CATEGORIES</Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: '5px', justifyContent: 'start' }}>
                        <input className='chk' type="checkbox" id="myCheckbox" />
                        <label className="lbl" htmlFor="myCheckbox">T-shirts</label>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: '5px' }}>
                        <input className='chk' type="checkbox" id="myCheckbox" />
                        <label className="lbl" htmlFor="myCheckbox">Lounge T-shirts</label>
                    </Box>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'start', flexDirection: 'column', borderBottom: '1px solid grey' }} p={4}>
                    <Typography variant='h6' sx={{ color: 'black', fontSize: '14px', mb: '15px' }}>BRAND</Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: '5px' }}>
                        <input className='chk' type="checkbox" id="myCheckbox" />
                        <label className="lbl" htmlFor="myCheckbox">Roadster</label>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: '5px' }}>
                        <input className='chk' type="checkbox" id="myCheckbox" />
                        <label className="lbl" htmlFor="myCheckbox">Frisker</label>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: '5px' }}>
                        <input className='chk' type="checkbox" id="myCheckbox" />
                        <label className="lbl" htmlFor="myCheckbox">Tommy Hilfiger</label>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: '5px' }}>
                        <input className='chk' type="checkbox" id="myCheckbox" />
                        <label className="lbl" htmlFor="myCheckbox">V-Mart</label>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: '5px' }}>
                        <input className='chk' type="checkbox" id="myCheckbox" />
                        <label className="lbl" htmlFor="myCheckbox">HRX by Hrithik Roshan</label>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: '5px' }}>
                        <input className='chk' type="checkbox" id="myCheckbox" />
                        <label className="lbl" htmlFor="myCheckbox">U.S. Polo Assn.</label>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: '5px' }}>
                        <input className='chk' type="checkbox" id="myCheckbox" />
                        <label className="lbl" htmlFor="myCheckbox">WROGN</label>
                    </Box>       <Box sx={{ display: 'flex', alignItems: 'center', mb: '5px' }}>
                        <input className='chk' type="checkbox" id="myCheckbox" />
                        <label className="lbl" htmlFor="myCheckbox">VIMAL JONNY</label>
                    </Box>
                </Box>
               

                <Box sx={{ display: 'flex', alignItems: 'start', flexDirection: 'column', borderBottom: '1px solid grey' }} p={4}>
                    <Typography variant='h6' sx={{ color: 'black', fontSize: '14px', mb: '15px' }}>PRICE</Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: '5px' }}>
                        <input className='chk' type="checkbox" id="myCheckbox" />
                        <label className="lbl" htmlFor="myCheckbox">Rs. 137 to Rs. 13853</label>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: '5px' }}>
                        <input className='chk' type="checkbox" id="myCheckbox" />
                        <label className="lbl" htmlFor="myCheckbox">Rs. 13853 to Rs. 27569</label>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: '5px' }}>
                        <input className='chk' type="checkbox" id="myCheckbox" />
                        <label className="lbl" htmlFor="myCheckbox">Rs. 27569 to Rs. 41285r</label>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: '5px' }}>
                        <input className='chk' type="checkbox" id="myCheckbox" />
                        <label className="lbl" htmlFor="myCheckbox">Rs. 41285 to Rs. 55001</label>
                        {/* <sub className='iam' sx={{color:'grey'}}>(139590)</sub> */}
                    </Box>
                </Box>
            </MyBox>
            <MyBox2 flex={10}>
                <Grid container spacing={0} wrap="wrap">
                  {productData.map((data)=>(
                    <Grid item xs={6} sm={6} md={3} lg={3}>
                    <Item sx={{ boxShadow: '0px 0px 0px white' }}>
                        <MyCard sx={{ overflow: 'hidden', boxShadow: '0px 0px 0px white', borderRadius: '0px' }}>
                            <CardMedia
                                sx={{ height: 270, width: '100%', backgroundSize: 'cover', backgroundPosition: 'top',border:'1px solid rgb(224, 219, 219)' }}
                                image={data.images[0]}
                                title="green iguana"
                            />
                            <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
                                <Typo>
                                    {data.brand}
                                </Typo>
                                <Typography sx={{ fontSize: '12px' }} variant="body2" component='p' color="text.secondary" noWrap>
                                    {data.title}
                                </Typography>
                                <Typography sx={{ display: 'flex' }} gap={1}>
                                    <Typography variant='h6' component='p' sx={{ fontSize: '12px' }}>Rs. {data.price}</Typography>
                                    <Typography component='p' sx={{ fontSize: '12px', textDecorationLine: 'line-through', color: 'grey' }}></Typography>
                                    <Typography component='p' sx={{ fontSize: '12px', color: 'orange' }}></Typography>
                                </Typography>
                            </CardContent>

                        </MyCard>
                    </Item>
                </Grid>
                  ))}
                    
                   



                </Grid>
            </MyBox2>
        </MyStack>


    )
}

export default Content;
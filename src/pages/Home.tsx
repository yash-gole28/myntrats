import { Box } from '@mui/material'
import React from 'react'
import Nav from '../components/Nav'
import Top from '../components/Top'
import Body from '../components/Body'
import Footer from '../components/Footer'


const Home = () => {
  return (
    <Box sx={{width:'100%',overflow:'hidden'}}>
      <Top/>
      <Body/>
      <Footer/>
      {/* <Content/> */}
    </Box>
  )
}

export default Home

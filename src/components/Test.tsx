import { Box } from '@mui/material'
import React from 'react'
import Nav from './Nav'
import Top from './Top'
import Body from './Body'
import Content from './Content'

const Test = () => {
  return (
    <Box sx={{width:'100%',overflow:'hidden'}}>
      <Nav/>
      <Top/>
      <Body/>
      {/* <Content/> */}
    </Box>
  )
}

export default Test

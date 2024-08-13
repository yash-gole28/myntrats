import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Test from './components/Test';
import { Box } from '@mui/material';
import Product from './pages/Product';
import Nav from './components/Nav';



function App() {
  return (
    <Box sx={{width:'100vw'}}>
      <Nav/>
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product/:id" element={<Product />} />
     </Routes>
    </Box>
  );
}

export default App;

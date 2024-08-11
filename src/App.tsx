import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Test from './components/Test';
import { Box } from '@mui/material';


function App() {
  return (
    <Box sx={{width:'100vw'}}>
     <Routes>
      <Route path="/" element={<Home />} />
     </Routes>
    </Box>
  );
}

export default App;

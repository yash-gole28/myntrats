import React from 'react'
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import { Box } from '@mui/material';
const Top = () => {
    return (
        <Box p={3} sx={{ marginTop: '80px', marginBottom: '-15px', display: { xs: 'none', md: 'flex' } }}>
            <Box className='breadcrumbs'>
                <Box role="presentation">
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
                        <Typography style={{ fontSize: "14px", fontWeight: "bold" }} color="text.primary">Men T-Shirts</Typography>
                    </Breadcrumbs>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'end', marginTop: '14px' }}>
 
                    <Typography variant='h6' sx={{ fontSize: '14px', fontWeight: 'bold' }}>Men T-Shirts</Typography>
                    <Typography sx={{ fontSize: '14px', color: 'grey' }}>- 141155 items</Typography>
                </Box>
 
 
                <Box sx={{
                    display: 'flex', justifyContent: 'space-between', width: '96vw', alignItems: 'center',height:'50px',marginTop:'15px'
                }}>
                    <Typography flex={1.5} variant='h6' sx={{ fontSize: '14px' }}>
                        <b>FILTERS</b>
                    </Typography>
                    <Box flex={4} sx={{marginTop:'3px'}} className="drop2">
 
 
                        <NativeSelect
                            sx={{ borderRadius: '10px', fontWeight: '400', color: 'grey', fontSize: '14px', overflow: 'hidden' }}
                            disableUnderline
                            defaultValue={10}
                            inputProps={{
                                name: 'age',
                                id: 'uncontrolled-native',
                            }}
                        >
                            <option value={10}>Bundles</option>
                            <option value={20}>Twenty</option>
                            <option value={30}>Thirty</option>
                        </NativeSelect>
 
                        <NativeSelect
                            sx={{ borderRadius: '10px',  fontWeight: '400', color: 'grey', fontSize: '14px', overflow: 'hidden' }}
                            disableUnderline
                            defaultValue={10}
                            inputProps={{
                                name: 'age',
                                id: 'uncontrolled-native',
                            }}
                        >
                            <option value={10}>Country of Origin</option>
                            <option value={20}>Twenty</option>
                            <option value={30}>Thirty</option>
                        </NativeSelect>
 
                        <NativeSelect
                            sx={{ borderRadius: '8px',  fontWeight: '400', color: 'grey', fontSize: '14px', overflow: 'hidden', width: 'fint' }}
                            disableUnderline
                            defaultValue={10}
                            inputProps={{
                                name: 'age',
                                id: 'uncontrolled-native',
                            }}
                        >
                            <option value={10}>Size</option>
                            <option value={20}>3xl</option>
                            <option value={30}>2xl</option>
                        </NativeSelect>
 
                    </Box>
                    <Box flex={1.8} className="drop3">
                        <FormControl sx={{ minWidth: 280, paddingRight: '20px', marginLeft:'20%' }} size='small'>
 
                            <Select
                                sx={{ fontSize: '12px' }}
                                displayEmpty
                                defaultValue={10}
                                inputProps={{ 'aria-label': 'Without label' }}
                            >
 
                                <MenuItem value={10}><Typography sx={{ display: 'flex', alignItems: 'center' }}>
                                    <Typography sx={{ fontSize: '12px' }} component='p'>Sort by:</Typography>
                                    <Typography sx={{ fontSize: '14px' }} variant='h6'>Recommended</Typography>
                                </Typography></MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
 
export default Top
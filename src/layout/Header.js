import React from 'react';
// import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import {AppBar, Toolbar} from '@mui/material';
import Menu from '../components/HumbergerMenu/Menu'
import VpnKeyRoundedIcon from '@mui/icons-material/VpnKeyRounded';


const header = () => {
    return (
        <AppBar position="fixed"  sx={{bgcolor:"#fff" , width:'100%' }}  >
          <Toolbar sx={{display:'flex' , justifyContent:'space-between'}} >
            <IconButton
              size="small"
              edge="start"
              color="inherit"
              aria-label="menu"
              // sx={{ mr:17 }}
            >
              <Menu />
            </IconButton>
            <VpnKeyRoundedIcon sx={{ color:"orange"}}/>
          </Toolbar>
        </AppBar>
    );
};

export default header;
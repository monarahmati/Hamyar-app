import React from 'react';
// import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import {AppBar, Toolbar} from '@mui/material';
import MenuBar from '../components/HumbergerMenu/MenuBar'
import VpnKeyRoundedIcon from '@mui/icons-material/VpnKeyRounded';


const header = () => {
    return (
        <AppBar position="fixed"  sx={{bgcolor:"#fff" , width:'100%' }}  >
          <Toolbar >
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr:28 }}
            >
              <MenuBar/>
            </IconButton>
            <VpnKeyRoundedIcon sx={{ color:"orange"}}/>
          </Toolbar>
        </AppBar>
    );
};

export default header;
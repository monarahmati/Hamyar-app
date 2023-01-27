import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';

// ===================== ICON =========================

import ExploreIcon from '@mui/icons-material/Explore';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import ShareIcon from '@mui/icons-material/Share';
import StarRateIcon from '@mui/icons-material/StarRate';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import AddCardIcon from '@mui/icons-material/AddCard';
import ThreePIcon from '@mui/icons-material/ThreeP';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import AddchartIcon from '@mui/icons-material/Addchart';
import StarsIcon from '@mui/icons-material/Stars';
import Logout from '@mui/icons-material/Logout';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import Settings from '@mui/icons-material/Settings';




export default function AccountMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <React.Fragment>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center'}}>

        <Tooltip title="Menu">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 1}}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <MenuOpenIcon sx={{ width: 32, height: 32 , color: "#66ff00"}}/>
            {/* <Avatar sx={{ width: 32, height: 32 }}>M</Avatar> */}
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'heddin',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 0.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 30,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              left: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem padding={2} sx={{paddingBottom:0}}>

          <Avatar/>
        <MenuItem  sx={{marginRight: 1 , textAlign: 'left' , display:'grid' , gridColumn:"1rem"}} >
        <Typography component='h7' variant='h8'>
            0918555555
        </Typography>
        <Typography component='h7' variant='h9' paddingTop={1}>
           <Button variant='contained' disabled  Size="small" sx={{  padding:'1px'}}>
                کاربر عادی
           </Button>
        </Typography>
        </MenuItem>
        </MenuItem>

        <Divider />

        <MenuItem sx={{bgcolor:"#ffdae0"}}>
          <ListItemIcon>
            <StarsIcon fontSize="medium" />
          </ListItemIcon>
          خرید اشتراک ویژه
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <AddchartIcon fontSize="medium" />
          </ListItemIcon>
          آزمون تعیین سطح
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <ViewInArIcon fontSize="medium" />
          </ListItemIcon>
          جعبه لغات
        </MenuItem>

        
        <MenuItem>
          <ListItemIcon>
            <ThreePIcon fontSize="medium" />
          </ListItemIcon>
          کد معرف 
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
          <AddCardIcon fontSize="medium" />
          </ListItemIcon>
          تراکنش ها
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <QuestionAnswerIcon fontSize="medium" />
          </ListItemIcon>
          پشتیبانی
        </MenuItem>

        
        <MenuItem>
          <ListItemIcon>
            <StarRateIcon fontSize="medium" />
          </ListItemIcon>
          امتیاز به برنامه
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <ShareIcon fontSize="medium" />
          </ListItemIcon>
           اشتراک گذاری
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <TrackChangesIcon fontSize="medium" />
          </ListItemIcon>
          به روز رسانی 
        </MenuItem>        
        <MenuItem>
          <ListItemIcon>
            <ExploreIcon fontSize="medium" />
          </ListItemIcon>
          راهنمای برنامه
        </MenuItem>

        <Divider />

        <MenuItem>
          <ListItemIcon>
            <Settings fontSize="medium" />
          </ListItemIcon>
          تنظیمات 
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Logout fontSize="medium" />
          </ListItemIcon>
          خروج
        </MenuItem>


      </Menu>
    </React.Fragment>
  );
}

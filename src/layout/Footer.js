import React from 'react';
import DateRangeOutlinedIcon from '@mui/icons-material/DateRangeOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import OtherHousesOutlinedIcon from '@mui/icons-material/OtherHousesOutlined';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { Paper } from '@mui/material';
import { Typography }from '@mui/material'
import {Link} from 'react-router-dom';

export default function LabelBottomNavigation() {
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (

  <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 , zIndex:'200' , padding:'2px'}} elevation={3}>
    <BottomNavigation position="fixed"  sx={{ width: '100%' , height:'60px', top:'1rem' , zIndex:'200' }} value={value} onChange={handleChange}>
     <Link to='/'  style={{textDecoration:'none' , color:'#6c6c6c' , marginLeft:'4rem'}}>
      <BottomNavigationAction
        label="Home"
        value="home"
        icon={<OtherHousesOutlinedIcon sx={{color:'#6c6c6c', fontSize:'1.8rem'}}/>}
      /> 
        <Typography component='h5' variant='h5' fontSize='12px'  marginLeft='1.8rem'   marginTop='-10px' >
          Home
        </Typography>
     </Link>
     <Link to='/books' style={{textDecoration:'none' , color:'#6c6c6c' ,  marginLeft:'-10px'}}>
      <BottomNavigationAction
        label="Books"
        value="books"
        icon={<MenuBookOutlinedIcon sx={{color:'#6c6c6c', fontSize:'1.8rem' }}/>}
      />
      <Typography component='h5' variant='h5' fontSize='11px'   marginLeft='25px'   marginTop='-10px' >
          Books
      </Typography>
     </Link>   
     <Link to='/plan' style={{textDecoration:'none' , color:'#6c6c6c' ,  marginLeft:'-10px'}}>
      <BottomNavigationAction
        label="Plan"
        value="plan"
        icon={<DateRangeOutlinedIcon sx={{color:'#6c6c6c', fontSize:'1.8rem'}} />}
      />   
      <Typography component='h5' variant='h5' fontSize='12px' marginLeft='2rem'  marginTop='-10px' >
          Plan
      </Typography>       
     </Link>
     <Link to='/profile' style={{textDecoration:'none' , color:'#6c6c6c' ,  marginRight:'4rem', marginLeft:'-10px'}}>
      <BottomNavigationAction 
        label="Profile"
        value="profiale" 
        icon={<PermIdentityOutlinedIcon  sx={{color:'#6c6c6c', fontSize:'1.8rem'}}/>}
      />
      <Typography component='h5' variant='h5' fontSize='12px'   marginLeft='1.7rem' marginTop='-10px' >
          Profile
      </Typography>      
     </Link>
      
    </BottomNavigation>
</Paper> 
  );
}


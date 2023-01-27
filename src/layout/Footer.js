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

  <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 , zIndex:'100'}} elevation={3}>
    <BottomNavigation position="fixed"  sx={{ width: '100%' , height:'90px', top:'20rem' , zIndex:'100' }} value={value} onChange={handleChange}>
     <Link to='/'  style={{textDecoration:'none' , color:'#6c6c6c' , marginLeft:'4rem'}}>
      <BottomNavigationAction
        label="Home"
        value="home"
        icon={<OtherHousesOutlinedIcon sx={{color:'#6c6c6c', fontSize:'2rem'}}/>}
      /> 
        <Typography component='h5' variant='h5' fontSize='1rem'  marginLeft={3}  >
          Home
        </Typography>
     </Link>
     <Link to='/books' style={{textDecoration:'none' , color:'#6c6c6c' ,  marginLeft:'0.5rem'}}>
      <BottomNavigationAction
        label="Books"
        value="books"
        icon={<MenuBookOutlinedIcon sx={{color:'#6c6c6c', fontSize:'2rem' }}/>}
      />
      <Typography component='h5' variant='h5' fontSize='1rem'   marginLeft='1.5rem' >
          Books
      </Typography>
     </Link>   
     <Link to='/plan' style={{textDecoration:'none' , color:'#6c6c6c' ,  marginLeft:'0.5rem'}}>
      <BottomNavigationAction
        label="Plan"
        value="plan"
        icon={<DateRangeOutlinedIcon sx={{color:'#6c6c6c', fontSize:'2rem'}} />}
      />   
      <Typography component='h5' variant='h5' fontSize='1rem' marginLeft='2rem'>
          Plan
      </Typography>       
     </Link>
     <Link to='/profile' style={{textDecoration:'none' , color:'#6c6c6c' ,  marginRight:'3rem'}}>
      <BottomNavigationAction 
        label="Profile"
        value="profiale" 
        icon={<PermIdentityOutlinedIcon  sx={{color:'#6c6c6c', fontSize:'2rem'}}/>}
      />
      <Typography component='h5' variant='h5' fontSize='1rem'   marginLeft='1.6rem' >
          Profile
      </Typography>      
     </Link>
      
    </BottomNavigation>
</Paper> 
  );
}


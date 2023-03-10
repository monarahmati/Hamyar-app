import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import { Grid , Typography } from '@mui/material';


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
import Settings from '@mui/icons-material/Settings';





export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      dir='rtl'
      sx={{ width: anchor === 'Top' || anchor === 'bottom' ? '150px' : '210px' }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >

    <MenuItem padding={0} sx={{paddingBottom:0}}>
      <Avatar/>
    <MenuItem  sx={{marginRight: 1 , textAlign: 'left' , display:'grid' , gridColumn:"1rem"}} >
<Typography component='h7' variant='h8'>
  0918555555
</Typography>
<Typography component='h7' variant='h9' paddingTop={1}>
<Button variant='contained' disabled  Size="small" sx={{  padding:'1px'}}>
      ?????????? ????????
 </Button>
</Typography>
</MenuItem>
</MenuItem>

<Divider />

<MenuItem sx={{bgcolor:"#ffdae0"}}>
<ListItemIcon>
  <StarsIcon fontSize="medium" />
</ListItemIcon>
???????? ???????????? ????????
</MenuItem>
<MenuItem>
<ListItemIcon>
  <AddchartIcon fontSize="medium" />
</ListItemIcon>
?????????? ?????????? ??????
</MenuItem>
<MenuItem>
<ListItemIcon>
  <ViewInArIcon fontSize="medium" />
</ListItemIcon>
???????? ????????
</MenuItem>


<MenuItem>
<ListItemIcon>
  <ThreePIcon fontSize="medium" />
</ListItemIcon>
???? ???????? 
</MenuItem>
<MenuItem>
<ListItemIcon>
<AddCardIcon fontSize="medium" />
</ListItemIcon>
???????????? ????
</MenuItem>
<MenuItem>
<ListItemIcon>
  <QuestionAnswerIcon fontSize="medium" />
</ListItemIcon>
????????????????
</MenuItem>


<MenuItem>
<ListItemIcon>
  <StarRateIcon fontSize="medium" />
</ListItemIcon>
???????????? ???? ????????????
</MenuItem>
<MenuItem>
<ListItemIcon>
  <ShareIcon fontSize="medium" />
</ListItemIcon>
 ???????????? ??????????
</MenuItem>
<MenuItem>
<ListItemIcon>
  <TrackChangesIcon fontSize="medium" />
</ListItemIcon>
???? ?????? ?????????? 
</MenuItem>        
<MenuItem>
<ListItemIcon>
  <ExploreIcon fontSize="medium" />
</ListItemIcon>
?????????????? ????????????
</MenuItem>

<Divider />

<MenuItem>
<ListItemIcon>
  <Settings fontSize="medium" />
</ListItemIcon>
?????????????? 
</MenuItem>
<MenuItem>
<ListItemIcon>
  <Logout fontSize="medium" />
</ListItemIcon>
????????
</MenuItem>
    </Box>
  );

const ConvertedToString = Object.toString(<Logout/>)
console.log(ConvertedToString)

  return (
    <Grid>
      {[`${ConvertedToString}`].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </Grid>
  );
}



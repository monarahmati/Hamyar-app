import React from 'react';
import { Grid , Typography }  from '@mui/material';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InstagramIcon from '@mui/icons-material/Instagram';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DraftsIcon from '@mui/icons-material/Drafts';
import FolderSpecialIcon from '@mui/icons-material/FolderSpecial';



const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  
  

  const CardMedale = () => {
    return (
      
        
        <Grid container xs={12}>

            
                    <Typography  component='h2' variant='h6' fontSize='1rem' fontWeight={500} padding={1}>
                     با کسب تمامی مدال ها میتونین جایزه ویژه همیار زبان را درب منزل دریافت کنید.
                     پس از تکمیل مدال ها روی دکمه دریافت جایزه (در پایین صفحه ) کلیک کنید.
                    </Typography>

                    <Box sx={{ width: '100%' }}>
                        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{padding:'2rem'}}>
                             <Grid item xs={12}>
                               <Item  sx={{height:'40px' ,borderColor:'#000', bgcolor:'#e0e0e0' , display:'flex'}}>
                                <PlayArrowIcon sx={{ fontSize:'3rem' }} />
                                <Typography  textAlign='right' marginRight='1rem' >
                                  <Typography fontSize='1rem'  fontWeight={900} sx={{ color:'#000'}} >مدال امتیاز</Typography>
                                  <Typography sx={{ fontSize:'12px' , color:'#000' }}> به همیار زبان در گوگل پلی امتیاز دهید</Typography>
                                </Typography>
                               </Item>
                             </Grid>
                             <Grid item xs={12}>
                               <Item sx={{height:'40px' , bgcolor:'#e0e0e0' , display:'flex'}}>
                               <InstagramIcon sx={{ fontSize:'2.5rem' }} />
                                <Typography  textAlign='right' marginRight='1rem' >
                                  <Typography fontSize='1rem'  fontWeight={900} sx={{ color:'#000'}} >مدال شبکه اجتماعی </Typography>
                                  <Typography sx={{ fontSize:'12px' , color:'#000' }}> اینستگرام همیار زبان را دنبال کنید </Typography>
                                </Typography> 
                               </Item>
                             </Grid>
                             <Grid item xs={12}>
                               <Item sx={{height:'40px' , bgcolor:'#e0e0e0' , display:'flex'}}>
                               <AccountCircleIcon sx={{ fontSize:'2.5rem' }} />
                                <Typography  textAlign='right' marginRight='1rem' >
                                  <Typography fontSize='1rem'  fontWeight={900} sx={{ color:'#000'}} > مدال حساب کاربری </Typography>
                                  <Typography sx={{ fontSize:'12px' , color:'#000' }}> اطلاعات حساب کاربری خود را کامل کنید </Typography>
                                </Typography>
                               </Item>
                             </Grid>
                             <Grid item xs={12}>
                               <Item sx={{height:'40px' , bgcolor:'#e0e0e0' , display:'flex'}}>
                               <WorkspacePremiumIcon sx={{ fontSize:'2.5rem' }} />
                                <Typography  textAlign='right' marginRight='1rem' >
                                  <Typography fontSize='1rem'  fontWeight={900} sx={{ color:'#000'}} >  مدال سطح  A1  </Typography>
                                  <Typography sx={{ fontSize:'12px' , color:'#000' }}> سطح A1 را بگذرانید </Typography>
                                </Typography>
                               </Item>
                             </Grid>
                             <Grid item xs={12}>
                               <Item sx={{height:'40px' , bgcolor:'#e0e0e0' , display:'flex'}}>
                               <WorkspacePremiumIcon sx={{ fontSize:'2.5rem' }} />
                                <Typography  textAlign='right' marginRight='1rem' >
                                  <Typography fontSize='1rem'  fontWeight={900} sx={{ color:'#000'}} >  مدال سطح  A2  </Typography>
                                  <Typography sx={{ fontSize:'12px' , color:'#000' }}>  سطح A2 را بگذرانید  </Typography>
                                </Typography>
                               </Item>
                             </Grid>
                             <Grid item xs={12}>
                               <Item sx={{height:'40px' , bgcolor:'#e0e0e0' , display:'flex'}}>
                               <WorkspacePremiumIcon sx={{ fontSize:'2.5rem' }} />
                                <Typography  textAlign='right' marginRight='1rem' >
                                  <Typography fontSize='1rem'  fontWeight={900} sx={{ color:'#000'}} >  مدال سطح  B1  </Typography>
                                  <Typography sx={{ fontSize:'12px' , color:'#000' }}>  سطح B1 را بگذرانید  </Typography>
                                </Typography>
                               </Item>
                             </Grid>
                             <Grid item xs={12}>
                               <Item sx={{height:'40px' , bgcolor:'#e0e0e0' , display:'flex'}}>
                               <WorkspacePremiumIcon sx={{ fontSize:'2.5rem' }} />
                                <Typography  textAlign='right' marginRight='1rem' >
                                  <Typography fontSize='1rem'  fontWeight={900} sx={{ color:'#000'}} >  مدال سطح  B2 </Typography>
                                  <Typography sx={{ fontSize:'12px' , color:'#000' }}>  سطح B2 را بگذرانید </Typography>
                                </Typography>
                               </Item>
                             </Grid>
                             <Grid item xs={12}>
                               <Item sx={{height:'40px' , bgcolor:'#e0e0e0' , display:'flex'}}>
                               <WorkspacePremiumIcon sx={{ fontSize:'2.5rem' }} />
                                <Typography  textAlign='right' marginRight='1rem' >
                                  <Typography fontSize='1rem'  fontWeight={900} sx={{ color:'#000'}} >  مدال سطح  C1  </Typography>
                                  <Typography sx={{ fontSize:'12px' , color:'#000' }}>   سطح C1 را بگذرانید  </Typography>
                                </Typography>
                               </Item>
                             </Grid>
                             <Grid item xs={12}>
                               <Item sx={{height:'40px' , bgcolor:'#e0e0e0' , display:'flex'}}>
                               <WorkspacePremiumIcon sx={{ fontSize:'2.5rem' }} />
                                <Typography  textAlign='right' marginRight='1rem' >
                                  <Typography fontSize='1rem'  fontWeight={900} sx={{ color:'#000'}} >  مدال سطح  C2  </Typography>
                                  <Typography sx={{ fontSize:'12px' , color:'#000' }}>  سطح C2 را بگذرانید  </Typography>
                                </Typography>
                               </Item>
                             </Grid>
                             <Grid item xs={12}>
                               <Item sx={{height:'40px' , bgcolor:'#e0e0e0' , display:'flex'}}>
                               <DraftsIcon sx={{ fontSize:'2.5rem' }} />
                                <Typography  textAlign='right' marginRight='1rem' >
                                  <Typography fontSize='1rem'  fontWeight={900} sx={{ color:'#000'}} > مدال معرفی </Typography>
                                  <Typography sx={{ fontSize:'12px' , color:'#000' }}> همیار زبان را به 5 نفر معرفی کنید  </Typography>
                                </Typography>
                               </Item>
                             </Grid>
                             <Grid item xs={12}>
                               <Item sx={{height:'40px' , bgcolor:'#e0e0e0' , display:'flex'}}>
                               <FolderSpecialIcon sx={{ fontSize:'2.5rem' }} />
                                <Typography  textAlign='right' marginRight='1rem' >
                                  <Typography fontSize='1rem'  fontWeight={900} sx={{ color:'#000'}} > مدال اشتراک </Typography>
                                  <Typography sx={{ fontSize:'12px' , color:'#000' }}> اشتراک طلایی همیار زبان را تهیه کنید </Typography>
                                </Typography>
                               </Item>
                             </Grid>
                        </Grid>
                    </Box>
        </Grid>
    );
};

export default CardMedale;








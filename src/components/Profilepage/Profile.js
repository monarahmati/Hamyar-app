import React from 'react';
import { Grid ,
         Typography, 
         CardHeader,
         Card, 
         CardContent, 
         Avatar,
         Button} 
        from '@mui/material';
import RedeemIcon from '@mui/icons-material/Redeem';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import PersonIcon from '@mui/icons-material/Person';
import ProfileStepper from './profileStepper';
import CircularDeterminate from './LoadingProgress';
import CardMedale from './CardMedale';
import SpaIcon from '@mui/icons-material/Spa';


const Profile = () => {
    return (
        <Grid container xs={12}>
            <Grid item xs={12} sx={{paddingBottom:'15rem'}} >  
                <Card 
                    xs={12} 
                    sx={{ 
                    maxWidth: '100%' , 
                    bgcolor:'#05e900' , 
                    paddingBottom:'7rem', 
                    zIndex:'-90'
                    }}>

                    <CardContent 
                        dir='rtl'
                        paddingBottom='50rem'
                       sx={{ 
                         maxWidth: '99%',
                         width:'500px',
                         paddingTop:'5rem', 
                         bgcolor:'#05e900'
                        }}>
    
                        <CardHeader
                          avatar={<Avatar sx={{ bgcolor:'#fafafa' , padding:2}}><PersonIcon sx={{ fontSize:'4rem' , color:'#e0e0e0' }}/></Avatar>}
                          title={<Typography color='#ffff' padding={1} marginRight='1rem'>09185554433</Typography>}
                          subheader={ <Button  variant="text"   sx={{borderRadius:'5rem' , marginRight:'1rem' , bgcolor:'#fafafa' , width:'150px' ,top:'5px', justifyContent:'space-between' , '&:hover': { backgroundColor: '#e0e0e0', opacity: [0.9, 0.8, 0.7] },}}>
                                         <Typography color="#4caf50">تکمیل پروفایل </Typography>
                                         <ArrowBackIosIcon sx={{ color:"#4caf50"}}/>
                                      </Button>}
                          paddingBottom='50rem'
                        />
                    </CardContent>
                    <Card xs={12} sx={{ width: '21rem' ,margin:'10px', bgcolor:'#fafafa', alignItems:'center' , textAlign:'center', padding:'1.1rem' , zIndex:'110'}}>
                       <ProfileStepper />         
                    </Card>
                 </Card>
                 <Grid item  xs={12} spacing={1} sx={{display:'flex' , marginTop:'-2.7rem', justifyContent:'space-around' , paddingBottom:'2.5rem'}}>
                    <Card dir='rtl' sx={{ width:'8.5rem', height:'8rem' , zIndex:'180', padding:'1rem' }}>
                          <RedeemIcon sx={{ fontSize:'2.5rem' , color:"orange"}}/>
                          <Typography component='h6' variant="h6" sx={{fontWidth:'900' , fontSize:'14px'}}>
                            با معرفی دوستان خود هدیه بگیرید
                          </Typography>
                          <Button  
                          variant="text"   
                          sx={{borderRadius:'5rem' , bgcolor:'#05e900' , width:'110px',height:'25px' ,top:'5px', justifyContent:'space-between' , '&:hover': { backgroundColor: '#e0e0e0', opacity: [0.9, 0.8, 0.7] },}}>
                                <Typography color="#fafafa">کد معرفی</Typography>
                                <ArrowBackIosIcon sx={{ color:"#fafafa"}}/>
                          </Button>
                    </Card>
                    <Card dir='rtl' sx={{ width:'8.5rem', height:'8rem', zIndex:'180', padding:'1rem' }}>
                    <CircularDeterminate  sx={{ width:'5px', paddingBottom:'10px' , height:'7px' , fontSize:'1px', padding:'1px', color:"orange" , margin:'1px'}} />
                          <Typography component='h6' variant="h6" fontWeight={900} sx={{fontWidth:'900' , fontSize:'14px' , paddingBottom:'15px'}}>
                                اشتراک شما
                          </Typography>

                          <Button  
                          variant="text"   
                          sx={{borderRadius:'5rem' , bgcolor:'#05e900' , width:'110px',height:'25px' ,top:'5px', justifyContent:'space-between' , '&:hover': { backgroundColor: '#e0e0e0', opacity: [0.9, 0.8, 0.7] },}}>
                                <Typography color="#fafafa"> خرید اشتراک</Typography>
                                <ArrowBackIosIcon sx={{ color:"#fafafa"}}/>
                          </Button>
                    </Card>
                 </Grid>
                 <Card
                       xs={12} 
                       sx={{ 
                       Width: '100%' , 
                       height:'10px',
                       bgcolor:'#eeeeee' , 
                       paddingBottom:'12rem', 
                       paddingTop:'8rem',

                       }}>
                      
                      <Avatar src='../PlanPage/img/f8f474fc-5458-4a1a-8aa4-4ac0a7dc9166.jpg'/>
                       
                 </Card>
                 <Card 
                      dir='rtl'
                       xs={12}  
                       sx={{
                       margin:'1.5rem',
                       borderRadius:'2rem',
                       bgcolor:'#fafafa' ,                    
                       Width: '100%' , 
                       height:'800px',
                       paddingBottom:'15rem', 
                      }}>

                    <CardHeader 
                        sx={{bgcolor:'orange', padding:'1.2rem'}}
                        avatar={<SpaIcon sx={{color:'#fff'}}/>}
                        title={<Typography 
                          fontWeight={900} 
                          component='h3' 
                          variant='h6'  
                          color='#ffff' 
                          padding='5px' 
                          marginRight='1rem'>
                               مدال های شما 
                        </Typography>}/>
                        <CardMedale/>
                 </Card>
            </Grid>
        </Grid>        
    );
};

export default Profile;
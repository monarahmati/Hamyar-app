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
            <Grid item xs={12} sx={{paddingBottom:'10rem'}} >  
                <Card 
                    xs={12} 
                    sx={{ 
                    maxWidth: '100%' , 
                    bgcolor:'#21c405' , 
                    paddingBottom:'5rem', 
                    zIndex:'-90'
                    }}>

                    <CardContent 
                        dir='rtl'
                        paddingBottom='40rem'
                       sx={{ 
                         maxWidth: '99%',
                         width:'500px',
                         paddingTop:'5rem', 
                         bgcolor:'#21c405'
                        }}>
    
                        <CardHeader
                          avatar={<Avatar   sx={{ bgcolor:'#fafafa' , padding:'6px'}}><PersonIcon sx={{ fontSize:'3rem' , color:'#e0e0e0' }}/></Avatar>}
                          title={<Typography color='#ffff' fontSize='11px' padding='1px' marginRight='1.7rem'>09185554433</Typography>}
                          subheader={ <Button  variant="text"  sx={{borderRadius:'5rem' , height:'22px', marginRight:'1rem' , padding:'10px', bgcolor:'#fafafa' , width:'110px' ,top:'5px', justifyContent:'space-between' , '&:hover': { backgroundColor: '#e0e0e0', opacity: [0.9, 0.8, 0.7] },}}>
                                         <Typography fontSize='12px' color="#4caf50">تکمیل پروفایل </Typography>
                                         <ArrowBackIosIcon sx={{ fontSize:'12px' ,color:"#4caf50"}}/>
                                      </Button>}
                          paddingBottom='50rem'
                        />
                    </CardContent>


                    <Card 

                    xs={12} 
                    alignItems='center'
                    justifyContent='center'
                    sx={{ 
                    width: '90%' ,
                    marginX:'15px', 
                    bgcolor:'#fafafa', 
                    alignItems:'center' , 
                    textAlign:'center', 
                    paddingBottom:'2.5rem' , 
                    paddingTop:'1rem',
                    zIndex:'110'
                    }}>

                       <ProfileStepper />  
                       <Grid item sx={{paddingTop:'1rem'}} >
                       <Typography variant='p' fontSize={12} fontWeight={600} sx={{paddingTop:'1rem'}} >
                        سطح زبان شما
                        </Typography>     
                        </Grid>  
                    </Card>


                 </Card>
                 <Grid item  xs={12} spacing={2} sx={{display:'flex' , marginTop:'-1.7rem', justifyContent:'space-around' , paddingBottom:'2.5rem'}}>
                    <Card  dir='rtl' sx={{ width:'6.5rem', height:'7.5rem' , zIndex:'180', padding:'1.1rem' }}>
                          <RedeemIcon sx={{ fontSize:'1.5rem' , color:"orange"}}/>
                          <Typography  variant="h6" sx={{fontWidth:'900' , fontSize:'11px'}}>
                            با معرفی دوستان خود هدیه بگیرید
                          </Typography>
                          <Button  
                          variant="text"  
                          justifyContent='center'
                          alignItems='center' 
                          sx={{borderRadius:'5px' , padding:'7px', bgcolor:'#21c405' , width:'100%',height:'20px' ,top:'25px', justifyContent:'space-between' , '&:hover': { backgroundColor: '#e0e0e0', opacity: [0.9, 0.8, 0.7] },}}>
                                <Typography  sx={{ fontSize:'12px', color:"#fafafa"}} >کد معرفی</Typography>
                                <ArrowBackIosIcon sx={{ fontSize:'15px', color:"#fafafa"}}/>
                          </Button>
                    </Card>
                    <Card dir='rtl' sx={{ width:'6.5rem', height:'7.5rem', zIndex:'180', padding:'1.1rem' }}>
                    <CircularDeterminate  sx={{ width:'10px', paddingBottom:'10px' , height:'7px' , fontSize:'1px', padding:'1px', color:"orange" , margin:'1px'}} />
                          <Typography component='h6' variant="h6" fontWeight={900} sx={{fontWidth:'900' , fontSize:'11px' , paddingBottom:'2px'}}>
                                اشتراک شما
                          </Typography>
                          <Typography variant='h6' sx={{fontSize:'12px'}}>
                              شما اشتراکی ندارید
                          </Typography>

                          <Button  
                          variant="text"   
                          sx={{borderRadius:'5px' , bgcolor:'#21c405' , width:'100%',height:'20px' ,top:'20px', justifyContent:'space-between' , '&:hover': { backgroundColor: '#e0e0e0', opacity: [0.9, 0.8, 0.7] },}}>
                                <Typography sx={{ fontSize:'11px', color:"#fafafa"}} > خرید اشتراک</Typography>
                                <ArrowBackIosIcon sx={{ fontSize:'15px', color:"#fafafa"}}/>
                          </Button>
                    </Card>
                 </Grid>
                 <Card
                       xs={12} 
                       sx={{ 
                       Width: '100%' , 
                       height:'1px',
                       bgcolor:'#eeeeee' , 
                       paddingBottom:'5rem', 
                       paddingTop:'1rem',

                       }}>
                      
                       
                 </Card>
                 <Card 
                       dir='rtl'
                       xs={12}  
                       sx={{
                       marginTop:'1.5rem',
                       marginLeft:'0.5rem',
                       marginRight:'0.5rem',
                       borderRadius:'0.5rem',
                       bgcolor:'#fafafa' ,                    
                       Width: '100%' , 
                       height:'800px',
                       paddingBottom:'21rem', 
                      }}>

                    <CardHeader 
                        sx={{bgcolor:'orange', padding:'1rem'}}
                        avatar={<SpaIcon sx={{color:'#fff'}}/>}
                        title={<Typography 
                          fontWeight={700} 
                          // component='h5' 
                          // variant='h6'  
                          fontSize={14}
                          color='#ffff' 
                          padding='4px' 
                          marginRight='0.5rem'>
                               مدال های شما 
                        </Typography>}
                     />
                        <CardMedale/>
                 </Card>
            </Grid>
        </Grid>        
    );
};

export default Profile;
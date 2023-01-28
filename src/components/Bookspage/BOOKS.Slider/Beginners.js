import React from 'react';
import { useQuery } from '@apollo/client';
import { Grid , Card , CardActionArea , CardMedia , Typography , CardContent } from '@mui/material';
import { Swiper , SwiperSlide } from 'swiper/react';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { GET_BOOKS_SLIDER } from '../../Graphql/QuerySliderbegginers';
import { Link } from 'react-router-dom';





const Beginners = () => {
    
    
    const { loading , errors , data } = useQuery(GET_BOOKS_SLIDER);
    
    console.log(data)
    
    if(loading) return <h1>LOEDING....</h1>;
    
    if(errors) return <h1>Errors...</h1>;




    return (
        <Grid container  xs={12} paddingTop={6}>
            <Grid item xs={12} display='flex' justifyContent='space-between'> 
                <Grid item  display='flex'>
                    <KeyboardArrowLeftIcon />
                  <Link to='/zaban-app/src/components/Bookspage/BeginnersBooks.js' style={{textDecoration:'none'}}>
                    <Typography fontFamily='Aria' color='black'  sx={{ fontWidth:'900'}}>
                      همه
                    </Typography>
                  </Link>
                </Grid> 
                <Typography>
                    کتاب های  مخصوص سطح مبتدی
                </Typography>
            </Grid>
            <Grid item xs={12} paddingTop={3} > 
                <Swiper 
                className="mySwiper"
                slidesPerView={1.9}
                centeredSlides={true}
                spaceBetween={11}
                grabCursor={true}
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination]} >

                    <SwiperSlide variant={'h6'} align={'right'}>
                    <Card sx={{ maxWidth: '200px' , padding:'5px' ,  borderRadius:'13px' , height:'210px'}} >
                        <CardActionArea>
                            <CardMedia
                                sx={{ borderRadius:'20px'}}
                                component="img"
                                width="200px"
                                height="140px"
                                image=  "https://media.graphassets.com/7zuFZLbnRvSaJoXPaoN3"
                                alt="image1"
                            />
                               <CardContent>
                                   <Typography component='h4' variant='h8' color="black">
                                     {data.beginners[0].bookname}
                                   </Typography>
                                   <Typography paddingY={1} component='h3' variant='p' color="text.secondary">
                                     {data.beginners[0].author}
                                   </Typography>
                               </CardContent>
                        </CardActionArea>
                    </Card>
                    </SwiperSlide>
                    <SwiperSlide   variant={'h6'} align={'right'}>
                    <Card sx={{ maxWidth: '200px' , padding:'5px'  ,  borderRadius:'13px'  , height:'210px' }}>
                        <CardActionArea >
                            <CardMedia 
                                 
                                sx={{ borderRadius:'20px' }}               
                                component="img"
                                width="200px"
                                height="140px"
                                image= "https://media.graphassets.com/uS2tEV9ROGif2YrxZ4Bh"
                                alt="image2"
                            />
                               <CardContent paddingTop='1px'>
                                   <Typography paddingBottom='5px' component='h4' variant='h8' color="black">
                                     {data.beginners[1].bookname}
                                   </Typography>
                                   <Typography paddingBottom={1} component='h3' variant='p' color="text.secondary">
                                     {data.beginners[1].author}
                                   </Typography>
                               </CardContent>
                        </CardActionArea>
                    </Card>
                    </SwiperSlide>
                    <SwiperSlide   variant={'h6'} align={'right'}>
                    <Card sx={{ maxWidth: '200px' , padding:'5px'  ,  borderRadius:'13px'  , height:'220px'}}>
                        <CardActionArea>
                            <CardMedia
                                sx={{ borderRadius:'20px'}}
                                component="img"
                                width="100px"
                                height="150px"
                                image="https://media.graphassets.com/uwXyOWYwQeamOJC4VYlR"
                                alt="image3"
                            />
                               <CardContent>
                                   <Typography component='h4' variant='h8' color="black">
                                     {data.beginners[2].bookname}
                                   </Typography>
                                   <Typography paddingTop={1} component='h3' variant='p' color="text.secondary">
                                     {data.beginners[2].author}
                                   </Typography>
                               </CardContent>
                        </CardActionArea>
                    </Card>
                    </SwiperSlide>
                    <SwiperSlide   variant={'h6'} align={'right'}  >
                    <Card sx={{ maxWidth: '150px' , padding:'5px'  ,  borderRadius:'13px'  , height:'210px'}}>
                        <CardActionArea>
                            <CardMedia
                                sx={{ borderRadius:'20px'}}
                                component="img"
                                width="100px"
                                height="150px"
                                image="https://media.graphassets.com/6tQ6v6aTSmeva2ZAj6Uc"
                                alt="image3"
                            />
                               <CardContent>
                                   <Typography component='h4' variant='p' color="black">
                                     {data.beginners[3].bookname}
                                   </Typography>
                                   <Typography paddingTop={1} component='h3' variant='p' color="text.secondary">
                                     {data.beginners[3].author}
                                   </Typography>
                               </CardContent>
                        </CardActionArea>
                    </Card>
                    </SwiperSlide>
                    <SwiperSlide   variant={'h6'} align={'right'}>
                    <Card sx={{ maxWidth: '400px'  , padding:'5px'  ,  borderRadius:'13px'  , height:'210px'}}>
                        <CardActionArea>
                            <CardMedia
                                sx={{ borderRadius:'20px'}}
                                component="img"
                                width="400px"
                                height="150px"
                                image= "https://media.graphassets.com/3pdp35qReov3YUmKYz9A"
                                alt="image3"
                            />
                               <CardContent>
                                   <Typography component='h5' variant='p' color="black">
                                     {data.beginners[4].bookname}
                                   </Typography>
                                   <Typography paddingTop='2px' component='h3' variant='p' color="text.secondary">
                                     {data.beginners[4].author}
                                   </Typography>
                               </CardContent>
                        </CardActionArea>
                      </Card>
                    </SwiperSlide> 
                </Swiper>
            </Grid>
        </Grid>
    );
};

export default Beginners;

import React from 'react';
import { useQuery } from '@apollo/client';
import { Grid , Card , CardActionArea , CardMedia , Typography , CardContent } from '@mui/material';
import { Swiper , SwiperSlide } from 'swiper/react';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import "swiper/css";
import { Link } from 'react-router-dom';
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { GET_SLIDER_MEDIUMS } from '../../Graphql/QuerySlidermediums';
// import MediumsBooks from '../MediumsBooks';




const Mediums = () => {
    
    const { loading , errors , data } = useQuery(GET_SLIDER_MEDIUMS);
    

    console.log(data)
    
    if(loading) return <h1>LOEDING....</h1>;
    
    if(errors) return <h1>Errors...</h1>;



    return (
        <Grid container  xs={12} paddingTop={12}>
            <Grid item xs={12} display='flex' justifyContent='space-between'> 
                <Grid item display='flex'>
                    <KeyboardArrowLeftIcon/>
                    <Link to={`/books/${data.mediums}`} style={{textDecoration:'none' , color:'black'}}>
                    <Typography fontFamily='Aria' sx={{ fontWidth:'900'}}>
                        همه
                    </Typography>
                    </Link>
                </Grid> 
                <Typography>
                    کتاب های  مخصوص سطح متوسط
                </Typography>
            </Grid>
            <Grid item xs={12} paddingTop={3} > 
                <Swiper 
                className="mySwiper"
                slidesPerView={2}
                centeredSlides={true}
                spaceBetween={30}
                grabCursor={true}
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination]} >

                    <SwiperSlide variant={'h1'} align={'right'}>
                    <Card sx={{ maxWidth: '200px'  , padding:'1rem' ,  borderRadius:'13px'}} >
                        <CardActionArea>
                            <CardMedia
                                sx={{ borderRadius:'20px'}}
                                component="img"
                                width="200px"
                                height="240px"
                                image="https://media.graphassets.com/XRZqYJDQQrCKkFZcqnfj"
                                alt="image1"
                            />
                               <CardContent>
                                   <Typography component='h3' variant='h8' color="black">
                                     {data.mediums[0].bookname}
                                   </Typography>
                                   <Typography paddingTop={1} component='h3' variant='p' color="text.secondary">
                                     {data.mediums[0].author}
                                   </Typography>
                               </CardContent>
                        </CardActionArea>
                    </Card>
                    </SwiperSlide>
                    <SwiperSlide   variant={'h6'} align={'right'}>
                    <Card sx={{ maxWidth: '200px' , padding:'1rem'  ,  borderRadius:'13px'  }}>
                        <CardActionArea >
                            <CardMedia 
                                sx={{ borderRadius:'20px'}}               
                                component="img"
                                width="200px"
                                height="240px"
                                image="https://media.graphassets.com/LfroXNQlTOiRywHG416p"
                                alt="image2"
                            />
                               <CardContent>
                                   <Typography component='h4' variant='h8' color="black">
                                     {data.mediums[1].bookname}
                                   </Typography>
                                   <Typography paddingTop={1} component='h3' variant='p' color="text.secondary">
                                     {data.mediums[1].author}
                                   </Typography>
                               </CardContent>
                        </CardActionArea>
                    </Card>
                    </SwiperSlide>
                    <SwiperSlide   variant={'h6'} align={'right'}>
                    <Card sx={{ maxWidth: '200px' , padding:'1rem'  ,  borderRadius:'13px' }}>
                        <CardActionArea>
                            <CardMedia
                                sx={{ borderRadius:'20px'}}
                                component="img"
                                width="200px"
                                height="240px"
                                image="https://media.graphassets.com/5gxCVkNkRVO4fLDeYTXe"
                                alt="image3"
                            />
                               <CardContent>
                                   <Typography component='h3' variant='h8' color="black">
                                     {data.mediums[2].bookname}
                                   </Typography>
                                   <Typography paddingTop={2} component='h3' variant='p' color="text.secondary">
                                     {data.mediums[2].author}
                                   </Typography>
                               </CardContent>
                        </CardActionArea>
                    </Card>
                    </SwiperSlide>
                    <SwiperSlide   variant={'h6'} align={'right'}>
                    <Card sx={{ maxWidth: '200px' , padding:'1rem'  ,  borderRadius:'13px' }}>
                        <CardActionArea>
                            <CardMedia
                                sx={{ borderRadius:'20px'}}
                                component="img"
                                width="200px"
                                height="240px"
                                image="https://media.graphassets.com/q4mwSvoFTnilNOWLxiXJ"
                                alt="image3"
                            />
                               <CardContent>
                                   <Typography component='h3' variant='p' color="black">
                                     {data.mediums[3].bookname}
                                   </Typography>
                                   <Typography paddingTop={2} component='h3' variant='p' color="text.secondary">
                                     {data.mediums[3].author}
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

export default Mediums;
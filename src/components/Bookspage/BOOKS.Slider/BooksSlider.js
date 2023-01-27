import React from 'react';
import { Grid , Card , CardActionArea , CardMedia } from '@mui/material';
import { Swiper , SwiperSlide } from 'swiper/react';
import "swiper/css";


const BooksSlider = () => {



    return (

        <Grid container xs={12}>
            <Grid item xs={12} paddingTop={6}>
               <Swiper className="mySwiper">
                    <SwiperSlide align='center' width='100%'>
                    <Card sx={{ maxWidth: '500px' }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                width="500px"
                                height="250px"
                                image="https://media.graphassets.com/tyx0skPaS8uOsbplbZof"
                                alt="image1"
                            />
                        </CardActionArea>
                    </Card>
                    </SwiperSlide>
                    <SwiperSlide   variant={'h6'} align={'center'}>
                    <Card sx={{ maxWidth: '500px' }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                width="500px"
                                height="250px"
                                image="https://media.graphassets.com/SuzVB1MtQ5WE7P2V1W4B"
                                alt="image2"
                            />
                        </CardActionArea>
                    </Card>
                    </SwiperSlide>
                    <SwiperSlide   variant={'h6'} align={'center'}>
                    <Card sx={{ maxWidth: '500px' }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                width="500px"
                                height="250px"
                                image="https://media.graphassets.com/6xv9lX2GQAt54fPmS8ZL"
                                alt="image3"
                                />
                        </CardActionArea>
                    </Card>
                    </SwiperSlide>
                </Swiper>
            </Grid>
        </Grid>

    );
};

export default BooksSlider;
import React from 'react';
import {Grid } from '@mui/material'
import BooksSlider from './BOOKS.Slider/BooksSlider';
import Beginners from './BOOKS.Slider/Beginners';
import Mediums from './BOOKS.Slider/Mediums';
import Advanced from './BOOKS.Slider/Advanced';



const Books = () => {
    return (
        <Grid container xs={12} bgcolor='#f4f4f4'>
            <Grid item xs={12} >

                <BooksSlider/>
                <Beginners/>
                <Mediums/>
                <Advanced/>
                
            </Grid>
        </Grid>
    );
};

export default Books;
import React from 'react';
import {Container, Grid, Typography} from '@mui/material';
import A1Lessons from '../Lessons/A1Lessons';
// import A2Lessons from '../A2Lessons';
// import B1Lessons from '../B1Lessons.js';
// import B2Lessons from '../B2Lessons';
// import C1Lessons from '../C1Lessons';
// import C2Lessons from '../C2Lessons'






const HomePage = () => {
    return (
        <Container maxWidth='lg'>
        <Grid container xs={12}  padding='1px' margin='1px' bgcolor='#fff'>
            <Grid item xs={12} md='-10rem' mt={4}>
                <Typography component='h5' variant='h6' mb={1} mt={5} fontWeight={900} fontSize={12} textAlign='left'>
                    A1 - Lessons
                </Typography>
                <A1Lessons/>
            </Grid>
            <Grid item xs={12} md={3} mt={4}>
                <Typography component='h3' variant='h5' mb={1} fontWeight={900} fontSize={12}   textAlign='left'>
                    A2 - Lessons
                </Typography>
                <A1Lessons/>
            </Grid>
            <Grid item xs={12} md={3} mt={4}>
                <Typography component='h3' variant='h5' mb={1} fontWeight={900} fontSize={12}   textAlign='left'>
                    B1 - Lessons
                </Typography>
                <A1Lessons/>
            </Grid>
            <Grid item xs={12} md={3} mt={4}>
                <Typography component='h6' variant='h5' mb={1} fontWeight={900} fontSize={12}   textAlign='left'>
                    B2 - Lessons
                </Typography>
                <A1Lessons/>
            </Grid>
            <Grid item xs={12} md={3} mt={4}>
                <Typography component='h3' variant='h5' mb={1} fontWeight={900} fontSize={12}  textAlign='left' >
                    C1 - Lessons
                </Typography>
                <A1Lessons/>
            </Grid>
            <Grid item xs={12} md={3} mt={4}>
                <Typography component='h3' variant='h5' mb={1} fontWeight={900}  fontSize={12}  textAlign='left'>
                    C2 - Lessons
                </Typography>
                <A1Lessons/>
            </Grid>
        </Grid>
     </Container>
    );
};

export default HomePage;
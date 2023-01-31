import React from 'react';
import { Grid, Typography} from '@mui/material';
import Lessens from '../Lessons/Lessens';
import LessonA1 from '../Lessons/LessonA1';
import CircularStatic from '../Lessons/Loading'





const HomePage = () => {
    return (

        <Grid container xs={12}  maxWidth='100%' padding='-2rem' bgcolor='#f5f5f5'>
            <Grid item xs={12} md='-10rem' mt={3} bgcolor='#ffff'>
                <Grid item display='flex'  mt={7} justifyContent='space-between' paddingX={1}>
                    <Typography component='h5' variant='h6' mb={1}  fontWeight={700} fontSize={12} textAlign='left'>
                        A1 - Starter
                    </Typography>
                    <Typography>
                        <CircularStatic/>
                    </Typography>
                </Grid>

                <LessonA1/>
            </Grid>
            <Grid item xs={12} md={3} mt={4} >
              <Grid item display='flex' justifyContent='space-between' paddingX={1} >
                <Typography component='h5' variant='h6' mb={1} fontWeight={900} fontSize={12}   textAlign='left'>
                    A2 - Elementary
                </Typography>
                <Typography>
                        <CircularStatic/>
                </Typography>
              </Grid>  
                <Lessens />
            </Grid>
            <Grid item xs={12} md={3} mt={4}>
              <Grid item display='flex'   justifyContent='space-between' paddingX={1}>
                <Typography component='h5' variant='h6' mb={1} fontWeight={700} fontSize={12}   textAlign='left'>
                    B1 - Intermediate
                </Typography>
                <Typography>
                        <CircularStatic/>
                </Typography>
              </Grid>
                <Lessens />
            </Grid>
            <Grid item xs={12} md={3} mt={4}>
              <Grid item display='flex' justifyContent='space-between' paddingX={1}>

                <Typography component='h5' variant='h6' mb={1} fontWeight={700} fontSize={12}   textAlign='left'>
                    B2 - Upper intermediate
                </Typography>
                <Typography>
                        <CircularStatic/>
                </Typography>
              </Grid>
                <Lessens/>
            </Grid>
            <Grid item xs={12} md={3} mt={4}>
                <Grid item display='flex'   justifyContent='space-between' paddingX={1}>
                <Typography component='h5' variant='h6' mb={1} fontWeight={700} fontSize={12}  textAlign='left' >
                    C1 - Expert
                </Typography>
                <Typography>
                        <CircularStatic/>
                </Typography>
                </Grid>
                <Lessens/>
            </Grid>
            <Grid item xs={12} md={3} mt={4} mb={12}>
                <Grid item display='flex'  justifyContent='space-between' paddingX={1}>

                <Typography component='h5' variant='h6' mb={1} fontWeight={700}  fontSize={12}  textAlign='left'>
                    C2 - Mastery
                </Typography>
                <Typography>
                        <CircularStatic/>
                </Typography>
                </Grid>
                <Lessens/>
            </Grid>
        </Grid>

    );
};

export {HomePage};
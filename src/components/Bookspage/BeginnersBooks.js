import React from 'react';
import { Grid ,Typography } from '@mui/material';

const BeginnersBooks = () => {
    return (
        <Grid container xs={12} paddingTop={20}>
            <Grid item xs={12} paddingTop={18}>
              <Typography component='h1' variant='h1'>
                BeginnersBooks
              </Typography>
            </Grid>
        </Grid>
    );
};

export default BeginnersBooks;
import React from 'react';
import { Grid , Card ,  CardActionArea , CardMedia , Button } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';


const Plan = () => {
    return (


           <Grid container xs={12} >
              <Grid item  xs={12} paddingTop={10}>
                    <Card sx={{ maxWidth: '100%' }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                width="500px"
                                height="350px"
                                image='./img/f8f474fc-5458-4a1a-8aa4-4ac0a7dc9166.png'
                                alt="image1"
                                />
                        </CardActionArea>
                    </Card>


                    <Button 
                    variant="contained" 
                    startIcon={<ArrowBackIosIcon />}  
                    sx={{
                        width:'60%',
                        top:"2rem",
                        justifyContent:'space-between', 
                        alignItems:'center',
                        bgcolor:'#00fc04', 
                        left:'7rem'}}>
                            شروع برنامه ریزی 
                    </Button>
              </Grid>
           </Grid>
           
           
           )
};

export default Plan;
import React from 'react';
import { Grid , Card ,  CardActionArea , CardMedia , Button, Typography } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { GET_PLAN_QUERY } from '../Graphql/QueryPlan';
import { useQuery } from '@apollo/client';



const Plan = () => {
    
            const {loading , errors , data} = useQuery(GET_PLAN_QUERY);
    
            console.log(data);  
            
            if (loading) return <h3>LOADING...</h3>;
            
            if (errors) return <h3>ERRORS....</h3>;



    return (

           <Grid container xs={12} >
              <Grid item  xs={12} paddingTop={8} >
                    <Card sx={{ maxWidth: '100%' , boxShadow:"rgba(0,0,0,0.0) 0px 4px 13px"}}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                width="500px"
                                height="150px"
                                image= "https://media.graphassets.com/HVuCS1TvmcQAsgRqkQQM"
                                alt="image1"
                                />
                        </CardActionArea>
                    </Card>
                    <Grid dir='rtl' align='center'>

                    <Typography variant='p' fontSize={14} fontWeight='700' paddingBottom={3}>
                        سیستم برنامه ریزی هوشمند
                    </Typography>
                    <br/>
                    <Typography variant='h6' fontSize={13} padding={1} >
                          در این بخش میتونی باتوجه به زمانت برنامه روزانه از همیارزبان
                          بگیری و پیشرفت کنی . برنامه ای که فقط مخصوص خودته و بر
                          اساس اهدافت چیده شده.
                          کافیه شروع کنی!
                    </Typography>
                    </Grid>

                    <Button 
                    variant="contained" 
                    startIcon={<ArrowBackIosIcon />}  
                    sx={{
                        margin:'0.9rem',
                        width:'85%',
                        top:"0.5rem",
                        justifyContent:'space-between', 
                        alignItems:'center',
                        bgcolor:'#33cb18', 
                        }}>
                            شروع برنامه ریزی 
                    </Button>
              </Grid>
           </Grid>
           
           
           )
};

export default Plan;
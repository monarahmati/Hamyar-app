import React from 'react';
import { useQuery } from '@apollo/client';
import {GET_LESSONS_INFO} from '../Graphql/QueryAlessons'
import { Avatar, Grid, Typography ,Divider } from '@mui/material';
import { Link } from 'react-router-dom';





const A1Lessons = () => {


    const {loading , errors , data} = useQuery(GET_LESSONS_INFO);

    console.log(data);  
    
    if (loading) return <h3>LOADING...</h3>
    
    if (errors) return <h3>ERRORS....</h3>
    


    const {a1Lessons} = data;

    return (
        <Grid  container sx={{boxShadow:"rgba(0,0,0,0.4) 0px 8px 13px" , borderRadius: 4 ,  margin:'10px'}} >
        {a1Lessons.map((a1Lessons) => (
            <React.Fragment key={a1Lessons.id}>

            <Grid item xs={12} padding={1}> 
                <Link 
                to={`/Lessons/${a1Lessons.slug}`} 
                style={{
                    display: "flex" , 
                    alignItems: "center" , 
                    textDecoration:"none"
                    }}>
                    
                <Avatar src={a1Lessons.coverphoto} sx={{marginRight: 2 , borderRadius: 2 }}/>
                <Grid item xs={12} sx={{  textAlign: 'left' }} >
                <Typography component='h4' variant='p' color='black' >
                    {a1Lessons.lesson}
                </Typography>
                <Typography component='h5' variant='p' color="text.secondary" sx={{marginRight: 1 }}>
                    {a1Lessons.field}
                </Typography>
                </Grid>
                </Link>
            </Grid>
           
            <Grid item xs={12}>
                <Divider variant="middle" />
            </Grid>
        
            </React.Fragment>
        )) }
    </Grid>
    );
};

export default A1Lessons;
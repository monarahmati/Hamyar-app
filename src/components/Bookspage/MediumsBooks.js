import React from 'react';
import { useQuery } from '@apollo/client';
import { Grid , Card , CardActionArea , CardMedia , Typography , CardContent} from '@mui/material';
import { GET_SLIDER_MEDIUMS } from '../Graphql/QuerySlidermediums';



const MediumsBooks = () => {

    const { loading , errors , data } = useQuery(GET_SLIDER_MEDIUMS);
    

    console.log(data)
    
    if(loading) return <h1>LOEDING....</h1>;
    
    if(errors) return <h1>Errors...</h1>;



    return (
        <Grid container xs={12}>
            <Grid item xs={12} paddingTop={18}>
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
            </Grid>
        </Grid>
    );
};

export default MediumsBooks;
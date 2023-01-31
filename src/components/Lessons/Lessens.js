import React from 'react';
import { useQuery } from '@apollo/client';
import {GET_LESSONS_INFO} from '../Graphql/QueryAlessons'
import { Avatar, Grid, Typography ,Divider } from '@mui/material';
import { Link } from 'react-router-dom';
import CustomizedProgressBars from './Plessons'





const Lessens = () => {


    const {loading , errors , data} = useQuery(GET_LESSONS_INFO);

    console.log(data);  
    
    if (loading) return <h3>LOADING...</h3>;
    
    if (errors) return <h3>ERRORS....</h3>;
    


    const {a1Lessons} = data;

    return (
        <Grid  container sx={{boxShadow:"rgba(0,0,0,0.1) 0px 8px 13px" , borderRadius: 2 ,  margin:'1px' , padding:'1px'}} bgcolor='#ffff'>

            <Grid item xs={12} padding={1}> 
                <Link 
                to={`/Lessons/${a1Lessons[0].slug}`} 
                style={{
                    display: "flex" , 
                    alignItems: "center" , 
                    textDecoration:"none"
                    }}>
                    
                        <Avatar src={"https://media.graphassets.com/PIWBx4IcTO2gWPFmuQfe"} sx={{marginRight: 2 , borderRadius: 2 , size:'small'}}/>
                        <Grid item xs={12} sx={{  textAlign: 'left' }} >
                        <Typography component='h5' variant='p' color='text.secondary' fontSize='12px' >
                            {a1Lessons[0].lesson}
                        </Typography>
                        <Typography component='h6' variant='p' paddingTop='5px' color="black" sx={{marginRight: 1 }}>
                            {a1Lessons[0].field}
                        </Typography>
                    <Typography paddingTop='10px' >
                    <CustomizedProgressBars  />
                    </Typography>
                        </Grid>
                </Link>
            </Grid>

            <Grid item xs={12}>
                <Divider variant="middle" />
            </Grid>

                
            <Grid item xs={12} padding={1}> 
                <Link 
                to={`/Lessons/${a1Lessons[1].slug}`} 
                style={{
                    display: "flex" , 
                    alignItems: "center" , 
                    textDecoration:"none"
                    }}>
                    
                        <Avatar src={ "https://media.graphassets.com/QYzDQQfURMebrubntyec"} sx={{marginRight: 2 , borderRadius: 2 , size:'small'}}/>
                        <Grid item xs={12} sx={{  textAlign: 'left' }} >
                        <Typography component='h5' variant='p' color='text.secondary' fontSize='12px' >
                            {a1Lessons[1].lesson}
                        </Typography>
                        <Typography component='h6' variant='p' paddingTop='5px' color="black" sx={{marginRight: 1 }}>
                            {a1Lessons[1].field}
                        </Typography>
                    <Typography paddingTop='10px' >
                    <CustomizedProgressBars  />
                    </Typography>
                        </Grid>
                </Link>
            </Grid>
            <Grid item xs={12}>
                <Divider variant="middle" />
            </Grid>
                
            <Grid item xs={12} padding={1}> 
                <Link 
                to={`/Lessons/${a1Lessons[2].slug}`} 
                style={{
                    display: "flex" , 
                    alignItems: "center" , 
                    textDecoration:"none"
                    }}>
                    
                        <Avatar src={"https://media.graphassets.com/FGbJfu8SCbtbz7ZctywO"} sx={{marginRight: 2 , borderRadius: 2 , size:'small'}}/>
                        <Grid item xs={12} sx={{  textAlign: 'left' }} >
                        <Typography component='h5' variant='p' color='text.secondary' fontSize='12px' >
                            {a1Lessons[2].lesson}
                        </Typography>
                        <Typography component='h6' variant='p' paddingTop='5px' color="black" sx={{marginRight: 1 }}>
                            {a1Lessons[2].field}
                        </Typography>
                    <Typography paddingTop='10px' >
                    <CustomizedProgressBars  />
                    </Typography>
                        </Grid>
                </Link>
            </Grid>
            <Grid item xs={12}>
                <Divider variant="middle" />
            </Grid>
                
            <Grid item xs={12} padding={1}> 
                <Link 
                to={`/Lessons/${a1Lessons[3].slug}`} 
                style={{
                    display: "flex" , 
                    alignItems: "center" , 
                    textDecoration:"none"
                    }}>
                    
                        <Avatar src={"https://media.graphassets.com/TgCUPvibTKiYnhfHClev"} sx={{marginRight: 2 , borderRadius: 2 , size:'small'}}/>
                        <Grid item xs={12} sx={{  textAlign: 'left' }} >
                        <Typography component='h5' variant='p' color='text.secondary' fontSize='12px' >
                            {a1Lessons[3].lesson}
                        </Typography>
                        <Typography component='h6' variant='p' paddingTop='5px' color="black" sx={{marginRight: 1 }}>
                            {a1Lessons[3].field}
                        </Typography>
                    <Typography paddingTop='10px' >
                    <CustomizedProgressBars  />
                    </Typography>
                        </Grid>
                </Link>
            </Grid>
            <Grid item xs={12}>
                <Divider variant="middle" />
            </Grid>

                
            <Grid item xs={12} padding={1}> 
                <Link 
                to={`/Lessons/${a1Lessons[4].slug}`} 
                style={{
                    display: "flex" , 
                    alignItems: "center" , 
                    textDecoration:"none"
                    }}>
                    
                        <Avatar src={"https://media.graphassets.com/tSwshl7nSejCh6hAUrcJ"} sx={{marginRight: 2 , borderRadius: 2 , size:'small'}}/>
                        <Grid item xs={12} sx={{  textAlign: 'left' }} >
                        <Typography component='h5' variant='p' color='text.secondary' fontSize='12px' >
                            {a1Lessons[4].lesson}
                        </Typography>
                        <Typography component='h6' variant='p' paddingTop='5px' color="black" sx={{marginRight: 1 }}>
                            {a1Lessons[4].field}
                        </Typography>
                    <Typography paddingTop='10px' >
                    <CustomizedProgressBars  />
                    </Typography>
                        </Grid>
                </Link>
            </Grid>
            <Grid item xs={12}>
                <Divider variant="middle" />
            </Grid>
                
            <Grid item xs={12} padding={1}> 
                <Link 
                to={`/Lessons/${a1Lessons[5].slug}`} 
                style={{
                    display: "flex" , 
                    alignItems: "center" , 
                    textDecoration:"none"
                    }}>
                    
                        <Avatar src={ "https://media.graphassets.com/eCnH0bUbTL6Ad2ScS0pE"} sx={{marginRight: 2 , borderRadius: 2 , size:'small'}}/>
                        <Grid item xs={12} sx={{  textAlign: 'left' }} >
                        <Typography component='h5' variant='p' color='text.secondary' fontSize='12px' >
                            {a1Lessons[5].lesson}
                        </Typography>
                        <Typography component='h6' variant='p' paddingTop='5px' color="black" sx={{marginRight: 1 }}>
                            {a1Lessons[5].field}
                        </Typography>
                    <Typography paddingTop='10px' >
                    <CustomizedProgressBars  />
                    </Typography>
                        </Grid>
                </Link>
            </Grid>
            <Grid item xs={12}>
                <Divider variant="middle" />
            </Grid>
                
            <Grid item xs={12} padding={1}> 
                <Link 
                to={`/Lessons/${a1Lessons[6].slug}`} 
                style={{
                    display: "flex" , 
                    alignItems: "center" , 
                    textDecoration:"none"
                    }}>
                    
                        <Avatar src={"https://media.graphassets.com/L8KUrApWS9ygbcPFireo"} sx={{marginRight: 2 , borderRadius: 2 , size:'small'}}/>
                        <Grid item xs={12} sx={{  textAlign: 'left' }} >
                        <Typography component='h5' variant='p' color='text.secondary' fontSize='12px' >
                            {a1Lessons[6].lesson}
                        </Typography>
                        <Typography component='h6' variant='p' paddingTop='5px' color="black" sx={{marginRight: 1 }}>
                            {a1Lessons[6].field}
                        </Typography>
                    <Typography paddingTop='10px' >
                    <CustomizedProgressBars  />
                    </Typography>
                        </Grid>
                </Link>
            </Grid>
            <Grid item xs={12}>
                <Divider variant="middle" />
            </Grid>
                
            <Grid item xs={12} padding={1}> 
                <Link 
                to={`/Lessons/${a1Lessons[7].slug}`} 
                style={{
                    display: "flex" , 
                    alignItems: "center" , 
                    textDecoration:"none"
                    }}>
                    
                        <Avatar src={"https://media.graphassets.com/Fm0LlaXLSImPTH0PpsGw"} sx={{marginRight: 2 , borderRadius: 2 , size:'small'}}/>
                        <Grid item xs={12} sx={{  textAlign: 'left' }} >
                        <Typography component='h5' variant='p' color='text.secondary' fontSize='12px' >
                            {a1Lessons[7].lesson}
                        </Typography>
                        <Typography component='h6' variant='p' paddingTop='5px' color="black" sx={{marginRight: 1 }}>
                            {a1Lessons[7].field}
                        </Typography>
                    <Typography paddingTop='10px' >
                    <CustomizedProgressBars  />
                    </Typography>
                        </Grid>
                </Link>
            </Grid>
            <Grid item xs={12}>
                <Divider variant="middle" />
            </Grid>
                
            <Grid item xs={12} padding={1}> 
                <Link 
                to={`/Lessons/${a1Lessons[8].slug}`} 
                style={{
                    display: "flex" , 
                    alignItems: "center" , 
                    textDecoration:"none"
                    }}>
                    
                        <Avatar src={ "https://media.graphassets.com/g1xenfHfSv2ZqMUd7wxG"} sx={{marginRight: 2 , borderRadius: 2 , size:'small'}}/>
                        <Grid item xs={12} sx={{  textAlign: 'left' }} >
                        <Typography component='h5' variant='p' color='text.secondary' fontSize='12px' >
                            {a1Lessons[8].lesson}
                        </Typography>
                        <Typography component='h6' variant='p' paddingTop='5px' color="black" sx={{marginRight: 1 }}>
                            {a1Lessons[8].field}
                        </Typography>
                    <Typography paddingTop='10px' >
                    <CustomizedProgressBars  />
                    </Typography>
                        </Grid>
                </Link>
            </Grid>
            <Grid item xs={12}>
                <Divider variant="middle" />
            </Grid>

                            
            <Grid item xs={12} padding={1}> 
                <Link 
                to={`/Lessons/${a1Lessons[9].slug}`} 
                style={{
                    display: "flex" , 
                    alignItems: "center" , 
                    textDecoration:"none"
                    }}>
                    
                        <Avatar src={ "https://media.graphassets.com/9cpCnRJS5mJcj2egSDXg"} sx={{marginRight: 2 , borderRadius: 2 , size:'small'}}/>
                        <Grid item xs={12} sx={{  textAlign: 'left' }} >
                        <Typography component='h5' variant='p' color='text.secondary' fontSize='10px' >
                            {a1Lessons[9].lesson}
                        </Typography>
                        <Typography component='h6' variant='p' fontSize={9} paddingTop='5px' color="black" sx={{marginRight: 1 }}>
                            {a1Lessons[9].field}
                        </Typography>
                    <Typography paddingTop='10px' >
                    <CustomizedProgressBars  />
                    </Typography>
                        </Grid>
                </Link>
            </Grid>
    </Grid>
    );
};

export default Lessens;
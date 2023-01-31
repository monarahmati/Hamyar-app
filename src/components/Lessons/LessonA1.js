import React from 'react';
import { useQuery } from '@apollo/client';
import {GET_LESSONS_INFO} from '../Graphql/QueryAlessons'
import { Avatar, Grid, Typography ,Divider, Card, CardHeader } from '@mui/material';
import { Link } from 'react-router-dom';
import CustomizedProgressBars from './Plessons'







const LessonA1 = () => {

    
    const {loading , errors , data} = useQuery(GET_LESSONS_INFO);

    console.log(data);  
    
    if (loading) return <h3>LOADING...</h3>;
    
    if (errors) return <h3>ERRORS....</h3>;

    const {a1Lessons} = data;

    return (

        <Card  width='100%'   sx={{boxShadow:"rgba(0,0,0,0.1) 0px 8px 13px" , borderRadius: 2 , width:'100%'  }} >

           <CardHeader 
            fontSize='1px'
            sx={{bgcolor:'#f0f0ef', padding:'0.5rem' , fontSize:'1px'}}
            // avatar={<CircularStatic padding='10px' margin='50px' fontSize='5px'/>}
            // avatar={`Lesson 0`}
            title={<Typography variant="p" fontSize='10px' color='#818080' align='left'>Lesson 0</Typography>}
            avatar={<Typography variant="p" fontSize='11px' color='#252525' marginLeft='22px'>Alaphbet</Typography>}
            />
        <Grid item xs={12} padding={1}> 

            <Link 
            to={`/Lessons/${a1Lessons[0].slug}`} 
            style={{
                display: "flex" , 
                alignItems: "center" , 
                textDecoration:"none"
                }}>
                
                    <Avatar src={"https://media.graphassets.com/PIWBx4IcTO2gWPFmuQfe"} sx={{marginRight: 1,  borderRadius: 2 , size:'small'}}/>
                    <Grid item xs={12} sx={{  textAlign: 'left',}} >
                    <Typography component='h5' variant='p' color='text.secondary' fontSize='10px' >
                        {a1Lessons[0].lesson}
                    </Typography>
                    <Typography component='h6' variant='p' paddingTop='5px' color='#252424' sx={{marginRight: 1 }}>
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
                
                    <Avatar src={ "https://media.graphassets.com/QYzDQQfURMebrubntyec"} sx={{marginRight: 1 , borderRadius: 2 , size:'small'}}/>
                    <Grid item xs={12} sx={{  textAlign: 'left' }} >
                    <Typography component='h5' variant='p' color='text.secondary' fontSize='11px' >
                        {a1Lessons[1].lesson}
                    </Typography>
                    <Typography component='h6' variant='p' paddingTop='5px' color="#252424" sx={{marginRight: 1 }}>
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
                
                    <Avatar src={"https://media.graphassets.com/FGbJfu8SCbtbz7ZctywO"} sx={{marginRight: 1 , borderRadius: 2 , size:'small'}}/>
                    <Grid item xs={12} sx={{  textAlign: 'left' }} >
                    <Typography component='h5' variant='p' color='text.secondary' fontSize='11px' >
                        {a1Lessons[2].lesson}
                    </Typography>
                    <Typography component='h6' variant='p' paddingTop='5px' color="#252424" sx={{marginRight: 1 }}>
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
                
                    <Avatar src={"https://media.graphassets.com/TgCUPvibTKiYnhfHClev"} sx={{marginRight: 1 , borderRadius: 2 , size:'small'}}/>
                    <Grid item xs={12} sx={{  textAlign: 'left' }} >
                    <Typography component='h5' variant='p' color='text.secondary' fontSize='11px' >
                        {a1Lessons[3].lesson}
                    </Typography>
                    <Typography component='h6' variant='p' paddingTop='5px' color="#252424" sx={{marginRight: 1 }}>
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
                
                    <Avatar src={"https://media.graphassets.com/tSwshl7nSejCh6hAUrcJ"} sx={{marginRight: 1 , borderRadius: 2 , size:'small'}}/>
                    <Grid item xs={12} sx={{  textAlign: 'left' }} >
                    <Typography component='h5' variant='p' color='text.secondary' fontSize='11px' >
                        {a1Lessons[4].lesson}
                    </Typography>
                    <Typography component='h6' variant='p' paddingTop='5px' color="#252424" sx={{marginRight: 1 }}>
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
                
                    <Avatar src={ "https://media.graphassets.com/eCnH0bUbTL6Ad2ScS0pE"} sx={{marginRight: 1 , borderRadius: 2 , size:'small'}}/>
                    <Grid item xs={12} sx={{  textAlign: 'left' }} >
                    <Typography component='h5' variant='p' color='text.secondary' fontSize='11px' >
                        {a1Lessons[5].lesson}
                    </Typography>
                    <Typography component='h6' variant='p' paddingTop='5px' color="#252424" sx={{marginRight: 1 }}>
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
                
                    <Avatar src={"https://media.graphassets.com/L8KUrApWS9ygbcPFireo"} sx={{marginRight: 1 , borderRadius: 2 , size:'small'}}/>
                    <Grid item xs={12} sx={{  textAlign: 'left' }} >
                    <Typography component='h5' variant='p' color='text.secondary' fontSize='11px' >
                        {a1Lessons[6].lesson}
                    </Typography>
                    <Typography component='h6' variant='p' paddingTop='5px' color="#252424" sx={{marginRight: 1 }}>
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
                
                    <Avatar src={"https://media.graphassets.com/Fm0LlaXLSImPTH0PpsGw"} sx={{marginRight: 1 , borderRadius: 2 , size:'small'}}/>
                    <Grid item xs={12} sx={{  textAlign: 'left' }} >
                    <Typography component='h5' variant='p' color='text.secondary' fontSize='11px' >
                        {a1Lessons[7].lesson}
                    </Typography>
                    <Typography component='h6' variant='p' paddingTop='5px' color="#252424" sx={{marginRight: 1 }}>
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
                
                    <Avatar src={ "https://media.graphassets.com/g1xenfHfSv2ZqMUd7wxG"} sx={{marginRight: 1 , borderRadius: 2 , size:'small'}}/>
                    <Grid item xs={12} sx={{  textAlign: 'left' }} >
                    <Typography component='h5' variant='p' color='text.secondary' fontSize='11px' >
                        {a1Lessons[8].lesson}
                    </Typography>
                    <Typography component='h6' variant='p' paddingTop='5px' color="#252424" sx={{marginRight: 1 }}>
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
                
                    <Avatar src={ "https://media.graphassets.com/9cpCnRJS5mJcj2egSDXg"} sx={{marginRight: 1 , borderRadius: 2 , size:'small'}}/>
                    <Grid item xs={12} sx={{  textAlign: 'left' }} >
                    <Typography component='h5' variant='p' color='text.secondary' fontSize='11px' >
                        {a1Lessons[9].lesson}
                    </Typography>
                    <Typography component='h6' variant='p' paddingTop='5px' color="#252424" sx={{marginRight: 1 }}>
                        {a1Lessons[9].field}
                    </Typography>
                    <Typography paddingTop='10px' >
                    <CustomizedProgressBars  />
                    </Typography>
                    </Grid>
            </Link>
        </Grid>

</Card>
);

};

export default LessonA1;
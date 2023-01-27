import * as React from 'react';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';

export default function CircularDeterminate() {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
    }, 800);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Stack spacing={1} direction="row" >
      {/* <CircularProgress bgcolor='red' variant="determinate" value={25} /> */}
      <CircularProgress variant="determinate"  value={80}  sx={{ width:'10px' , height:'10px' , fontSize:'1px', padding:'1px' , margin:'1px'}}/>
    </Stack>
  );
}

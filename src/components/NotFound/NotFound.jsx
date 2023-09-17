// import React from 'react';

// function NotFound() {
//   return (
//     <div>
//       <h1>404 - Not Found</h1>
//       <p>The page you are looking for does not exist.</p>
//     </div>
//   );
// }

// export default NotFound;

import React from 'react';
import { Link } from 'react-router-dom';
import {
  Box, Button, Container, Typography,
} from '@mui/material';
import Grid from '@mui/material/Grid';
import '../../assets/fonts/Font.css';

export default function NotFound() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '80vh',
      }}
    >
      <Container maxWidth="md">
        <Grid container spacing={2}>
          <Grid xs={6}>
            <Typography variant="h1" style={{ fontFamily: 'Ringbearer' }}>
              404
            </Typography>
            <Typography variant="h6" style={{ fontFamily: 'Ringbearer' }}>
              The page you’re looking for doesn’t exist
            </Typography>
            <Link to="/">
                <Button variant="contained" sx={{ backgroundColor: 'black', color: 'white', fontFamily: 'Ringbearer' }}>
                    Back Home
                </Button>
            </Link>
          </Grid>
          <Grid xs={6}>
            <img
              src="https://cdn.pixabay.com/photo/2017/03/09/12/31/error-2129569__340.jpg"
              alt=""
              width={500} height={250}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

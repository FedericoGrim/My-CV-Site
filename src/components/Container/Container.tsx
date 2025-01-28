import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import {ContainerProps} from "./ContainerProps"

export const MyContainer: React.FC<ContainerProps> = ({ 
    color = '#cfe8fc'
  }) => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box
          sx={{
            bgcolor: color,
            height: '100%',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
      >
        Contenuto centrato
      </Box>
      </Container>
    </React.Fragment>
  );
}

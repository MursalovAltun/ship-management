import { ShipsContainer } from '@features/ships/containers/ShipsContainer';
import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import React from 'react';
import './App.css';

const App = () => {
  return (
    <div>
      {/* <Loader /> */}
      <Box sx={{ flexGrow: 1, marginBottom: 5 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography>Ships Management</Typography>
          </Toolbar>
        </AppBar>
      </Box>

      <ShipsContainer />
    </div>
  );
};

export default App;

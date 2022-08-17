import React from 'react';
import {  Toolbar, Typography, IconButton } from '@mui/material';
import AppBar from '@mui/material/AppBar';
// import MenuIcon from '@mui/icons-material/Menu';
  

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
//   menuButton: {
//     marginRight: theme.spacing(2),
//   },
// }));
  

export default function Navbar() {
//   const classes = useStyles();
  
  return (
    <div >
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton edge="start" 
            color="inherit" aria-label="menu">
              {/* <MenuIcon /> */}
          </IconButton>
          <Typography variant="h6" color="inherit">
            Geeks for Geeks
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
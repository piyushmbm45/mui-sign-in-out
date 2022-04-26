import React from 'react';
import { Link } from 'react-router-dom';
import { Toolbar, Typography, IconButton, Stack, Button } from '@mui/material';

export const NavBar = () => {
  return (
    <Stack>
      <Toolbar>
        <IconButton size="small">
          <Link to="/">
            <img src="/google.png" alt="logo" width={48} height={48} />
          </Link>
        </IconButton>
        <Button>
          <Typography
            variant="h6"
            sx={{ flexGrow: 1, fontWeight: 'bold' }}
            color="primary"
          >
            Google
          </Typography>
        </Button>
        <Stack direction="row" spacing={2} color="primary">
          <Button size="large">
            <Link to="/">Home</Link>
          </Button>
          <Button size="large">
            <Link to="/about">About</Link>
          </Button>
          <Button size="large">
            <Link to="/signin">SignIn</Link>
          </Button>
          <Button size="large">
            <Link to="/signout">SignOut</Link>
          </Button>
        </Stack>
      </Toolbar>
    </Stack>
  );
};

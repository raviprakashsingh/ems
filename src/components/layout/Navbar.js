import React from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  makeStyles,
} from '@material-ui/core';
import { Menu } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  grow: { flexGrow: 1 },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
}));

export default function Navbar() {
  const classes = useStyles();
  return (
    <AppBar position='fixed' className={classes.appBar}>
      <Toolbar>
        <IconButton
          edge='start'
          className={classes.menuButton}
          color='inherit'
          aria-label='open drawer'
        >
          <Menu />
        </IconButton>
        <Typography variant='h6' noWrap>
          EMS
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

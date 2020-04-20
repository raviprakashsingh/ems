import React, { Fragment, useState } from 'react';
import {
  Drawer,
  makeStyles,
  List,
  ListItem,
  ListItemText,
  Divider,
  ListItemIcon,
} from '@material-ui/core';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MenuIcon from '@material-ui/icons/Menu';
import clsx from 'clsx';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7) + 1,
    overflowX: 'hidden',
  },
}));

export default function Menu() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  return (
    <Fragment>
      <Drawer
        variant='permanent'
        className={clsx(classes.drawerClose, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}></div>
        <List>
          <ListItem button>
            <ListItemIcon onClick={() => setOpen(!open)}>
              <MenuIcon />
            </ListItemIcon>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary='Dashbord' />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary='Dashbord' />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary='Dashbord' />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary='Dashbord' />
          </ListItem>
        </List>
        <Divider />
      </Drawer>
    </Fragment>
  );
}

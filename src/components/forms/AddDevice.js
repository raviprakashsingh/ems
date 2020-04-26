import React from 'react';
import {
  makeStyles,
  Grid,
  Paper,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
  Divider,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  fixMargin: {
    marginLeft: theme.spacing(7) + 1,
  },
  paper: {
    padding: theme.spacing(3),
    marginTop: theme.spacing(2),
  },
}));

export default function AddDevice() {
  const classes = useStyles();
  return (
    <div className={classes.fixMargin}>
      <div className={classes.toolbar}></div>
      <Grid container justify='center'>
        <Grid item xs={6}>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant='h3'>Add Device</Typography>
            <Divider />
            <FormControl fullWidth>
              <InputLabel>Devices</InputLabel>
              <Select>
                <MenuItem>Device 1</MenuItem>
                <MenuItem>Device 2</MenuItem>
                <MenuItem>Device 3</MenuItem>
                <MenuItem>Device 4</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth>
              <InputLabel>Meter</InputLabel>
              <Select>
                <MenuItem>Meter 1</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth>
              <InputLabel>Parameter</InputLabel>
              <Select>
                <MenuItem>Parameter 1</MenuItem>
              </Select>
            </FormControl>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

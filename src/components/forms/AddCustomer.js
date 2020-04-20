import React from 'react';
import {
  makeStyles,
  Grid,
  Paper,
  Typography,
  FormControlLabel,
  Switch,
  Divider,
  TextField,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  fixMargin: {
    marginLeft: theme.spacing(7) + 1,
  },
  paper: { padding: theme.spacing(3) },
  space2: { marginTop: theme.spacing(2) },
  space1: { marginTop: theme.spacing(1) },
  test: {},
}));

export default function AddCustomer() {
  const classes = useStyles();
  return (
    <div className={classes.fixMargin}>
      <div className={classes.toolbar}></div>
      <Grid container direction='row' justify='center' alignItems='flex-start'>
        <Grid item xs={5}>
          <Paper className={classes.paper}>
            <Typography variant='h3'>Add Customer</Typography>
            <Divider />
            <Grid container className={classes.space2}>
              <Grid item xs={6}>
                <FormControlLabel
                  control={<Switch color='primary' />}
                  label='Monitoring'
                  labelPlacement='start'
                />
              </Grid>
              <Grid item xs={6}>
                {' '}
                <FormControlLabel
                  control={<Switch color='primary' edge='end' />}
                  label='Controlling'
                  labelPlacement='start'
                />
              </Grid>
            </Grid>
            <TextField
              fullWidth
              label='Customer Name'
              className={classes.space1}
              variant='outlined'
            />
            <Grid container className={classes.space1} spacing={2}>
              <Grid item xs={6}>
                <TextField label='User Name' fullWidth variant='outlined' />
              </Grid>

              <Grid item xs={6}>
                <TextField label='Password' fullWidth variant='outlined' />
              </Grid>
            </Grid>
            <TextField
              fullWidth
              label='Number of Plants'
              className={classes.space2}
              variant='outlined'
              type='number'
            />
            <Grid container className={classes.space1} spacing={2}>
              <Grid item xs={6}>
                <TextField
                  label='Contact Person (Tech/Maint)'
                  fullWidth
                  variant='outlined'
                />
              </Grid>

              <Grid item xs={6}>
                <TextField
                  label='Contact Person (System Admin)'
                  fullWidth
                  variant='outlined'
                />
              </Grid>
            </Grid>
            <TextField
              fullWidth
              label='Email'
              className={classes.space2}
              variant='outlined'
              type='email'
            />
            <Grid container className={classes.space1} spacing={2}>
              <Grid item xs={6}>
                <TextField
                  label='Mobile'
                  type='number'
                  fullWidth
                  variant='outlined'
                />
              </Grid>

              <Grid item xs={6}>
                <TextField
                  label='Telephone'
                  type='number'
                  fullWidth
                  variant='outlined'
                />
              </Grid>
            </Grid>
            <TextField
              fullWidth
              label='Fax'
              className={classes.space2}
              variant='outlined'
            />
            <TextField
              fullWidth
              label='Face Book / Social Media'
              className={classes.space2}
              variant='outlined'
            />
            <TextField
              fullWidth
              label='Head Office'
              className={classes.space2}
              variant='outlined'
            />
            <TextField
              fullWidth
              label='Contact Person'
              className={classes.space2}
              variant='outlined'
            />
            <TextField
              fullWidth
              label='Website'
              className={classes.space2}
              variant='outlined'
            />
            <Grid container className={classes.space1} spacing={2}>
              <Grid item xs={6}>
                <TextField
                  label='GST Number'
                  type='number'
                  fullWidth
                  variant='outlined'
                />
              </Grid>

              <Grid item xs={6}>
                <TextField
                  label='PAN Number'
                  type='number'
                  fullWidth
                  variant='outlined'
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label='RR Number'
                  type='number'
                  fullWidth
                  variant='outlined'
                />
              </Grid>

              <Grid item xs={6}>
                <TextField
                  label='TAN Number'
                  type='number'
                  fullWidth
                  variant='outlined'
                />
              </Grid>
            </Grid>
            <TextField
              label='CIN'
              type='number'
              fullWidth
              variant='outlined'
              className={classes.space1}
            />
            <TextField
              label='MSME / UAM Number'
              type='number'
              fullWidth
              variant='outlined'
              className={classes.space1}
            />
            <TextField
              label='Type of Activity:'
              type='number'
              fullWidth
              variant='outlined'
              className={classes.space1}
            />
            <TextField
              label={`Number of Incomer's`}
              type='number'
              className={classes.space1}
              fullWidth
              variant='outlined'
            />
            <TextField
              label={`Number of DG's`}
              type='number'
              className={classes.space1}
              fullWidth
              variant='outlined'
            />
            <TextField
              label='Number of Solar / Other Power Geneartion'
              type='number'
              className={classes.space1}
              fullWidth
              variant='outlined'
            />
            <TextField
              label='Demand / Total Load'
              type='number'
              className={classes.space1}
              fullWidth
              variant='outlined'
            />
            <TextField
              label='Demand Charges Per kVA'
              type='number'
              className={classes.space1}
              fullWidth
              variant='outlined'
            />
            <TextField
              label='PF Penalty Charges'
              type='number'
              className={classes.space1}
              fullWidth
              variant='outlined'
            />
            <TextField
              label='Other Penalty Charges'
              type='number'
              className={classes.space1}
              fullWidth
              variant='outlined'
            />
            <TextField
              label='Number of Transformers'
              type='number'
              className={classes.space1}
              fullWidth
              variant='outlined'
            />
            <TextField
              label='Rating of Transformer1'
              type='number'
              className={classes.space1}
              fullWidth
              variant='outlined'
            />
            <TextField
              label='Rating of Transformer2'
              type='number'
              className={classes.space1}
              fullWidth
              variant='outlined'
            />
            <TextField
              label='Rating of Transformer3'
              type='number'
              className={classes.space1}
              fullWidth
              variant='outlined'
            />
            <TextField
              label='Rating of Transformer4'
              type='number'
              className={classes.space1}
              fullWidth
              variant='outlined'
            />
            <TextField
              label='Rating of Transformer5'
              type='number'
              className={classes.space1}
              fullWidth
              variant='outlined'
            />
            <TextField
              label='Number of Machines'
              type='number'
              className={classes.space1}
              fullWidth
              variant='outlined'
            />
            <TextField
              label='Units Consumed Per Day'
              type='number'
              className={classes.space1}
              fullWidth
              variant='outlined'
            />
            <TextField
              label='Licenced Upto'
              type='number'
              className={classes.space1}
              fullWidth
              variant='outlined'
            />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import MasterForm from './MasterForm'
import MapComponent from './MapComponent'

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: "100vh",
  },
});

class MainPage extends React.Component {

  render() {
    const { classes } = this.props;

    return (
      <Grid container className={classes.root}>
        <Grid item xs={6}>
          <MasterForm />
        </Grid>
        <Grid item xs={6}>
          <MapComponent />
        </Grid>
      </Grid>
    );
  }
}

MainPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MainPage);
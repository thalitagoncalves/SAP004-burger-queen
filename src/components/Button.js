import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  edit: {
    backgroundColor: '#DC4626'
  }
}));


const Btn = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Button variant="contained">Default</Button>
    </div>
  )
}

export default Btn
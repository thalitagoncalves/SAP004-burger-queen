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
    backgroundColor: '#DC4626',
    color: '#F2F2F2',
    width: '230px',
    height: '55px',
    fontSize: '14px',
    fontWeight: '900'
  }
}));


const Btn = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Button className={classes.edit} variant="contained">{props.name}</Button>
    </div>
  )
}

export default Btn
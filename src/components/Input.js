import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';


/* const theme = createMuiTheme({
  palette: {
    primary: '#F2F2F2'
  }
}) */

const useStyles = makeStyles((theme) => ({
  space: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    }
  },
  root: {
    backgroundColor: '#D86B59',
    color: '#F2F2F2',
  },
}));

const Input = (props) => {
  const classes = useStyles()
  return (
    <form className={classes.space} noValidate autoComplete="off">
      <div>
        <TextField
          required
          className={classes.root}
          id={props.id}
          label={props.label}
          type={props.type}
          variant='filled'
          size='normal'
        />
      </div>
    </form>
  )
}

export default Input
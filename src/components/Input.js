import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';


/* const theme = createMuiTheme({
  palette: {
    primary: '#F2F2F2'
  }
}) */

const useStyles = makeStyles((theme) => ({
  teste: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    }
  },
  root: {
    backgroundColor: '#D86B59',
  },
  input: {
    x: theme.props
  }
}));

const Input = (props) => {
  const classes = useStyles()
  return (
    <form className={classes.teste} noValidate autoComplete="off">
      <div>
        <TextField
          theme={props}
          className={classes.root}
          required
          id="email-value"
          label="E-mail"
          variant="filled"
        />
        <TextField
          className={classes.root}
          required
          id="password-value"
          label="Senha"
          type="password"
          autoComplete="current-password"
          variant="filled"
        />
      </div>
    </form>
  )
}

export default Input
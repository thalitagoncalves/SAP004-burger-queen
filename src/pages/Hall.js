import React from 'react';
import firebase from '../config';
import { useHistory } from 'react-router-dom';
import { Box } from '@material-ui/core';
import Logo from '../assets/logo-branco-burger-queen.png';
import HeaderStyle from '../styles/Header.styles';

function Hall() {
  const classes = HeaderStyle();
  const history = useHistory();

  const signOut = () => {
    firebase.auth().signOut()
      .then(() => {
        history.push('/');
      })
      .catch((err) => console.log(err));
  }

  const logOut = (event) => {
    event.preventDefault();
    return signOut();
  }

  return (
    <Box>
      <Box className={classes.header} m={6} display='flex' flexDirection='row' justifyContent='space-between'>
        <Box>
          <img width='54px' height='68px' src={Logo} alt='logo-burger-queen-branca' title='logo-burger-queen-branca' />
        </Box>
        <h1>Atendente: {firebase.auth().currentUser.displayName}</h1>
        <h1 onClick={logOut}>Sair</h1>
      </Box>
      <Box>
      </Box>
    </Box>
  )
}

export default Hall;
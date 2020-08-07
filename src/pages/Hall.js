import React, { useState, useEffect } from 'react';
import firebase from '../config';
import { useHistory } from 'react-router-dom';
import { Box, TextField, Typography, Button } from '@material-ui/core';
import Logo from '../assets/logo-branco-burger-queen.png';
import BtnHall from '../assets/botao-salao.png';
import BtnKitchen from '../assets/botao-cozinha.png';
import BtnHist from '../assets/botao-historico.png';
import HeaderStyle from '../styles/Header.styles';
import useStylesInput from '../styles/Input.styles';
import menuStyles from '../styles/Menu.styles';

function Hall() {
  const classes = HeaderStyle();
  const styleInput = useStylesInput();
  const menuStyle = menuStyles();
  const history = useHistory();
  const [client, setClient] = useState('');
  const [number, setNumber] = useState('');
  const [menu, setMenu] = useState([]);

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

  const getItems = () => {
    firebase.firestore()
      .collection('menu')
      .get()
      .then((querySnapshot) => {
        const data = [];
        querySnapshot.forEach((doc) => {
          data.push(doc.data())
        })
        setMenu(data)
      })
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    getItems()
  }, [])

  return (
    <Box>
      <Box className={classes.header} display='flex' flexDirection='row' justifyContent='space-around'>
        <Box>
          <img width='auto' height='60px' src={Logo} alt='logo-burger-queen-branca' title='logo burger queen branca' />
        </Box>
        <Typography variant='h6'>Atendente: {firebase.auth().currentUser.displayName}</Typography>
        <Button onClick={logOut}>Sair</Button>
      </Box>
      <Box display='flex' justifyContent='space-around' m='auto' p={3.75}>
        <img width='270px' height='auto' src={BtnHall} alt='botao-status-salao' title='botão status salão' />
        <img width='270px' height='auto' src={BtnKitchen} alt='botao-status-cozinha' title='botão status salão' />
        <img width='270px' height='auto' src={BtnHist} alt='botao-historico' title='botão histórico' />
      </Box>
      <Box display='flex' flexDirection='column' alignItems='center'>
        <Box pb={3}>
          <TextField
            required
            value={client}
            onKeyPress={(e) => setClient(e.target.value)}
            className={styleInput.input}
            id="filled-required"
            label="Cliente"
            variant="filled"
          />
        </Box>
        <Box pb={3}>
          <TextField
            required
            value={number}
            onKeyPress={(e) => setNumber(e.target.value)}
            className={styleInput.input}
            id="filled-number"
            label="Mesa"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            variant="filled"
          />
        </Box>
      </Box>
      <Box className={menuStyle.menu}>
        {menu.map((item) => {
          return (
            <ul>
              <li>{item.name}</li>
              <li>R${item.price}</li>
            </ul>
          )
        })}
      </Box>
    </Box>
  )
}

export default Hall;
import React, { useState, useEffect } from 'react';
import firebase from '../config';
import { useHistory } from 'react-router-dom';
import { Box, Typography, Button, ListItemText } from '@material-ui/core';
import Logo from '../assets/logo-branco-burger-queen.png';
import HeaderStyle from '../styles/Header.styles';
import useStylesCard from '../styles/Menu.styles';
import buttonStyle from '../styles/Button.style'


function Kitchen() {

  const history = useHistory();
  const classes = HeaderStyle();
  const btnStyle = buttonStyle();
  const card = useStylesCard();
  const [requests, setRequests] = useState([]);


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

  const showRequests = () => {
    firebase.firestore()
      .collection('requests')
      .onSnapshot((querySnapshot) => {
        const data = [];
        querySnapshot.forEach((doc) => {
          data.push({ ...doc.data(), id: doc.id })
        })
        setRequests(data.filter((e) => e.status !== 'Pronto'))
      })
  }

  useEffect(() => {
    showRequests()
  }, [requests])

  const updateStatus = (newStatus, requestID) => {
    firebase
      .firestore()
      .collection('requests')
      .doc(requestID).update({ status: newStatus })
  }

  return (
    <Box>
      <Box className={classes.header} display='flex' flexDirection='row' justifyContent='space-around'>
        <Box>
          <img width='auto' height='60px' src={Logo} alt='logo-burger-queen-branca' title='logo burger queen branca' />
        </Box>
        <Typography variant='h6'>Cozinheiro: {firebase.auth().currentUser.displayName}</Typography>
        <Button onClick={logOut}>Sair</Button>
      </Box>
      <Box display='flex' justifyContent='space-around'>
        {requests.map((item) => {
          return (
            <Box display='flex' alignItems='center' flexDirection='column' textAlign='center' width='250px' className={card.menu}>
              <ListItemText>{item.client}, {item.number}</ListItemText>
              <ListItemText>{item.products.map((product) => {
                return (
                  <ListItemText>{product.name} {product.quantity}x</ListItemText>
                )
              })}</ListItemText>
              <Button className={btnStyle.edit} variant="contained" onClick={() => {
                updateStatus('Pronto', item.id)
                return alert('Pedido enviado para o salão!')
              }}>Pronto</Button>
            </Box>
          )
        })}
      </Box>
    </Box>
  )
}

export default Kitchen;
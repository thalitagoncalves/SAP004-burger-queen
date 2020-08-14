import React, { useState, useEffect } from 'react';
import firebase from '../config';
import { useHistory } from 'react-router-dom';
import { Box, Typography, Button, ListItemText } from '@material-ui/core'
import Logo from '../assets/logo-branco-burger-queen.png';
import HeaderStyle from '../styles/Header.styles';
import useStylesCard from '../styles/Menu.styles'


function Kitchen() {

  const history = useHistory();
  const classes = HeaderStyle();
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
      .get()
      .then((querySnapshot) => {
        const data = [];
        querySnapshot.forEach((doc) => {
          data.push(doc.data())
        })
        setRequests(data)
      })
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    showRequests()
  }, [requests])


  return (
    <Box>
      <Box className={classes.header} display='flex' flexDirection='row' justifyContent='space-around'>
        <Box>
          <img width='auto' height='60px' src={Logo} alt='logo-burger-queen-branca' title='logo burger queen branca' />
        </Box>
        <Typography variant='h6'>Cozinheiro: {firebase.auth().currentUser.displayName}</Typography>
        <Button onClick={logOut}>Sair</Button>
      </Box>
      <Box>
        {requests.map((item) => {
          return (
            <Box display='flex' className={card.menu}>
              <ListItemText>{item.client}</ListItemText>
              <ListItemText>{item.number}</ListItemText>
              <ListItemText>{item.products.map((product) => {
                return (
                  <ListItemText>{product.name}</ListItemText>
                )
              })}</ListItemText>
            </Box>
          )
        })}
      </Box>
    </Box>
  )
}

export default Kitchen;
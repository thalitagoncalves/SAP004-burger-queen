import React, { useState, useEffect } from 'react';
import firebase from '../config';
import { useHistory } from 'react-router-dom';
import { Box, TextField, Typography, Button, List, ListItemText } from '@material-ui/core';
import { AddCircle, RemoveCircle } from '@material-ui/icons';
import Logo from '../assets/logo-branco-burger-queen.png';
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
  const [breakfast, setBreakfast] = useState([]);
  const [brunch, setBrunch] = useState([]);
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
    localStorage.clear();
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

  const filterMenu = (data) => {
    const filterByItems = menu.filter((item) => item.type === data);
    if (data === 'breakfast') {
      return setBreakfast(filterByItems)
    } else {
      return setBrunch(filterByItems)
    }
  }

  useEffect(() => filterMenu('breakfast'), [menu]);

  useEffect(() => filterMenu('brunch'), [menu]);

  const addItem = (obj) => {
    const updateRequests = requests.map((element) => {
      if (element.name === obj.name) {
        element.quantity++
        return element;
      } else {
        return element;
      }
    });
    const checkItem = requests.find(product => product.name === obj.name)
    if (checkItem) {
      setRequests(updateRequests)
    } else {
      obj.quantity = 1;
      const total = [...requests, obj];
      setRequests(total);
    }
  }

  const deleteItem = (index) => {
    const filterToDelete = requests.filter((item, position) => index !== position);
    return setRequests(filterToDelete)
  }

  const totalPrice = () => {
    const sumPrice = requests.reduce((acc, current) => acc + current.price, 0);
    return requests ? sumPrice : '0'
  }


  const requestsCollection = (clientName, tableNUmber, request, status) => {
    firebase
      .firestore()
      .collection('requests')
      .add({
        client: clientName,
        number: tableNUmber,
        data: new Date(),
        products: request,
        status: status
      })
  }

  return (
    <Box>
      <Box className={classes.header} display='flex' flexDirection='row' justifyContent='space-around'>
        <Box>
          <img width='auto' height='60px' src={Logo} alt='logo-burger-queen-branca' title='logo burger queen branca' />
        </Box>
        <Typography variant='h6'>Atendente: {firebase.auth().currentUser.displayName}</Typography>
        <Button onClick={logOut}>Sair</Button>
      </Box>
      <Box display='flex' flexDirection='column' alignItems='center'>
        <Box pb={3}>
          <TextField
            value={client}
            onChange={(e) => setClient(e.target.value)}
            className={styleInput.input}
            label="Cliente"
            type='text'
            variant="filled"
          />
        </Box>
        <Box pb={3}>
          <TextField
            value={number}
            onChange={(e) => setNumber(e.target.value)}
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
      <Box display='flex'>
        <Box display='flex' flexDirection='column' width='450px' className={menuStyle.menu}>
          <List>
            <h2 className={menuStyle.request}>Café da Manhã</h2>
            {breakfast.map((item) => {
              return (
                <Box display='flex'>
                  <ListItemText>{item.name} R${item.price}</ListItemText>
                  <Button onClick={() => addItem(item)}><AddCircle /></Button>
                </Box>
              )
            })}
          </List>
          <ul>
            <h2 className={menuStyle.request}>Vespertino</h2>
            {brunch.map((item) => {
              return (
                <Box display='flex'>
                  <ListItemText>{item.name} R${item.price}</ListItemText>
                  <Button onClick={() => addItem(item)}><AddCircle /></Button>
                </Box>
              )
            })}
          </ul>
        </Box>
        <Box display='flex' flexDirection='column' width='450px' className={menuStyle.menu}>
          <h1 className={menuStyle.request}>Pedido</h1>
          {requests.map((item, index) => {
            return (
              <Box display='flex'>
                <ListItemText key={index}>{item.name} R${item.price} {item.quantity}x</ListItemText>
                <Button key={item.price + index} onClick={() => deleteItem(index)}><RemoveCircle /></Button>
              </Box>
            )
          })}
        </Box>
      </Box>
      <Box className={classes.header} display='flex' flexDirection='row' justifyContent='space-around'>
        <h1>Valor total: R$ {totalPrice()}</h1>
        <Button onClick={() => {
          requestsCollection(client, number, requests, 'pendente')
          setClient('');
          setNumber('')
          setRequests([])
          alert('Pedido enviado para a cozinha!')
        }}>Enviar</Button>
      </Box>
    </Box>
  )
}


export default Hall;
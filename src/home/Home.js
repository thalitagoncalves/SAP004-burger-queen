import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import logo from '../assets/logo-burger-queen.png';
import register from '../assets/card-cadastro.png'
import KitchenCard from '../assets/card-cozinha.png';
import HallCard from '../assets/card-salao.png';

const useStyles = makeStyles((theme) => ({
  logo: {
    height: '195px',
    width: '145px',
    paddingTop: '10px',
    margin: '170px 170px 0px',
    display: 'flex',
    flexDirection: 'column',
  },
  cardContainer: {
    display: 'flex',
    justifyContent: 'space-evenly',
    width: '100%'
  },
  cards: {
    height: '295px',
    width: '225px',
    marginTop: '30px'
  },
  welcome: {
    color: '#F2F2F2',
    fontSize: '30px',
    paddingTop: '10%',
    textAlign: 'center'
  },
  choose: {
    color: '#F2F2F2',
    fontSize: '30px',
    width: '85%',
    textAlign: 'center',
    margin: '50px auto'
  },
}))



function Home() {
  const classes = useStyles();
  return (
    <Box display='flex' flexDirection='column' alignItems='center'>
      <Box>
        <img src={logo} alt='burger-queen' className={classes.logo} />
        <p className={classes.welcome}>SEJA <strong>BEM VINDO!</strong></p>
      </Box>
      <Box display='flex' flexDirection='column' alignItems='center'>
        <p className={classes.choose}>Escolha sua carta</p>
        <Box className={classes.cardContainer}>
          <Link to='/kitchen-login'><img src={KitchenCard} alt='card-cozinha' className={classes.cards} /></Link>
          <Link to='/hall-login'><img src={HallCard} alt='card-salao' className={classes.cards} /></Link>
          <Link to='/signup'><img src={register} alt='card-cadastro' className={classes.cards} /></Link>
        </Box>
        <p className={classes.choose}>Por favor, <strong>escolha sua carta</strong> para realizar o login. Se é um novo funcionário, <strong>cadastre-se</strong>.</p>
      </Box>
    </Box>
  )
}


export default Home

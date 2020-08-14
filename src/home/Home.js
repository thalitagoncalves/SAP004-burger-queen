import React from 'react';
import { Link } from 'react-router-dom';
import useStyles from '../styles/Home.styles';
import { Box } from '@material-ui/core';
import logo from '../assets/logo-burger-queen.png';
import register from '../assets/card-cadastro.png'
import KitchenCard from '../assets/card-cozinha.png';
import HallCard from '../assets/card-salao.png';
import layoutStyles from '../styles/Layout.styles';

function Home() {
  const classes = useStyles();
  const layout = layoutStyles();

  return (
    <Box display='flex' flexDirection='column' alignItems='center' className={layout.box}>
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


export default Home;

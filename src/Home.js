import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  root: {
    height: '150vh',
    background: '#231812',
    padding: '1px',
  }
})

function Home() {
  const background = useStyles();
  return (
    <div className={background.root}>
      <section>
        <div>SEJA <strong>BEM</strong> VINDO</div>
      </section>
      <p>
        <Link to='/signup'>Cadastro</Link>
        <Link to='/hall'><button>Salão</button></Link>
        <Link to='/kitchen'><button>Cozinha</button></Link>
      </p>
    </div>
  )
}


export default Home
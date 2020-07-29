import React from 'react';
import { Link } from 'react-router-dom';
import GoBack from '../assets/menu-burger-voltar.png';
import { TextField, Button, Box } from '@material-ui/core';
import useStylesInput from '../styles/Input.styles'

function Login({ srcImg, altImg, title }) {
	const classes = useStylesInput();
	return (
		<Box>
			<Box m={6} display='flex' justifyContent='flex-start'>
				<Link to='/'><img width='70px' height='85px' src={GoBack} alt='voltar' title='voltar' /></Link>
			</Box>
			<Box display='flex' flexDirection='column' alignItems='center'>
				<Box pt={15}>
					<img src={srcImg} alt={altImg} title={title} width='145px' height='235px' />
				</Box>
				<Box display='flex' flexDirection='column' alignItems='center' p='20px'>
					<Box pb={3}>
						<TextField
							required
							className={classes.input}
							id='input-email'
							label='E-mail'
							type='email'
							variant='filled'
							size='large'
						/>
					</Box>
					<Box pb={3}>
						<TextField
							required
							className={classes.input}
							id='input-psswrd'
							label='Senha'
							type='password'
							variant='filled'
							size='large'
						/>
					</Box>
					<Button className={classes.edit} variant="contained">Acessar</Button>
				</Box>
			</Box>
		</Box>
	)
}

export default Login;
import React, { useState } from 'react';
import firebase from '../config';
import { Link, useHistory } from 'react-router-dom';
import GoBack from '../assets/menu-burger-voltar.png';
import { TextField, Button, Box } from '@material-ui/core';
import useStylesInput from '../styles/Input.styles';
import layoutStyles from '../styles/Layout.styles';
import errorCodes from './error';
// import isAuth from '../auth'

const findUserPosition = (uid) => {
	return firebase.firestore().collection('users').doc(uid).get()
		.then((doc) => doc.data().position)
}

function Login({ srcImg, altImg, title }) {
	const classes = useStylesInput();
	const layout = layoutStyles();

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');
	const history = useHistory();

	const signIn = (sendEmail, sendPassword) => {
		firebase
			.auth().signInWithEmailAndPassword(sendEmail, sendPassword)
			.then((res) => findUserPosition(res.user.uid))
			.then((position) => {
				(position === 'atendente') ? history.push('/hall') : history.push('/kitchen')
			})
			.catch(function (error) {
				(errorCodes[error.code] ? setError(errorCodes[error.code]) : setError(errorCodes.DEFAULT_MESSAGE))
			})
	}

	const login = (event) => {
		event.preventDefault();
		return signIn(email, password)
	}

	return (
		<Box className={layout.box}>
			<Box m={6} display='flex' justifyContent='flex-start'>
				<Link to='/'><img width='70px' height='85px' src={GoBack} alt='voltar' title='voltar' /></Link>
			</Box>
			<Box display='flex' flexDirection='column' alignItems='center'>
				<Box pt={15}>
					<img src={srcImg} alt={altImg} title={title} width='145px' height='235px' />
				</Box>
				<form method='post'>
					<Box display='flex' flexDirection='column' alignItems='center' p='20px'>
						<Box pb={3}>
							<TextField
								required
								className={classes.input}
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								label='E-mail'
								type='email'
								variant='filled'
								size='medium'
							/>
						</Box>
						<Box pb={3}>
							<TextField
								required
								className={classes.input}
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								label='Senha'
								type='password'
								variant='filled'
								size='medium'
							/>
						</Box>
						<Box value={error} onChange={(e) => setError(e.target.value)}>{error}</Box>
						<Button className={classes.edit} variant="contained" onClick={(event) => login(event)}>Acessar</Button>
					</Box>
				</form>
			</Box>
		</Box>
	)
}

export default Login;
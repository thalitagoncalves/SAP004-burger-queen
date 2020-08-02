import React, { useState } from 'react';
import firebase from '../config'
import GoBack from '../assets/menu-burger-voltar.png';
import { Link, useHistory } from 'react-router-dom'
import { Box, Button, TextField, FormLabel, FormControl, FormControlLabel, RadioGroup, Radio } from '@material-ui/core'
import RegisterIcon from '../assets/logo-login-cadastro.png';
import useStylesInput from '../styles/Input.styles';
import errorCodes from './error';

function SignUp() {
	const classes = useStylesInput();

	const [value, setValue] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [username, setUsername] = useState('');
	const [error, setError] = useState('');
	let history = useHistory();

	const register = (nameFirebase, emailFirebase, pass, position) => {
		firebase.auth()
			.createUserWithEmailAndPassword(emailFirebase, pass)
			.then((cred) => {
				cred.user.updateProfile({ displayName: nameFirebase });
				userCollection(nameFirebase, emailFirebase, position, firebase.auth().currentUser.uid);
			})
			.then(() => history.push('/'))
			.catch(function (error) {
				(errorCodes[error.code]) ? setError(errorCodes[error.code]) : setError(errorCodes.DEFAULT_MESSAGE)
			})
	}

	const userCollection = (user, emailCollection, position, uid) => {
		firebase
			.firestore()
			.collection('users')
			.doc(uid)
			.set({
				name: user,
				email: emailCollection,
				position,
			})
			.then((succses) => console.log(succses))
			.catch((err) => console.log(err))
	}

	const createUser = (event) => {
		event.preventDefault();
		return register(username, email, password, value);
	}

	const handleChange = (event) => {
		setValue(event.target.value);
	};

	return (
		<Box>
			<Box m={6} display='flex' justifyContent="flex-start">
				<Link to='/'><img width='70px' height='85px' src={GoBack} alt='voltar' title='voltar' /></Link>
			</Box>
			<Box display='flex' flexDirection='column' alignItems='center'>
				<Box pt={15}>
					<img src={RegisterIcon} alt='logo-cadastro' title='cadastro' width='145px' height='235px' />
				</Box>
				<Box display='flex' flexDirection='column' alignItems='center' p='50px'>
					<Box pb={3}>
						<TextField
							required
							className={classes.input}
							id='input-name'
							label='Seu nome'
							type='text'
							value={username}
							onChange={e => setUsername(e.target.value)}
							variant='filled'
							size='medium'
						/>
					</Box>
					<Box pb={3}>
						<TextField
							required
							className={classes.input}
							id='input-email'
							label='E-mail'
							type='email'
							value={email}
							onChange={e => setEmail(e.target.value)}
							variant='filled'
							size='medium'
						/>
					</Box>
					<Box pb={3}>
						<TextField
							required
							className={classes.input}
							id='input-psswrd'
							label='Senha'
							type='password'
							value={password}
							onChange={e => setPassword(e.target.value)}
							variant='filled'
							size='medium'
						/>
					</Box>
					<FormControl component="fieldset">
						<FormLabel component="legend">Cargo</FormLabel>
						<RadioGroup aria-label="position" name="position" value={value} onChange={handleChange}>
							<FormControlLabel value="atendente" control={<Radio />} label="Atendente" />
							<FormControlLabel value="cozinheiro" control={<Radio />} label="Cozinheiro" />
						</RadioGroup>
					</FormControl>
					<Box value={error} onChange={(e) => setError(e.target.value)}>{error}</Box>
					<Button className={classes.edit} variant="contained" onClick={(event) => createUser(event)}>Cadastrar</Button>
				</Box>
			</Box>
		</Box>
	)
}

export default SignUp;
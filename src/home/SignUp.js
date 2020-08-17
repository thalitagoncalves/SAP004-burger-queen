import React, { useState } from 'react';
import firebase from '../config'
import GoBack from '../assets/menu-burger-voltar.png';
import { Link, useHistory } from 'react-router-dom'
import { Box, Button, TextField, FormLabel, FormControl, FormControlLabel, RadioGroup, Radio } from '@material-ui/core'
import RegisterIcon from '../assets/logo-login-cadastro.png';
import layoutStyles from '../styles/Layout.styles';
import useStylesInput from '../styles/Input.styles';
import buttonStyles from '../styles/Button.style';
import errorCodes from './error';

function SignUp() {
	const classes = useStylesInput();
	const layout = layoutStyles();
	const btnStyle = buttonStyles();
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
		<Box className={layout.box}>
			<Box m={6} display='flex' justifyContent="flex-start">
				<Link to='/'><img width='70px' height='85px' src={GoBack} alt='voltar' title='voltar' /></Link>
			</Box>
			<Box display='flex' flexDirection='column' alignItems='center'>
				<Box pt={15}>
					<img src={RegisterIcon} alt='logo-cadastro' title='cadastro' width='145px' height='235px' />
				</Box>
				<form method='post'>
					<Box display='flex' flexDirection='column' alignItems='center' p='50px'>
						<Box pb={3}>
							<TextField
								required
								className={classes.input}
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
								label='Senha'
								type='password'
								value={password}
								onChange={e => setPassword(e.target.value)}
								variant='filled'
								size='medium'
							/>
						</Box>
						<Box textAlign='center'>
							<FormControl component="fieldset">
								<FormLabel className={classes.radio} component="legend">Cargo</FormLabel>
								<RadioGroup aria-label="position" name="position" value={value} onChange={handleChange}>
									<FormControlLabel className={classes.radio} value="atendente" control={<Radio />} label="Atendente" />
									<FormControlLabel className={classes.radio} value="cozinheiro" control={<Radio />} label="Cozinheiro" />
								</RadioGroup>
							</FormControl>
						</Box>
						<Button className={btnStyle.edit} variant="contained" onClick={(event) => createUser(event)}>Cadastrar</Button>
						<Box p={3} className={classes.errorMsg} value={error} onChange={(e) => setError(e.target.value)}>{error}</Box>
					</Box>
				</form>
			</Box>
		</Box>
	)
}

export default SignUp;
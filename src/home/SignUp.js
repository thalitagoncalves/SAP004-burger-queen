import React from 'react';
import GoBack from '../assets/menu-burger-voltar.png';
import { Link } from 'react-router-dom'
import { Box, Button, TextField, FormLabel, FormControl, FormControlLabel, RadioGroup, Radio } from '@material-ui/core'
import RegisterIcon from '../assets/logo-login-cadastro.png';
import useStylesInput from '../styles/Input.styles';

function SignUp() {
	const classes = useStylesInput();

	const [value, setValue] = React.useState('');

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
					<FormControl component="fieldset">
						<FormLabel component="legend">Cargo</FormLabel>
						<RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
							<FormControlLabel value="salao" control={<Radio />} label="Salão" />
							<FormControlLabel value="cozinha" control={<Radio />} label="Cozinha" />
						</RadioGroup>
					</FormControl>
					<Button className={classes.edit} variant="contained">Acessar</Button>
				</Box>
			</Box>
		</Box>
	)
}

export default SignUp;
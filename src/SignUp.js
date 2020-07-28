import React from 'react';
import Input from '../src/components/Input';
import Btn from '../src/components/Button';
import GoBack from '../src/assets/menu-burger-voltar.png';
import { Link } from 'react-router-dom'
import { Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const useStyles = makeStyles((theme) => ({
	back: {
		width: '70px',
		height: '85px',
		margin: '50px 730px 0px 0px'
	},
	logo: {
		width: '145px',
		height: '235px',
		margin: '170px 170px 0px',
		paddingTop: '10px',
	},
	box: {
		margin: '30px auto',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		border: 'solid 7px #DC4626',
		borderRadius: '30px',
		width: '90%',
		height: '1300px',
	},
	form: {
		display: 'flex',
		alignItems: 'center',
		flexDirection: 'column',
		padding: '50px'
	},
}))


function SignUp() {
	const classes = useStyles();

	const [value, setValue] = React.useState('');

	const handleChange = (event) => {
		setValue(event.target.value);
	};

	return (
		<Box className={classes.box}>
			<div>
				<Link to='/'><img className={classes.back} src={GoBack} alt='voltar' title='voltar' /></Link>
			</div>
			<div>
				<img alt='logo-cadastro' title='cadastro' className={classes.logo} />
			</div>
			<div className={classes.form}>
				<Input width='120px' id='input-email' label='E-mail' type='email' />
				<Input id='input-psswrd' label='Senha' type='password' />
				<Btn name='Cadastrar' />
			</div>
			<FormControl component="fieldset">
				<FormLabel component="legend">Gender</FormLabel>
				<RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
					<FormControlLabel value="salao" control={<Radio />} label="Salão" />
					<FormControlLabel value="cozinha" control={<Radio />} label="Cozinha" />
				</RadioGroup>
			</FormControl>
		</Box>
	)
}

export default SignUp;
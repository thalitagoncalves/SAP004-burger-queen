import React from 'react';
import { Link } from 'react-router-dom';
import Input from '../src/components/Input';
import Btn from '../src/components/Button';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import LogoCozinha from '../src/assets/logo-login-cozinha.png';
import GoBack from '../src/assets/menu-burger-voltar.png';

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

function KitchenLogin() {
	const classes = useStyles();
	return (
		<Box className={classes.box}>
			<div>
				<Link to='/'><img className={classes.back} src={GoBack} alt='voltar' title='voltar' /></Link>
			</div>
			<div>
				<img src={LogoCozinha} alt='logo-cozinha' title='login cozinha' className={classes.logo} />
			</div>
			<div className={classes.form}>
				<Input width='120px' id='input-email' label='E-mail' type='email' />
				<Input id='input-psswrd' label='Senha' type='password' />
				<Btn name='Login' />
			</div>
		</Box>
	)
}

export default KitchenLogin;
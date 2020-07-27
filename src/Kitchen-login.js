import React from 'react';
import { Link } from 'react-router-dom';
import Input from '../src/components/Input';
import Btn from '../src/components/Button';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import LogoCozinha from '../src/assets/logo-login-cozinha.png';
import GoBack from '../src/assets/menu-burger-voltar.png';

const useStyles = makeStyles((theme) => ({
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
		flexDirection: 'column'
	}
}))

function KitchenLogin() {
	const classes = useStyles();
	return (
		<Box className={classes.box}>
			<div>
				<Link to='/'><img src={GoBack} alt='voltar' title='voltar' /></Link>
			</div>
			<div>
				<img src={LogoCozinha} alt='logo-cozinha' title='login cozinha' className={classes.logo} />
			</div>
			<div className={classes.form}>
				<Input />
				<Btn />
			</div>
		</Box>
		// pensamos em colocar uma class com props para o Input, assim seria possível diferenciar campo de email e senha
	)
}

export default KitchenLogin;
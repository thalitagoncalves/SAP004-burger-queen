import React from 'react';
import { Link } from 'react-router-dom';
import Input from '../src/components/Input'
import Btn from '../src/components/Button'

const KitchenLogin = () => (
	<div>
		<header>
			<h1>Login Cozinha</h1>
		</header>
		<div>
			<Input />
			<Btn />
		</div>
		<p>
			<Link to='/'>Ir para a Home</Link>
		</p>
	</div>
);

export default KitchenLogin;
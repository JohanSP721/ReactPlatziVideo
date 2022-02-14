import { useState } from 'react';

import { Link, useHistory } from 'react-router-dom';

import { useDispatch } from 'react-redux';

import { registerRequest } from '../actions';

import '../assets/styles/components/Registry.scss';

const Registry = () =>
{
	const [values, setValues] = useState();
	const history = useHistory();
	const dispatch = useDispatch();

	const handleChange = e =>
	{
		setValues(
			{
				...values,
				[e.target.name]: e.target.value
			}
		);
	};

	const handleSubmit = e =>
	{
		e.preventDefault();
		dispatch(registerRequest(values));
		history.push('/');
	}
	
	return(
		<section className="registry">
			<article className="registry__container">
				<h1>Registrarte</h1>
				<form onSubmit={handleSubmit} className="registry__container--form">
					<input onChange={handleChange} name="name" className="input__registry" type="text" placeholder="Nombre"/>
					<input onChange={handleChange} name="email" className="input__registry" type="email" placeholder="Correo"/>
					<input onChange={handleChange} name="password" className="input__registry" type="password" placeholder="Contraseña"/>
					<button className="button__registry">Registrarme</button>
				</form>
				<p className="registry__container--login"><Link to="/login">Inicia Sesión</Link></p>
			</article>
		</section>
	);
};

export default Registry;
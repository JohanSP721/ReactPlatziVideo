import { useState } from 'react';

import { Link, useHistory } from 'react-router-dom';

import { useDispatch } from 'react-redux';

import { loginRequest } from '../actions';

import '../assets/styles/components/Login.scss';

import googleIcon from '../assets/static/google-icon.webp';
import twitterIcon from '../assets/static/twitter-icon.webp';

const Login = () =>
{
	const dispatch = useDispatch();

	const history = useHistory();
	
	const [values, setValues] = useState();

	const handleChange = e =>
	{
		setValues({...values, [e.target.name]: e.target.value});
	};

	const handleSubmit = e =>
	{
		e.preventDefault();
		dispatch(loginRequest(values));
		history.push('/');
	};
	
	return(
		<section className="login">
			<article className="login__container">
			<h1>Inicia Sesión</h1>
			<form className="login__container--form" onSubmit={handleSubmit}>
				<input name="email" aria-label="Correo" className="input__login" type="text" placeholder="Correo" onChange={handleChange}/>
				<input  name="password" aria-label="Contraseña" className="input__login" type="password" onChange={handleChange} placeholder="Contraseña"/>
				<button className="button__login">Iniciar Sesión</button>
				<div className="login__container--remember-me">
				<label>
					<input type="checkbox" name="" id="cx1"/>
					Recuérdame
				</label>
				<a href="">Olvide mi contraseña</a>
				</div>
			</form>
			<section className="login__container--social-media">
				<div>
				<img src={googleIcon} alt="Google"/>
				<p>Inicia Sesión Con Google</p>
				</div>
				<div>
				<img src={twitterIcon} alt="Twitter"/>
				<p>Inicia Sesión Con Twitter</p>
				</div>
			</section>
			<p>No tienes ninguna cuenta <Link to="/registry">Registrate</Link></p>
			</article>
		</section>
	);
};

export default Login;
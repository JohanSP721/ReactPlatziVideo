import { Link, useLocation } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import { logoutRequest } from '../actions';

import '../assets/styles/components/Header.scss';

import logo from '../assets/static/logo-platzi-video-BW2.png';
import userIcon from '../assets/static/user-icon.png';

const Header = () =>
{
	const user = useSelector(state => state.user);
	const dispatch = useDispatch();
	const hasUser = Object.keys(user).length > 0;


	const handleLogout = () =>
	{
		dispatch(logoutRequest({}));
	};

	const notHome = useLocation().pathname !== '/';

	return notHome ? (
		<header>
			<Link to="/">
				<img className="header__img" src={logo} alt="logo logo platzi video"/>
			</Link>
		</header>
	)
	:
	(
		<header>
			<Link to="/">
				<img className="header__img" src={logo} alt="logo logo platzi video"/>
			</Link>
			<nav className="header__menu">
				<div className="header__menu--profile">
					<img src={userIcon} alt="user-icon"/>
					<p>Perfil</p>
				</div>
				{
					hasUser
					?
					<ul>
						<li><a href="/">{user.email}</a></li>
						<li><a href="#logout" onClick={handleLogout}>logout</a></li>
					</ul>
					:
					<ul>
						<li><Link to='/login'>Iniciar Sesión</Link></li>
					</ul>
				}
			</nav>
		</header>
	);
};

export default Header;
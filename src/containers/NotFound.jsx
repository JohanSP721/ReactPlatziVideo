import { Link } from 'react-router-dom';

import '../assets/styles/components/NotFound.scss';

const NotFound = () =>
(
	<section className="not-found">
		<h1 className="not-found__error">404</h1>
		<p>Página no encontrada</p>
		<Link to="/">
			<p>Regresa al home</p>
		</Link>
  	</section>
);

export default NotFound;
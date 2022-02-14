import { useDispatch } from 'react-redux';

import { getVideoSearch } from '../actions';

import '../assets/styles/components/Search.scss';

const Search = () =>
{
	const dispatch = useDispatch();
	
	const handleInput = e =>
	{
		dispatch(getVideoSearch(e.target.value));
	}
	
	return(
		<section className="main">
			<h1 className="main__title">¿Que quieres ver hoy?</h1>
			<input onKeyUp={handleInput} className="input" type="text" name="Buscar" placeholder="Buscar..."/>
		</section>
	);
};

export default Search;
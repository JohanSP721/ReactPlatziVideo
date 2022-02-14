import  { useRef, useEffect } from 'react' ;

import { Link } from 'react-router-dom';

import { useDispatch } from 'react-redux';

import { setFavorite, deleteFavorite } from '../actions';

import '../assets/styles/components/CarouselItem.scss';

import play from '../assets/static/play-icon.png';
import add from '../assets/static/plus-icon.png';
import remove from '../assets/static/remove-icon.webp';


const CarouselItem = props =>
{
	const { isList, id, cover, title, year, contentRating, duration } = props;
	const itemRef = useRef();
	const dispatch = useDispatch();

	useEffect(() =>
	{
		const { current } = itemRef;

		const parentNode = itemRef.current.parentNode;
		const childNodes = parentNode.childNodes;


		const handleMouseChild = (childNode, current) =>
		{
			if(childNode.parentNode === current.parentNode)
			{
				current.classList.toggle('carousel-item__back');
			}

			childNode.classList.remove('carousel-item__back');
		}

		const handleMouseCurrent = (childNode, current) =>
		{
			if(childNode.parentNode === current.parentNode)
			{
				childNode.classList.toggle('carousel-item__back');
			}

			current.classList.remove('carousel-item__back');
		}

		for(let childNode of childNodes)
		{
			childNode.classList.add('carousel-item__back');
			childNode.classList.toggle('carousel-item__back');

			if(isList)
			{
				childNode.addEventListener('mouseover', () => handleMouseChild(childNode, current));
				childNode.addEventListener('mouseout', () => handleMouseChild(childNode, current));
				current.addEventListener('mouseover', () => handleMouseCurrent(childNode, current));
				current.addEventListener('mouseout', () => handleMouseCurrent(childNode, current));
			}

			else
			{
				current.addEventListener('mouseover', () => handleMouseCurrent(childNode, current));
				current.addEventListener('mouseout', () => handleMouseCurrent(childNode, current));
			}
		}

		return () =>
		{
			for(let childNode of childNodes)
			{
				childNode.classList.remove('carousel-item__back');
				childNode.removeEventListener('mouseover', () => handleMouseChild(childNode, current));
				childNode.removeEventListener('mouseout', () => handleMouseChild(childNode, current));
				current.removeEventListener('mouseover', () => handleMouseCurrent(childNode, current));
				current.removeEventListener('mouseout', () => handleMouseCurrent(childNode, current));
			}
		}
	}, []);

	const handleSetFavorite = () =>
	{
		dispatch(setFavorite
		(
			{
				id, cover, title, year, contentRating, duration
			}
		));
	};

	const handleDeleteFavorite = itemId =>
	{
		dispatch(deleteFavorite(itemId));
	};
	
	return(
		<article ref={itemRef} className="carousel-item">
			<img src={cover}  alt={title} className="carousel-item__img"/>
			<div className="carousel-item__details">
				<div>
					<Link to={`/player/${id}`}><img src={play} alt="Play"/></Link>
					{
						isList
						?
						<img src={remove} alt="remove of my list" onClick={()=> handleDeleteFavorite(id)}/>
						:
						<img src={add} alt="add to my list" onClick={handleSetFavorite}/>
					}
				</div>
				<p>{title}</p>
				<p>{`${year} ${contentRating} ${duration}`}</p>
			</div>
		</article>
	);
};

export default CarouselItem;
import { useState, useEffect, useRef } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { Redirect, useHistory, useParams } from 'react-router-dom';

import { getVideoSource } from '../actions';

import '../assets/styles/components/Player.scss';

const Player = () =>
{
	const { id } = useParams();
	const history = useHistory();
	const playing = useSelector(state => state.playing);
	const dispatch = useDispatch();
	const [loading, setLoading] = useState(true);

	useEffect(() =>
	{
		setLoading(false);
	});
	
	useEffect(() =>
	{
		dispatch(getVideoSource(id));
	},[]);

	const hasPlaying = Object.keys(playing).length > 0;
	const buttonPlayerContainer = useRef();
	
	useEffect(() =>
	{
		setTimeout(() =>
		{
			const { current } = buttonPlayerContainer;
			const prevNode = current.previousSibling;
			let hover = null
			
			const mouseMovePlayer = () =>
			{
				current.classList.add('Player__back--hover');
				
				clearTimeout(hover);
				
				hover = setTimeout(() =>
				{
					current.classList.remove('Player__back--hover');
				},2500);
			};

			const mouseOutPlayer = () =>
			{
				current.classList.remove('Player__back--hover');
			};

			prevNode.addEventListener('mousemove', mouseMovePlayer);
			prevNode.addEventListener('mouseout', mouseOutPlayer);
			current.addEventListener('mousemove', mouseMovePlayer);
			current.addEventListener('mouseout', mouseOutPlayer);
		});
	});

	return loading ? <h1>Cargando...</h1>
	:
	hasPlaying ? (
		<section className="Player">
			<video controls autoPlay>
				<source src={playing.source} type="video/mp4"/>
			</video>
			<article ref={buttonPlayerContainer} className="Player__back">
				<button  onClick={() => { history.goBack() }} type="button">Regresar</button>
			</article>
		</section>
	):
	(
		<Redirect to="/404/"/>
	);
};

export default Player;
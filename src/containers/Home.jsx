import { useSelector } from 'react-redux';

import Search from '../components/Search';
import Carousel from '../components/Carousel';
import CarouselContainer from '../components/CarouselContainer';
import CarouselItem from '../components/CarouselItem';

const Home = () =>
{
	
	const myList = useSelector(state => state.myList);
	const trends = useSelector(state => state.trends);
	const originals = useSelector(state => state.originals);	
	const searchResults = useSelector(state => state.searchResults);

	return(
		<>
			<Search/>
			{
				searchResults.length > 0 &&
					(
						<Carousel title="Resultados De Búsqueda">
							<CarouselContainer>
								{
									searchResults.map(item =>
										<CarouselItem key={item.id} {...item}/>
									)
								}
							</CarouselContainer>
						</Carousel>
					)
			}
			{
				myList.length > 0 &&
					(
						<Carousel title="Mi Lista">
							<CarouselContainer>
								{
									myList.map(item =>
										<CarouselItem isList key={item.id} {...item}/>
									)
								}
							</CarouselContainer>
						</Carousel>
					)
			}
			{
				trends.length > 0 &&
					(
						<Carousel title="Tendencias">
							<CarouselContainer>
								{
									trends.map(item =>
										<CarouselItem key={item.id} {...item}/>
									)
								}
							</CarouselContainer>
						</Carousel>
					)
			}
			{
				originals.length > 0 &&
					(
						<Carousel title="Originales PlatziVideo">
							<CarouselContainer>
								{
									originals.map(item =>
										<CarouselItem key={item.id} {...item}/>
									)
								}
							</CarouselContainer>
						</Carousel>
					)
			}
		</>
	);
};

export default Home;
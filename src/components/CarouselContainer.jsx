import '../assets/styles/components/CarouselContainer.scss';

const CarouselContainer = ({children}) =>
(
	<div className="carousel__container" style={{minWidth: `calc(23.5rem * ${children.length})`}}>
		{children}
	</div>
);

export default CarouselContainer;
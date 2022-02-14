import '../assets/styles/components/Carousel.scss';

const Carousel = ({children, ...props}) =>
(
	<section className="carousel">
		<h2 className="categories__title">{props.title}</h2>
		{children}
	</section>
);

export default Carousel;
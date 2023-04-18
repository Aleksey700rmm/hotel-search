import Slider from 'react-slick';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import './carousel.sass'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const SimpleCarousel = () => {

    const {pics} = useTypedSelector(state => state.hotels)

    const addSlides = (arr: string[]) => {
        return arr.map((item, i) => {
            return (
                <img src={item} alt="pic" />
            )
        })
    }

    const elements = addSlides(pics)

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
    };
  

    return (
        <div>
            <h2> Multiple items </h2>
            <Slider {...settings}>
            {elements}
            {/* <div>
                <h3>1</h3>
            </div>
            <div>
                <h3>2</h3>
            </div>
            <div>
                <h3>3</h3>
            </div>
            <div>
                <h3>4</h3>
            </div>
            <div>
                <h3>5</h3>
            </div>
            <div>
                <h3>6</h3>
            </div>
            <div>
                <h3>7</h3>
            </div>
            <div>
                <h3>8</h3>
            </div>
            <div>
                <h3>9</h3>
            </div> */}
            </Slider>
        </div>
        );

}

export default SimpleCarousel;
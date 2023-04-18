import Slider from "react-slick";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import "./carousel.sass";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SimpleCarousel = () => {
    const { pics } = useTypedSelector((state) => state.hotels);

    const addSlides = (arr: string[]) => {
        return arr.map((item, i) => {
            return <img src={item} alt="pic" />;
        });
    };

    const elements = addSlides(pics);

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
    };

    return (
        <div>
            <Slider {...settings}>{elements}</Slider>
        </div>
    );
};

export default SimpleCarousel;

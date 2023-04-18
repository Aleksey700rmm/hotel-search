import SimpleCarousel from "../../carousel/Carousel";
import FavoriteList from "../../favoriteList/FavoriteList";
import HotelsForm from "../../hotelsForm/HotelsForm";
import HotelsHeader from "../../hotelsHeader/HotelsHeader";
import HotelsList from "../../hotelsList/HotelsList";
import MainHeader from "../../mainHeader/MainHeader";

import './mainPage.sass'

const MainPage = () => {
    return (
        <div className="main-page">
            <MainHeader/>
            <div className="main-page__wrapper">
                <div className="main-page_left">
                    <HotelsForm/>
                    <FavoriteList/>
                </div>
                <div className="main-page__hotels">
                    <HotelsHeader/>
                    <SimpleCarousel/>
                    <HotelsList/>
                </div>
            </div>
        </div>
    )
}

export default MainPage;
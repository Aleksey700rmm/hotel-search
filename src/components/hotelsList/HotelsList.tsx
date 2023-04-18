import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useCallback } from "react";
import HotelsListItem from "../hotelsListItem/HotelsListItem";
import { addFavorites } from "../../store/action-creators/hotels";
import "./hotelsList.sass";

const HotelsList: React.FC = () => {
    const { hotels } = useTypedSelector((state) => state.hotels);

    const dispatch = useDispatch();

    const countFavoriteHotels = hotels.filter((item) => item?.favorite).length;

    const end = countFavoriteHotels > 1 ? "отеля" : countFavoriteHotels === 1 ? "отель" : "отелей";

    const onAddFavorites = useCallback(
        (hotelId: number) => {
            dispatch(addFavorites(hotelId));
            console.log(hotelId);
        },
        [dispatch]
    );

    const renderHotelsList = (hotelsList: any[]) => {
        console.log(hotels);
        return hotelsList.map((item) => {
            const { hotelId, hotelName, stars, priceAvg, date, days, favorite } = item;
            return (
                <div className="hotels-list__item">
                    <div className="hotels-list__house"></div>
                    <HotelsListItem
                        onAddFavorites={() => onAddFavorites(hotelId)}
                        key={hotelId}
                        hotelName={hotelName}
                        stars={stars}
                        priceAvg={priceAvg}
                        date={date}
                        days={days}
                        favorite={favorite}
                    />
                </div>
            );
        });
    };

    const elements = renderHotelsList(hotels);

    return (
        <div>
            <div className="hotels-list-header">
                Добавлено в Избранное: {countFavoriteHotels} {end}
            </div>
            <div className="hotels-list">{elements}</div>
        </div>
    );
};

export default HotelsList;

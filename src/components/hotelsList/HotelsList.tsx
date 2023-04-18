import { useDispatch } from "react-redux"
import { useTypedSelector } from "../../hooks/useTypedSelector"
import {useEffect, useCallback} from 'react'
import { requestHotels } from "../../store/action-creators/hotels"
import HotelsListItem from "../hotelsListItem/HotelsListItem"
import { addFavorites } from "../../store/action-creators/hotels"
import './hotelsList.sass'

const HotelsList: React.FC = () => {
    const {error, hotels, loading} = useTypedSelector(state => state.hotels)

    const dispatch = useDispatch()

    const onAddFavorites = useCallback((hotelId: number) => {
        dispatch(addFavorites(hotelId))
        console.log(hotelId)
    }, [dispatch])

    const renderHotelsList = (hotelsList: any[]) => {
        console.log(hotels)
        return hotelsList.map((item) => {
            const {hotelId, hotelName, stars, priceAvg, date, days, favorite} = item 
            return (
                <div className="hotels-list__item">
                    <div className="hotels-list__house"></div>
                    <HotelsListItem onAddFavorites={() => onAddFavorites(hotelId)} key={hotelId} hotelName={hotelName} stars={stars} priceAvg={priceAvg} date={date} days={days} favorite={favorite}/>
                </div>
            )
        })
    }

    useEffect(() => {
        // dispatch(requestHotels())
    }, [])

    const elements = renderHotelsList(hotels)

    return (
        <div className="hotels-list">
            

            {elements}
        </div>
    )
}

export default HotelsList;
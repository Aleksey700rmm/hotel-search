import './favoriteList.sass'
import { useTypedSelector } from '../../hooks/useTypedSelector';
import HotelsListItem from '../hotelsListItem/HotelsListItem';
import {useCallback} from 'react'
import { useDispatch } from 'react-redux';
import { addFavorites } from '../../store/action-creators/hotels';
import Filters from '../filters/Filters';
const FavoriteList = () => {

    const favoriteHotels = useTypedSelector(state => {
        if (state.hotels.filter === 'rating') {
            return state.hotels.hotels.filter(item => item?.favorite).sort((a, b) => a.stars + b.stars)
        }
        if (state.hotels.filter === 'price') {
            return state.hotels.hotels.filter(item => item?.favorite).sort((a, b) => a.priceAvg + b.priceAvg)
        }
        return state.hotels.hotels.filter(item => item?.favorite)
    })

    const dispatch = useDispatch()

    const onAddFavorites = useCallback((hotelId: number) => {
        dispatch(addFavorites(hotelId))
        console.log(hotelId)
    }, [dispatch])

    const renderFavoritesList = (hotels: any[]) => {
        return hotels.map((item) => {
            const {hotelId, hotelName, stars, priceAvg, date, days, favorite} = item 
            return (
                <HotelsListItem key={hotelId} onAddFavorites={() => onAddFavorites(hotelId)} hotelName={hotelName} stars={stars} priceAvg={priceAvg} date={date} days={days} favorite={favorite} fav/>
            )
        })
    }

    const elements = renderFavoritesList(favoriteHotels)

    return (
        <div className='favorite'>
            <h2 className='favorite__header'>Избранное</h2>
            <Filters/>
            <div>
                <div className='favorite__list'>{elements}</div>
            </div>
        </div>
    )
}

export default FavoriteList;
import { useDispatch } from "react-redux"
import { useTypedSelector } from "../hooks/useTypedSelector"
import {useEffect} from 'react'
import { requestHotels } from "../store/action-creators/hotels"

const HotelsList: React.FC = () => {
    const {error, hotels, loading} = useTypedSelector(state => state.hotels)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(requestHotels())
    }, [])

    return (
        <div>
            
        </div>
    )
}

export default HotelsList;
import { HotelsActionTypes } from "../../types/hotels"

export const fetchHotels = () => {
    return {type: HotelsActionTypes.FETCH_HOTELS}
}

export const fetchHotelsSuccess = (data: any[]) => {
    return {type: HotelsActionTypes.FETCH_HOTELS_SUCCESS, payload: data}
}

export const fetchHotelsError = () => {
    return {type: HotelsActionTypes.FETCH_HOTELS_ERROR}
}

export const requestHotels = () => {
    return {type: 'REQUEST_HOTELS'}
}
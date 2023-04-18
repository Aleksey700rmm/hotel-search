import { HotelsActionTypes } from "../../types/hotels"
import { RequestParams } from "../../types/hotels"
import { HotelParams } from "../../types/hotels"

export const fetchHotels = () => {
    return {type: HotelsActionTypes.FETCH_HOTELS}
}

export const fetchHotelsSuccess = (data: any[]) => {
    return {type: HotelsActionTypes.FETCH_HOTELS_SUCCESS, payload: data}
}

export const fetchHotelsError = () => {
    return {type: HotelsActionTypes.FETCH_HOTELS_ERROR}
}

export const requestHotels = (requestParams: RequestParams) => {
    return {type: 'REQUEST_HOTELS', payload: requestParams}
}

export const addFavorites = (id: number) => {
    return {type: 'ADD_FAVORITES', payload: id}
}

export const addFilters = (name: string) => {
    return {type: 'ADD_FILTERS', payload: name}
}
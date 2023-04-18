export interface HotelsState {
    hotels: any[];
    loading: boolean;
    error: null | string;
    filter: null | string;
    pics: string[]
}

export enum HotelsActionTypes {
    FETCH_HOTELS = 'FETCH_HOTELS',
    FETCH_HOTELS_SUCCESS = 'FETCH_HOTELS_SUCCESS',
    FETCH_HOTELS_ERROR = 'FETCH_HOTELS_ERROR',
    REQUEST_HOTELS = 'REQUEST_HOTELS',
    ADD_HOTEL_PARAMS = 'ADD_HOTEL_PARAMS',
    ADD_FAVORITES = 'ADD_FAVORITES',
    ADD_FILTERS = 'ADD_FILTERS'
}

interface RequestHotelAction {
    type: HotelsActionTypes.REQUEST_HOTELS,
    payload: HotelParams
}

interface FetchHotelsAction {
    type: HotelsActionTypes.FETCH_HOTELS; 
}

interface FetchHotelsSuccessAction {
    type: HotelsActionTypes.FETCH_HOTELS_SUCCESS; 
    payload: any[]
}

interface FetchHotelsErrorAction {
    type: HotelsActionTypes.FETCH_HOTELS_ERROR; 
    payload: string
}

interface AddFavoritesAction {
    type: HotelsActionTypes.ADD_FAVORITES,
    payload: string
}

interface AddFiltersAction {
    type: HotelsActionTypes.ADD_FILTERS,
    payload: string
}

export type HotelsAction = FetchHotelsAction | FetchHotelsSuccessAction | FetchHotelsErrorAction | RequestHotelAction | AddFavoritesAction | AddFiltersAction 

export interface HotelParams {
    location: string;
    date: string;
    days: number
}

export interface RequestParams {
    location: string,
    checkIn: string,
    checkOut: string
}

export interface ListItemProps {
    hotelName?: string
    stars?: number
    priceAvg?: number
    key?: number
    date?: string
    days?: number
    onAddFavorites(hotelId: number | undefined): void
}
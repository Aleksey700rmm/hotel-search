import { HotelsAction, HotelsActionTypes, HotelsState } from "../../types/hotels"

const initialState: HotelsState = {
    hotels: [],
    loading: false,
    error: null
}

export const hotels = (state = initialState, action: HotelsAction): HotelsState => {
    switch (action.type) {
        case HotelsActionTypes.FETCH_HOTELS:
            return {
                loading: true,
                error: null,
                hotels: []
            }
        case HotelsActionTypes.FETCH_HOTELS_SUCCESS:
            return {
                loading: false,
                error: null,
                hotels: action.payload
            }
        case HotelsActionTypes.FETCH_HOTELS_ERROR:
            return {
                loading: false,
                error: action.payload,
                hotels: []
            }
        default:
            return state
    }
}
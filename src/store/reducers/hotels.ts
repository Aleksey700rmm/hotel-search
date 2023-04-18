import { HotelsAction, HotelsActionTypes, HotelsState } from "../../types/hotels";

const initialState: HotelsState = {
    hotels: [],
    loading: false,
    error: null,
    filter: null,
    login: null,
    password: null,
    pics: ["pic1.jpg", "pic2.jpg", "pic3.jpg"],
};

export const hotels = (state = initialState, action: HotelsAction): HotelsState => {
    switch (action.type) {
        case HotelsActionTypes.FETCH_HOTELS:
            return {
                ...state,
                loading: true,
                error: null,
                hotels: [],
            };
        case HotelsActionTypes.FETCH_HOTELS_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                hotels: action.payload,
            };
        case HotelsActionTypes.FETCH_HOTELS_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
                hotels: [],
            };
        case HotelsActionTypes.ADD_FAVORITES:
            return {
                ...state,
                hotels: state.hotels.map((item) => {
                    if (item.hotelId === action.payload) {
                        return { ...item, favorite: !item.favorite };
                    }
                    return item;
                }),
            };
        case HotelsActionTypes.ADD_FILTERS:
            return {
                ...state,
                filter: action.payload,
            };
        case HotelsActionTypes.SET_USER:
            return {
                ...state,
                login: action.payload.login,
                password: action.payload.password,
            };
        case HotelsActionTypes.REMOVE_USER:
            return {
                ...state,
                login: null,
                password: null,
            };
        default:
            return state;
    }
};

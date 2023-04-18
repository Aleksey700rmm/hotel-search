import { HotelsActionTypes } from "../../types/hotels";
import { RequestParams } from "../../types/hotels";
import { UserInfo } from "../../types/hotels";

export const fetchHotels = () => {
    return { type: HotelsActionTypes.FETCH_HOTELS };
};

export const fetchHotelsSuccess = (data: any[]) => {
    return { type: HotelsActionTypes.FETCH_HOTELS_SUCCESS, payload: data };
};

export const fetchHotelsError = () => {
    return { type: HotelsActionTypes.FETCH_HOTELS_ERROR };
};

export const requestHotels = (requestParams: RequestParams) => {
    return { type: HotelsActionTypes.REQUEST_HOTELS, payload: requestParams };
};

export const addFavorites = (id: number) => {
    return { type: HotelsActionTypes.ADD_FAVORITES, payload: id };
};

export const addFilters = (name: string) => {
    return { type: HotelsActionTypes.ADD_FILTERS, payload: name };
};

export const setUser = (user: UserInfo) => {
    return { type: HotelsActionTypes.SET_USER, payload: user };
};

export const removeUser = () => {
    return { type: HotelsActionTypes.REMOVE_USER };
};

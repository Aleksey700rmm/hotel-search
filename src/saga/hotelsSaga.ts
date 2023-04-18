import { put, takeEvery, call } from "redux-saga/effects";
import { fetchHotels, fetchHotelsError, fetchHotelsSuccess } from "../store/action-creators/hotels";

function* fetchHotelsWorker(action: any) {
    const { location, checkIn, checkOut, days } = action.payload;
    console.log(days);
    try {
        console.log(location, checkIn, checkOut);
        yield put(fetchHotels());
        const arr: any[] = yield call(() => {
            return fetch(
                `http://engine.hotellook.com/api/v2/cache.json?location=${location}&currency=rub&checkIn=${checkIn}&checkOut=${checkOut}&limit=10`
            ).then((res) => res.json());
        });
        const data = arr.map((item) => {
            return { ...item, date: checkIn.split("-").reverse().join("-"), days, favorite: false };
        });
        yield put(fetchHotelsSuccess(data));
    } catch (error) {
        yield put(fetchHotelsError());
    }
}

export function* hotelsWatcher() {
    yield takeEvery("REQUEST_HOTELS", fetchHotelsWorker);
}

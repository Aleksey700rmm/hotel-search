import {put, takeEvery, call} from 'redux-saga/effects'
import { HotelsActionTypes } from '../types/hotels'
import { HotelParams } from '../types/hotels'
import { RequestParams } from '../types/hotels'
import { fetchHotels, fetchHotelsError, fetchHotelsSuccess } from '../store/action-creators/hotels'
// const fetchHotels = () => fetch('https://jsonplaceholder.typicode.com/todos/1')

// export interface HotelsWorker {
//     data?: any;
//     hotels?: any
// }

function* fetchHotelsWorker(action: any) {
    const {location, checkIn, checkOut, days} = action.payload
    console.log( days)
    try {
        console.log(location, checkIn, checkOut)
        yield put(fetchHotels()) // сюда экшн лодинг
        const arr: any[] = yield call(() => {
            return fetch(`http://engine.hotellook.com/api/v2/cache.json?location=${location}&currency=rub&checkIn=${checkIn}&checkOut=${checkOut}&limit=10`)
                .then(res => res.json())
        })
        const data = arr.map(item => {
            return {...item, date: checkIn.split('-').reverse().join('-'), days, favorite: false}
        })
        yield put(fetchHotelsSuccess(data)) // сюда успешный экшн пэйлоад дата
    } catch (error) {
        yield put(fetchHotelsError()) // сюда экшн с ошибкой
    }
    // const data = yield call(fetchHotels)
    // const json = yield call(() => new Promise(res => res(data.json())))
    // yield put() // сюда передадим экшн фетч саксесс, и в него json
}

export function* hotelsWatcher() {
    yield takeEvery('REQUEST_HOTELS', fetchHotelsWorker)
}
import {put, takeEvery, call} from 'redux-saga/effects'
import { HotelsActionTypes } from '../types/hotels'
// const fetchHotels = () => fetch('https://jsonplaceholder.typicode.com/todos/1')

// export interface HotelsWorker {
//     data?: any;
//     hotels?: any
// }

function* fetchHotelsWorker() {
    try {
        yield put({type: HotelsActionTypes.FETCH_HOTELS}) // сюда экшн лодинг
        const data: any[] = yield call(() => {
            return fetch('https://jsonplaceholder.typicode.com/todos/1')
                .then(res => res.json())
        })
        yield put({type: HotelsActionTypes.FETCH_HOTELS_SUCCESS, payload: data}) // сюда успешный экшн пэйлоад дата
    } catch (error) {
        yield put({type: HotelsActionTypes.FETCH_HOTELS_ERROR}) // сюда экшн с ошибкой
    }
    // const data = yield call(fetchHotels)
    // const json = yield call(() => new Promise(res => res(data.json())))
    // yield put() // сюда передадим экшн фетч саксесс, и в него json
}

export function* hotelsWatcher() {
    yield takeEvery('REQUEST_HOTELS', fetchHotelsWorker)
}
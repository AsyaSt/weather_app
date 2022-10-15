import {put, call, takeLatest} from 'redux-saga/effects';
import axios from 'axios';
import {GET_WEATHER, setWeather} from './actions/getWeatherAction';
import {GET_FORECAST, setForecast } from './actions/getForecastAction';

export function requestGetWeather(city) {
    return axios.request({
        method: 'get',
        url: `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=bf35cac91880cb98375230fb443a116f&units=metric`
    })
}

export function* handleGetWeather(action) {
    try{
        const response = yield call(() => requestGetWeather(action.city));
        const {data} = response;
        yield put(setWeather(data))

    } catch(error) {
        console.log(error);
    }
}

export function requestGetForecast(city) {
    return axios.request({
        method: 'get',
        url: `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=bf35cac91880cb98375230fb443a116f&units=metric`
    })
}

export function* handleGetForecast(action) {
    try{
        const response = yield call(() => requestGetForecast(action.city));
        const {data} = response;
        yield put(setForecast(data))

    } catch(error) {
        console.log(error);
    }
}

export function* watcherSaga () {
    yield takeLatest(GET_WEATHER, handleGetWeather);
    yield takeLatest(GET_FORECAST, handleGetForecast);
}
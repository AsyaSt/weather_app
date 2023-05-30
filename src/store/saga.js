import {put, call, takeLatest} from 'redux-saga/effects';
import axios from 'axios';
import {GET_WEATHER, setWeather} from './actions/getWeatherAction';
import {GET_FORECAST, setForecast } from './actions/getForecastAction';
import { GET_AQ, setAQ } from './actions/getAQ';
import { GET_WEATHER_BY_COORDS} from './actions/getWeatherByCoords';


export function requestGetWeather(city) {
    return axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=bf35cac91880cb98375230fb443a116f&units=metric`)
}

export function* handleGetWeather(action) {
    try{
        const response = yield call(() => requestGetWeather(action.city));
        const {data} = response;
        yield put(setWeather(data));
        yield (handleGetAQ({lat: data.coord.lat, lon: data.coord.lon}));
    } catch(error) {
        console.log(error);
    }
}

export function requestGetWeatherByCoords(lat, lon) {
    return axios.get(`http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&appid=bf35cac91880cb98375230fb443a116f&units=metric`)
}

export function* handleGetWeatherByCoords(action) {
    try{
        const response = yield call(() => requestGetWeatherByCoords(action.lat, action.lon));
        const {data} = response;
        const cityName = {city: data[0].name};
        yield (handleGetWeather(cityName))
    } catch(error) {
        console.log(error);
    }
}

export function requestGetAQ(lat, lon) {
    return axios.request({
        method: 'get',
        url:`https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=bf35cac91880cb98375230fb443a116f`
    })
}

export function* handleGetAQ(action) {
    try{
        const response = yield call(() => requestGetAQ(action.lat, action.lon));
        const {data} = response;
        yield put(setAQ(data))

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
    yield takeLatest(GET_WEATHER_BY_COORDS, handleGetWeatherByCoords);
    yield takeLatest(GET_FORECAST, handleGetForecast);
    yield takeLatest(GET_AQ, handleGetAQ);
}
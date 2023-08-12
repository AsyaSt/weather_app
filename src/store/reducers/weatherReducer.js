import {SET_WEATHER} from '../actions/getWeatherAction'
import {SET_FORECAST} from '../actions/getForecastAction'
import { SET_AQ } from '../actions/getAQ';
import { SET_SAVEDCITY } from '../actions/getSavedCityAction';
import { SET_CHANGE_THEME } from '../actions/changeTheme';


const initialState = {
    weather: undefined, 
    forecast: undefined,
    aq: undefined,
    theme: localStorage.theme
};

export let weatherReducer =  (state = initialState, action) => {
    switch(action.type){
        case SET_WEATHER:
            const {weather} = action;
            return {...state, weather}
        case SET_AQ:
            const {aq} = action;
            return {...state, aq}
        case SET_FORECAST:
            const {forecast} = action;
            return {...state, forecast}
        case SET_CHANGE_THEME:
            const {theme} = action;
            return {...state, theme}
        case SET_SAVEDCITY:
            const {savedCityWeather} = action;
            return {...state, savedCityWeather}
        default:
            return state;
    }
}
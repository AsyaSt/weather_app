import {SET_WEATHER} from '../actions/getWeatherAction'
import {SET_FORECAST} from '../actions/getForecastAction'


const initialState = {
    weather: undefined, 
    forecast: undefined
};

export let weatherReducer =  (state = initialState, action) => {
    switch(action.type){
        case SET_WEATHER:
            const {weather} = action;
            return {...state, weather}
        case SET_FORECAST:
            const {forecast} = action;
            return {...state, forecast}
        default:
            return state;
    }
}
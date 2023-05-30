export const GET_WEATHER_BY_COORDS = 'GET_WEATHER_BY_COORDS';
export const SET_WEATHER_BY_COORDS = 'SET_WEATHER_BY_COORDS';

export const getWeatherByCoords = (lat, lon) => ({
    type: GET_WEATHER_BY_COORDS,
    lat,
    lon
});

export const setWeatherByCoords = (weatherByCoords) => ({
    type: SET_WEATHER_BY_COORDS,
    weatherByCoords
});
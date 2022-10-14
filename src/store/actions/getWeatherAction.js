export const GET_WEATHER = 'GET_WEATHER';
export const SET_WEATHER = 'SET_WEATHER';

export const getWeather = (city) => ({
    type: GET_WEATHER,
    city
});

export const setWeather = (weather) => ({
    type: SET_WEATHER,
    weather
});
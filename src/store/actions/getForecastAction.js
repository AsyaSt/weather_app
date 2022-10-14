export const GET_FORECAST = 'GET_FORECAST';
export const SET_FORECAST ='SET_FORECAST';



export const getForecast = (city) => ({
    type: GET_FORECAST,
    city
});

export const setForecast = (forecast) => ({
    type: SET_FORECAST,
    forecast
});
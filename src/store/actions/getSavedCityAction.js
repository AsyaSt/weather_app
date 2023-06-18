export const GET_SAVEDCITY = 'GET_SAVEDCITY';
export const SET_SAVEDCITY ='SET_SAVEDCITY';

// let cities = (JSON.parse(localStorage.savedCity) || []);

export const getSavedCity = (cities) => ({
    type: GET_SAVEDCITY,
    cities
});

export const setSavedCity = (savedCityWeather) => ({
    type: SET_SAVEDCITY,
    savedCityWeather
});
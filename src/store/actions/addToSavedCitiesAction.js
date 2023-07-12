export const ADD_TO_SAVEDCITY = 'ADD_TO_SAVEDCITY';
export const SET_ADD_TO_SAVEDCITY ='SET_ADD_TO_SAVEDCITY';

// let cities = (JSON.parse(localStorage.savedCity) || []);

export const addToSavedCity = (city) => {
    // localStorage.savedCity = JSON.stringify([city, ...JSON.parse(localStorage.savedCity)]);
return {
    type: ADD_TO_SAVEDCITY,
    cities: (!JSON.parse(localStorage.savedCity).includes(city) ?  [city, ...JSON.parse(localStorage.savedCity)] : JSON.parse(localStorage.savedCity))
}
};

// export const setSavedCity = (savedCityWeather) => ({
//     type: SET_SAVEDCITY,
//     savedCityWeather
// });
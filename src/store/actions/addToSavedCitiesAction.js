export const ADD_TO_SAVEDCITY = 'ADD_TO_SAVEDCITY';
export const SET_ADD_TO_SAVEDCITY ='SET_ADD_TO_SAVEDCITY';

export const addToSavedCity = (city) => {
return {
    type: ADD_TO_SAVEDCITY,
    cities: (!JSON.parse(localStorage.savedCity).includes(city) ?  [city, ...JSON.parse(localStorage.savedCity)] : JSON.parse(localStorage.savedCity))
}
};

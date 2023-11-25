export const GET_SEARCH_CITY = 'GET_SEARCH_CITY';
export const SET_SEARCH_CITY ='SET_SEARCH_CITY';



export const getSearchCity = (input) => ({
    type: GET_SEARCH_CITY,
    input
});

export const setSearchCity = (searchcity) => ({
    type: SET_SEARCH_CITY,
    searchcity
});
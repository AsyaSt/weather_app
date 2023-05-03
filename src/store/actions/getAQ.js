export const GET_AQ = 'GET_AQ';
export const SET_AQ = 'SET_AQ';

export const getAQ = (lat, lon) => ({
    type: GET_AQ,
    lat, 
    lon
});

export const setAQ = (aq) => ({
    type: SET_AQ,
    aq
});
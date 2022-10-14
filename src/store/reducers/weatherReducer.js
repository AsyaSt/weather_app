const initialState = {
    weather: undefined, 
    forecast: undefined
};

export let weatherReducer =  (state = initialState, action) => {
    switch(action.type){
        default:
            return state;
    }
}
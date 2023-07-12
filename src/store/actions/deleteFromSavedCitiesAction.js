export const DELETE_FROM_SAVEDCITY = 'DELETE_FROM_SAVEDCITY';

export const deleteFromSavedCity = (city) => {
    localStorage.savedCity = JSON.stringify([...JSON.parse(localStorage.savedCity).filter(cityToSave => cityToSave !== city)]);
return {
    type: DELETE_FROM_SAVEDCITY,
    cities: [...JSON.parse(localStorage.savedCity).filter(cityToSave => cityToSave !== city)]
}
};
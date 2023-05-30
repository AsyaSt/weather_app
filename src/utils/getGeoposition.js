import { getWeatherByCoords } from "../store/actions/getWeatherByCoords";
import { store } from "../store/store";

let geoSuccess = (e) => {
    store.dispatch(getWeatherByCoords(e.coords.latitude, e.coords.longitude));
}
export const getGeoposition = () => {
    navigator.geolocation.getCurrentPosition(geoSuccess)
}
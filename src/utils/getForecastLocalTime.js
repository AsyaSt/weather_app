import { store } from "../store/store";

export const localTimeInForecast = (time) => {
    let timezone = store.getState().weatherReducer?.forecast?.city?.timezone;
    let [todayDate, todayTime] = time.split(' ');
    let [year, month, day] = todayDate.split('-');
    let [hours, minutes] = todayTime.split(':');
    hours = +hours + (timezone /60 /60) + (new Date().getTimezoneOffset() / 60);
    let timeForForecast = new Date(year, month-1, day, hours, minutes);
    return timeForForecast;
}
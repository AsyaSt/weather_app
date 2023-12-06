import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";

let getsunset = (time, timezone) => {
    let newDate = new Date(time * 1000);
    let s = newDate.setMinutes(newDate.getMinutes() + newDate.getTimezoneOffset() + (timezone/60))
    return new Date(s);
}


export const WeatherSunrise = () => {
    const weather = useSelector(state =>  state.weatherReducer.weather); 
    return (
        <div className='weather-detail'>
            <div>
                <div className='weather-detail__name'>
                    <FontAwesomeIcon icon={faSun}  />
                    <p>Sunrise</p>
                </div>

                <p className='weather-detail__info'>
                    {getsunset(weather?.sys?.sunrise, weather?.timezone).getHours()}:{getsunset(weather?.sys?.sunrise, weather?.timezone).getMinutes()} AM
                </p> 
            </div>
            <div>
                <div className='weather-detail__name'>
                    <FontAwesomeIcon icon={faMoon}  />
                    <p>Sunset</p>
                </div>

                <p className='weather-detail__info'>
                {getsunset(weather?.sys?.sunset, weather?.timezone).getHours()}:{getsunset(weather?.sys?.sunset, weather?.timezone).getMinutes()} PM
                </p> 
            </div>
            <div className="weather-detail-shadow"></div>
            <div className="weather-detail-shadow2"></div>
        </div>
    )
}
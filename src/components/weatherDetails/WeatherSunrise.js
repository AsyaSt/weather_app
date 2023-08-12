import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";

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
                    {new Date(weather?.sys?.sunrise * 1000).getHours()}:{new Date(weather?.sys?.sunrise * 1000).getMinutes()} AM
                </p> 
            </div>
            <div>
                <div className='weather-detail__name'>
                    <FontAwesomeIcon icon={faMoon}  />
                    <p>Sunset</p>
                </div>

                <p className='weather-detail__info'>
                {new Date(weather?.sys?.sunset * 1000).getHours()}:{new Date(weather?.sys?.sunset * 1000).getMinutes()} PM
                </p> 
            </div>
        </div>
    )
}
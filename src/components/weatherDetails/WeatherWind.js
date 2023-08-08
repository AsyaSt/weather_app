import { faWind } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";

export const WeatherWind = () => {
    const weather = useSelector(state =>  state?.weatherReducer?.weather); 
    return (
        <div className='weather-detail'>
            <div className='weather-detail__name'>
                <FontAwesomeIcon icon={faWind}  />
                <p>Wind</p>
            </div>

            <div className='weather-detail__wind'>
                <div className='north'>N</div>
                <div className='west'>W</div>
                <div className='south'>S</div>
                <div className='east'>E</div>

                <div className='weather-detail__wind-info'>{weather?.wind?.speed} <br/> m/s</div>
            </div>
        
        </div>
    )
}
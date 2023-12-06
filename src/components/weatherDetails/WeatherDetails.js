import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEye, faDroplet, faTemperatureHalf} from '@fortawesome/free-solid-svg-icons';
import './weatherDetails.styles.css';
import { useSelector } from 'react-redux';
import { WeatherAQI } from './WeatherAQI';
import { WeatherWind } from './WeatherWind';
import { WeatherSunrise } from './WeatherSunrise';

const WeatherDetailsItem = ({icon, detailName, detailInfo}) => {
    return(
        <div className='weather-detail'>
            <div className='z'>
                <div className="weather-detail-shadow"/>
                <div className="weather-detail-shadow2"/>
            </div>
            <div>
                <div className='weather-detail__name'>
                    <FontAwesomeIcon icon={icon}  />
                    <p>{detailName}</p>
                </div>
                <p className='weather-detail__info'>{detailInfo}</p> 
            </div>

        </div>
    )
}


export const WeatherDetailsAll = () => {
    const weather = useSelector(state =>  state?.weatherReducer?.weather); 

    return(
        <div className='all-weather-details'>
            <div className='weather-details-aqi'>
                <WeatherAQI/>
            </div>
            <div className='weather-details-all'> 
                <WeatherDetailsItem icon={faTemperatureHalf} detailName='Feels like' detailInfo={Math.round(weather?.main?.feels_like) + '°' }/>
                <WeatherDetailsItem icon={faDroplet} detailName='Humidity' detailInfo={weather?.main?.humidity + '%'}/>
                <WeatherDetailsItem icon={faEye} detailName='Visibility' detailInfo={weather?.visibility / 1000 +  'km'}/> 
                <WeatherWind />
            </div>
            <div className='weather-details-sunrise '>
                <WeatherSunrise/>
            </div>
        </div>
    )
}

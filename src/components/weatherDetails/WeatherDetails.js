import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEye, faDroplet, faTemperatureHalf, faLungs, faWind, faChevronRight} from '@fortawesome/free-solid-svg-icons';
import './weatherDetails.styles.css';

const WeatherDetailsItem = ({icon, detailName, detailInfo}) => {
    return(
        <div className='weather-detail'>
            <div className='weather-detail__name'>
                <FontAwesomeIcon icon={icon}  />
                <p>{detailName}</p>
            </div>

            <p className='weather-detail__info'>{detailInfo}</p> 
        
        </div>
    )
}

const WeatherAQI = ({aqi}) => {
    return <div className='weather-detail'>
            <div className='weather-detail__name'>
                <FontAwesomeIcon icon={faLungs}  />
                <p>Air Quality</p>
            </div>
            <p className='weather-detail__info'>{aqi} - Moderate</p> 

            <div className='range-aqi'>
                <div className='range-aqi-dot' style={{left: (aqi * 100 / 6 )+'%'}}> </div>
            </div>

            <div className='line-aqi'></div>

            <div className='aqi-more'>
                <p>See more</p>
                <FontAwesomeIcon icon={faChevronRight} opacity={0.4}/>
            </div>
        
        </div>
}

const WeatherWind = () => {
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

                <div className='weather-detail__wind-info'>10 <br/> km/h</div>
            </div>
        
        </div>
    )
}

export const WeatherDetailsAll = () => {
    return(
        <div className='weather-details-page'>
            <div className='weather-details-aqi'>
                <WeatherAQI aqi={1}/>
            </div>
            <div className='weather-details-all'> 
                <WeatherDetailsItem icon={faTemperatureHalf} detailName='Feels like' detailInfo='19°'/>
                <WeatherDetailsItem icon={faDroplet} detailName='Humidity' detailInfo='90%'/>
                <WeatherDetailsItem icon={faEye} detailName='Visibility' detailInfo='10 km'/> 
                <WeatherWind/>
            </div>
        </div>
    )
}
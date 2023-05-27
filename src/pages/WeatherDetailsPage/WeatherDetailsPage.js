import { Forecast, ForecastItem } from "../../components/forecast/Forecast"
import { Link } from 'react-router-dom';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { WeatherDetailsAll } from "../../components/weatherDetails/WeatherDetails"
import './WeatherDetailsPage.css'

export const WeatherDetailsPage = () => {
    return (
        <div className="weather-details-page">
            <div className="weather-details-page__city">
                <h3>Kyiv</h3>
                <p> 19 | Clear</p>

            </div>

            <div className="weather-details-forecast">
                <div className='forecast__head'>
                        <div className='forecast__head-switch'>
                            <p>Hourly Forecast</p>
                            <Link to={'/'}>
                                <FontAwesomeIcon icon={faCaretDown}/>
                            </Link>
                            <p>Weekly Forecast</p>
                        </div>
                    
                        <div className='forecast__head-separator'></div>
                </div>
                <div className='forecast__middle'>
                    <div className='forecast__all-items'>
                        <ForecastItem/>
                        <ForecastItem/>
                        <ForecastItem isActive={true}/>
                        <ForecastItem/>
                        <ForecastItem/> 
                    </div>
                </div>
            </div>
            <WeatherDetailsAll>

            </WeatherDetailsAll>
        </div>
    )
}
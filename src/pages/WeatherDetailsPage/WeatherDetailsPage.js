import { Forecast, ForecastItem } from "../../components/forecast/Forecast"
import { Link } from 'react-router-dom';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { WeatherDetailsAll } from "../../components/weatherDetails/WeatherDetails"
import './WeatherDetailsPage.css'

import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

export const WeatherDetailsPage = () => {
    const responsive = {
        0:    { items:  4},
        360:  { items:  5 },
        660:  { items: 5 },
        800:  { items: 7 },
        880:  { items: 8 },
        1100: { items: 9 },
        1320: { items: 9 },
        2000: { items: 9 } 
    };
    return (
        <div className="weather-details-page">
            <div className="weather-details-page__city">
                <h3>Kyiv</h3>
                <p> 19 | Clear</p>

            </div>


            <div className="weather-details__main">
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
                            <AliceCarousel className="week_slider" mouseTracking disableDotsControls disableButtonsControls responsive={responsive} controlsStrategy="alternate">
                                <ForecastItem/>
                                <ForecastItem/>
                                <ForecastItem/>
                                <ForecastItem/>
                                <ForecastItem isActive={true}/>
                                <ForecastItem/>
                                <ForecastItem/>
                            </AliceCarousel> 
                        </div>
                    </div>
                </div>
                <WeatherDetailsAll>

                </WeatherDetailsAll>
            </div>
        </div>
    )
}
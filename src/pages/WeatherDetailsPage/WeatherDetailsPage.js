import { ForecastItem } from "../../components/forecast/Forecast"
import { Link } from 'react-router-dom';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { WeatherDetailsAll } from "../../components/weatherDetails/WeatherDetails"
import './WeatherDetailsPage.css'

import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import { useSelector } from "react-redux";

export const WeatherDetailsPage = () => {
    const weather = useSelector(state =>  state?.weatherReducer?.weather);

    const responsive = {
        0:    { items:  3},
        360:  { items:  4 },
        660:  { items: 5 },
        800:  { items: 7 },
        880:  { items: 8 },
        1100: { items: 9 },
        1320: { items: 9 },
        2000: { items: 9 } 
    };

    const weekForecast = useSelector(state =>  state?.weatherReducer?.forecast?.list);

    return (
        <div className="weather-details-page">
            <div className="weather-details-page__city">
                <h3>{weather?.name}</h3>
                <p> {Math.round(weather?.main?.temp)} | {weather?.weather[0]?.main}</p>

            </div>


            <div className="weather-details__main">
                <div className="weather-details-forecast">
                    <div className='forecast__head'>
                            <div className='forecast__head-switch'>
                                <p>Hourly Forecast</p>
                                <Link to={'/'} className='forecast__head-switch-a'>
                                    <FontAwesomeIcon icon={faCaretDown}/>
                                    <span>Close Full Report</span>
                                </Link>
                            </div>
                        
                            <div className='forecast__head-separator'></div>
                    </div>
                    <div className='forecast__middle'>
                        <div className='forecast__all-items'>
                        <AliceCarousel className="week_slider" mouseTracking 
                        disableDotsControls disableButtonsControls responsive={responsive} 
                        controlsStrategy="alternate"
                    >
                        {weekForecast && weekForecast.map((forecast, i) => <ForecastItem key={i} forecast={forecast} 
                         />)} 
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
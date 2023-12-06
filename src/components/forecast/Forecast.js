import './Forecast.styles.css';
import forecastImageMoonWind from '../../images/forecast-mini-moonwind.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { faBars, faBookmark, faCaretDown, faLocationDot} from '@fortawesome/free-solid-svg-icons';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import { getGeoposition } from '../../utils/getGeoposition';
import { useDispatch, useSelector } from 'react-redux';
import { addToSavedCity } from '../../store/actions/addToSavedCitiesAction';
import { localTimeInForecast } from '../../utils/getForecastLocalTime';
import { store } from '../../store/store';
import { useEffect, useState } from 'react';
import { deleteFromSavedCity } from '../../store/actions/deleteFromSavedCitiesAction';



export const Forecast = () => {

    let savedCities = useSelector(state => state?.weatherReducer?.savedCityWeather);

    const responsive = {
      0:    { items:  3},
      360:  { items:  4 },
      660:  { items: 5 },
    //   800:  { items: 7 },
    //   880:  { items: 8 },
    //   1100: { items: 9 },
    //   1320: { items: 9 },
    //   2000: { items: 9 } 
    };

    let color = (JSON.parse(localStorage.savedCity).includes(store.getState()?.weatherReducer?.forecast?.city?.name)) 
        ? (store.getState()?.weatherReducer?.theme ==='dark' ?  '#5B63B7' : '#362a84') : 'white';

    const isCitySaved = (city) => {
        if ((JSON.parse(localStorage.savedCity).includes(city)))  {
            localStorage.savedCity = JSON.stringify(JSON.parse(localStorage.savedCity)); 
            dispatch(deleteFromSavedCity(city))
        }
        else {
            localStorage.savedCity = JSON.stringify([city, ...JSON.parse(localStorage.savedCity)]);
            dispatch(addToSavedCity(city));
        }
    }
    
    const dispatch = useDispatch();

    const weekForecast = useSelector(state =>  state?.weatherReducer?.forecast?.list);
    
    return (
        <div className='forecast'>
            <div className='forecast__head'>

                <div className='forecast__head-switch'>
                    <Link to={'/weather-details'} className='forecast__head-switch-a'>
                        <FontAwesomeIcon icon={faCaretDown} className='fa-rotate-180 fa-lg'/>
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

            <div className='forecast__bottom'>
                <div className='forecast__bottom-inner'>
                    <div className='save-city' onClick={() => {
                        let city = store.getState()?.weatherReducer?.forecast?.city?.name;
                        isCitySaved(city)
                    }}>
                        <FontAwesomeIcon icon={faBookmark} className='fa-xl'
                        style={{color:`${color}`}}/> 
                    </div>

                    <div className='forecast__bottom-nav' onClick={getGeoposition}>
                        <FontAwesomeIcon icon={faLocationDot} className='fa-xl'/>
                    </div>
                    <Link to={'/saved-cities'}>
                        <div className='forecast__bottom-menu'>
                            <FontAwesomeIcon icon={faBars} className='fa-xl'/>
                        </div>
                    </Link>
                </div>
            </div>
            
        </div>
    )
}

export const ForecastItem = ({forecast}) => {
    let forecastHours = localTimeInForecast(forecast?.dt_txt);

    return (
        <div className='forecast__item'>
            <p className='forecast__item-time'>{forecastHours.getDate()  + ' ' + forecastHours.toLocaleString('en-EN', { month: 'short'})  }</p>
            <p className="forecast__item-time">{forecastHours.getHours() + ':00'  }</p>
            <img className='forecast__item-image' alt='weather on this time' src={forecastImageMoonWind}/>
            <p className='forecast__item-temperature'>{Math.round(forecast?.main?.temp_max)}°</p>
            <span className="forecast_night_degree">{Math.round(forecast?.main?.temp_min)}°</span>
        </div>
    )
}
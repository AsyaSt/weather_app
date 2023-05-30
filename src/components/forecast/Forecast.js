import './Forecast.styles.css';
import forecastImageMoonWind from '../../images/forecast-mini-moonwind.png'
import subtract from '../../images/Subtract.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import plus from '../../images/plus.png'
import menu from '../../images/menu.png'
import nav from '../../images/nav.png'
import { Link } from 'react-router-dom';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import { getGeoposition } from '../../utils/getGeoposition';

export const Forecast = () => {
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
        <div className='forecast'>
            <div className='forecast__head'>
                <div className='forecast__head-switch'>
                    <p>Hourly Forecast</p>
                    <Link to={'/weather-details'}>
                        <FontAwesomeIcon icon={faCaretDown} className='fa-rotate-180'/>
                    </Link>
                    <p>Weekly Forecast</p>
                </div>
            
                <div className='forecast__head-separator'></div>
            </div>
            <div className='forecast__middle'>
                <div className='forecast__all-items'>
                    {/* <ForecastItem/>
                    <ForecastItem/>
                    <ForecastItem isActive={true}/>
                    <ForecastItem/>
                    <ForecastItem/>  */}
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

            <div className='forecast__bottom'>
                <div className='forecast__bottom-inner'>
                    <div className='forecast__bottom-nav' onClick={getGeoposition}>
                        <img src={nav}/>
                    </div>
                    <div className='forecast__bottom-plus'>
                        <img src={plus}/>
                    </div>
                    <Link to={'/saved-cities'}>
                        <div className='forecast__bottom-menu'>
                            <img src={menu}/>
                        </div>
                    </Link>
                </div>
            </div>
            
        </div>
    )
}

export const ForecastItem = ({isActive}) => {
    return (
        <div className={isActive ? 'forecast__item forecast__item-active ' : 'forecast__item'}>
            <p className='forecast__item-time'>12 AM</p>
            <img className='forecast__item-image' alt='weather on this time' src={forecastImageMoonWind}/>
            <p className='forecast__item-temperature'>19°</p>
        </div>
    )
}
import './Forecast.styles.css';
import forecastImageMoonWind from '../../images/forecast-mini-moonwind.png'
import subtract from '../../images/Subtract.png'
import plus from '../../images/plus.png'
import menu from '../../images/menu.png'
import nav from '../../images/nav.png'
import { Link } from 'react-router-dom';
import houseImage from '../../images/house.png'

export const Forecast = () => {
    return (
        <div className='forecast'>
            <div className='forecast__head'>
                {/* <div className="card_house-image">
                    <img src={houseImage} alt='house'/>     
                </div>  */}
                {/* <div className='forecast__head-shape'></div> */}

                <div className='forecast__head-switch'>
                    <p>Hourly Forecast</p>
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

            <div className='forecast__bottom'>
                <div className='forecast__bottom-inner'>
                    <div className='forecast__bottom-nav'>
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

const ForecastItem = ({isActive}) => {
    return (
        <div className={isActive ? 'forecast__item forecast__item-active ' : 'forecast__item'}>
            <p className='forecast__item-time'>12 AM</p>
            <img className='forecast__item-image' alt='weather on this time' src={forecastImageMoonWind}/>
            <p className='forecast__item-temperature'>19°</p>
        </div>
    )
}
import './Forecast.styles.css';
import forecastImageMoonWind from '../../images/forecast-mini-moonwind.png'
import subtract from '../../images/Subtract.png'


export const Forecast = () => {
    return (
        <div className='forecast'>
            <div className='forecast__head'>
                <div className='forecast__head-shape'></div>

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
                <div className='forecast__bottom-subtract'>
                    {/* <img src={subtract}/> */}
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
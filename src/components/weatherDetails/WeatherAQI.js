import { faChevronLeft, faChevronRight, faLungs } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useSelector } from "react-redux";

export const WeatherAQI = () => { 
    const aqi = useSelector(state =>  state?.weatherReducer?.aq?.list[0])  
    const [aqiDetail, setAqiDetail] = useState('aqi');

    return (
         <div className='weather-detail aqi'>
            <div className='weather-detail__name'>
                <FontAwesomeIcon icon={faLungs}  />
                <p>Air Quality</p>
            </div>
            
            {
                aqiDetail === 'aqi' ? 
                <div>
                    <p className='weather-detail__info'>{aqi?.main?.aqi + ' - Moderate' } </p> 
                    <div className='range-aqi'>
                        <div className='range-aqi-dot' style={{left: aqi?.main?.aqi * 100 / 6 +'%'}}> </div>
                    </div>
                    <div className='line-aqi'></div>
                    <div className='aqi-more' onClick={() => setAqiDetail('aqiDetail')}>
                        <p>See more</p>
                        <FontAwesomeIcon icon={faChevronRight} opacity={0.4}/>
                    </div>
                </div>
                : 
                <div>

                    <div className='aqi-details'>
                       {Object.keys( aqi?.components).map(element => <p>{element} :  {aqi?.components[element]}</p>)}
                    </div>
                    <div className='line-aqi'></div>
                    <div className='aqi-back' onClick={() => setAqiDetail('aqi')}>
                        <FontAwesomeIcon icon={faChevronLeft} opacity={0.4}/>
                        <p>Back to AQI</p> 
                    </div>
                </div>
            }

            <div className="weather-detail-shadow"></div>
            <div className="weather-detail-shadow2"></div>
        </div>
    )
}

import './cityCard.style.css'
import {useDispatch, useSelector } from "react-redux";

export const CityCard = () => {
    const dispatch = useDispatch();
    const weather = useSelector(state =>  state.weatherReducer?.weather); 

    return (
        <div className="card ">
            <div className="card_container">
                <div className="card_inner">
                    <div className="card_text">
                        <p className="card_city">{weather?.name || 'Test city'}  </p>
                        <p className="card_degrees">{Math.round(weather?.main?.temp) + '°' || '??'}</p>
                        <p className="card_desc">{weather?.weather[0]?.main || ''}</p>
                        <p className="card_max-min">H:{Math.round(weather?.main?.temp_max) + '° ' || '??'} L:{ Math.round(weather?.main?.temp_min) + '°' || '10°C'}</p>
                    </div>
                </div> 
            </div>
            
        </div>
    )
}

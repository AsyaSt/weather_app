import './cityCard.style.css'
import { connect } from "react-redux";

const CityCard = ({weather}) => {
    // let daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return (
        <div className="card ">
            <div className="card_container">
                <div className="card_inner">
                    <div className="card_text">
                        <p className="card_city">{weather?.name || 'Test city'}  </p>
                        <p className="card_degrees">{(weather?.main?.temp && Math.round(weather?.main?.temp) + '°') || '10°C'}</p>
                        <p className="card_desc">{Array.isArray(weather.weather) ? weather?.weather[0]?.main : ''}</p>
                        <p className="card_max-min">H:{(weather?.main?.temp_max && Math.round(weather?.main?.temp_max) + '° ') || '10°'} L:{(weather?.main?.temp_min && Math.round(weather?.main?.temp_min) + '°') || '10°C'}</p>
                    </div>
                </div> 
            </div>
            
        </div>
    )
}

export const CCityCard = connect(state => ({weather: state.weatherReducer.weather || {}}), )(CityCard);
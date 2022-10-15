import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloud, faClock } from "@fortawesome/free-solid-svg-icons";
import './cityCard.style.css'
import { connect } from "react-redux";
import { iconWeather } from "../../utils/imgFunc";


const CityCard = ({weather}) => {
    return(
        <div className="card ">
            
            <img width={'250px'} height={'250px'} src={(iconWeather(Array.isArray(weather.weather) ? weather?.weather[0]?.main : 'other'))} alt="weather in city" className="card_image"/>
            <div className='card_inner'>
                <p className="card_degrees">{(weather?.main?.temp && Math.round(weather?.main?.temp) + '°C') || '10°C'}</p>
                <div className="card_city">
                    <p>{weather?.name}</p>
                    <p>time</p>
                </div>
                <hr/>
                <div className="df">
                    <FontAwesomeIcon width={30} color={"darkBlue"} icon={faCloud}/>
                    <p className="card_city">{Array.isArray(weather.weather) ? weather?.weather[0]?.main : ''}</p>
                </div>
                <div className="df">
                    <FontAwesomeIcon width={30} color={"darkBlue"} icon={faClock}/>
                    <p className="card_city">time</p>
                </div>  
            </div>
        </div>
    )
}

export const CCityCard = connect(state => ({weather: state.weatherReducer.weather || {}}), )(CityCard);
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloud, faClock } from "@fortawesome/free-solid-svg-icons";
import './cityCard.style.css'
import { connect } from "react-redux";
import { iconWeather } from "../../utils/imgFunc";
import { localTime } from "../../utils/getLocalTime";
import { SearchBar } from "../searchBar/searchBar";


const CityCard = ({weather}) => {
    let daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return(
        <div className="card ">
             <div className="card_search">
                <SearchBar/>
            </div>
            <div className="card_container">
                <img  className="card_image" width={'250px'} height={'250px'} 
                    src={(iconWeather((Array.isArray(weather.weather) ? weather?.weather[0]?.main : 'other'), weather?.timezone, weather?.sys?.sunrise, weather?.sys?.sunset, localTime(weather?.timezone).getHours()))} 
                    alt="weather in city"
                />
                <p className="card_degrees">{(weather?.main?.temp && Math.round(weather?.main?.temp) + '°C') || '10°C'}</p>
            </div>            
            <div className='card_inner'>
                <div className="card_city">
                    <p>{weather?.name}</p>
                    <p>{daysOfWeek[localTime(weather?.timezone).getDay()] + ',  ' + localTime(weather?.timezone).getDate() + ' ' + localTime(weather?.timezone).toLocaleString('en-EN', { month: 'long' })}</p>
                </div>
                <hr/>
                <div className="df">
                    <FontAwesomeIcon width={30} color={"darkBlue"} icon={faCloud}/>
                    <p className="card_city">{Array.isArray(weather.weather) ? weather?.weather[0]?.main : ''}</p>
                </div>
                <div className="df">
                    <FontAwesomeIcon width={30} color={"darkBlue"} icon={faClock}/>
                    <p className="card_city">{(localTime(weather?.timezone).getHours() ) + ':' + ((localTime(weather?.timezone).getMinutes() > 9) ? localTime(weather?.timezone).getMinutes() : ('0' + localTime(weather?.timezone).getMinutes()))}</p>
                </div>  
            </div>
        </div>
    )
}

export const CCityCard = connect(state => ({weather: state.weatherReducer.weather || {}}), )(CityCard);
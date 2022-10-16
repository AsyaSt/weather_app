import { iconWeather } from "../../utils/imgFunc";

export const NextDays = ({forecast}) => {
    return(
        <div className="forecast_wrapper">
            <div className="forecast">
                <div className='forecast_inner'>
                    <p className="forecast_day">day</p>
                    <p className="forecast_day">time</p>
                    <img className='forecast_img' src={iconWeather(forecast?.weather[0]?.main)} alt=''/>
                    <div className="forecast_city ">
                        <span className="forecast_day_degree">{Math.round(forecast?.main?.temp_max)}°</span>
                        <span className="forecast_night_degree">{Math.round(forecast?.main?.temp_min)}°</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
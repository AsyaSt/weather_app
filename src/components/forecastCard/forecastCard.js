import { localTimeInForecast } from "../../utils/getForecastLocalTime";
import { iconWeather } from "../../utils/imgFunc";

export const NextDays = ({forecast}) => {
    let forecastHours = localTimeInForecast(forecast?.dt_txt);
    return(
        <div className="forecast_wrapper">
            <div className="forecast">
                <div className='forecast_inner'>
                    <p className="forecast_day">{forecastHours.getDate()  + ' ' + forecastHours.toLocaleString('en-EN', { month: 'short'})  }</p>
                    <p className="forecast_day">{forecastHours.getHours() + ':00'  }</p>
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
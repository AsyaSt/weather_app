import { connect } from "react-redux";



export const TodayCondition = ({name, info, src}) => {
    return(
        <div className="condition">
            <p className="condition_name">{name || 'Humidity'}</p>
            <p className="condition_info">{info }</p>   
            <img className="condition_image" src={src} alt='weather'/>
        </div>
    )
}

export const WeatherHigtLigts = (weather) => {
return (
    <div className="highlights_container">
    <p className="highlights">Today's Highlights</p>
        <div className="conditions_container">
            <TodayCondition name={'Humidity'} info={weather?.weather?.main?.humidity + ' %'} 
                src={'https://media1.giphy.com/media/NBETerBZbZ5WvBg0Ej/giphy.gif?cid=790b761102da0f7e92a46047e51a9f2a1023a070410c5010&rid=giphy.gif&ct=s'}
            />
            <TodayCondition name={'Wind'} info={weather?.weather?.wind?.speed  + ' km/h'} 
            src={'https://media1.giphy.com/media/0b0tejH4XzQtSLNAKX/giphy.gif?cid=790b761193ccd1db7af111d02481d92549cc45a56fdee587&rid=giphy.gif&ct=s'}/>
            <TodayCondition name={'Clouds'} info={weather?.weather?.clouds?.all + ' %'}
                src={'https://media1.giphy.com/media/l3vRfBUjhWIkaKeWc/giphy.gif?cid=790b761162c2301e74142a29005ce8d29e3971d09db7ece5&rid=giphy.gif&ct=s'}
            />
            
        </div>
    </div>
)
}

export const CWeatherHigtLigts = connect(state => ({weather: state.weatherReducer.weather || {}}), )(WeatherHigtLigts);
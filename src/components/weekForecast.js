import { connect } from "react-redux";
import { NextDays } from "./forecastCard/forecastCard";
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

export const Forecast = (forecasts) => {
    // let futureWeather = forecasts.forecasts.slice(0,15);
    // const responsive = {
    //   0:    { items: 2},
    //   500:  { items: 3 },
    //   660:  { items: 4 },
    //   800:  { items: 2 },
    //   880:  { items: 3 },
    //   1100: { items: 4 },
    //   1320: { items: 5 },
    //   2000: { items: 5 } 
//   };
    return(
        <>
            <p>ssss</p>
        </>
        // <div>
        //     <p className="highlights">Forecast</p>
        //     <div className="week_forecats"> 
        //     <AliceCarousel className="week_slider" mouseTracking disableDotsControls disableButtonsControls responsive={responsive} controlsStrategy="alternate">
        //                 {futureWeather.map((forecast, i) => <NextDays key={i} forecast={forecast} timezone={forecasts?.weather?.timezone}
        //                     sunrise={forecasts?.weather?.sys?.sunrise} sunset={forecasts?.weather?.sys?.sunset}
        //                 />)} 
        //     </AliceCarousel>
        //     </div>
        // </div>
    )
}

const mapStateToProps = function(state) {
    return {
        forecasts: state.weatherReducer.forecast?.list || [],
        weather: state.weatherReducer.weather || {},
        
    }
  }
export const CForecast = connect((mapStateToProps), )(Forecast);
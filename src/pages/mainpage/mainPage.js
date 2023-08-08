import { CityCard } from '../../components/cityCard/cityCard';
import { Forecast } from '../../components/forecast/Forecast';
import './mainPage.css';

export const MainPage = (props) => {
    
    return (
        <div className='mainpage'>

            <div className='eclipse' onClick={() => props.changeTheme('light')}>
              <div className='eclipse-inside'/>
            </div>

            <div id="background-wrap">
                <div className="x1">
                    <div className="cloud"></div>
                </div>

                <div className="x2">
                    <div className="cloud"></div>
                </div>

                <div className="x3">
                    <div className="cloud"></div>
                </div>

                <div className="x4">
                    <div className="cloud"></div>
                </div>

                <div className="x5">
                    <div className="cloud"></div>
                </div>
            </div>

            <div className='sun' onClick={() => props.changeTheme('dark')}/>


            <CityCard/>
            <Forecast/>
        </div>
    )
}
import { CityCard } from '../../components/cityCard/cityCard';
import { Forecast } from '../../components/forecast/Forecast';
import { ChangeTheme, getChangeTheme } from '../../store/actions/changeTheme';
import { store } from '../../store/store';
import './mainPage.css';

export const MainPage = (props) => {
    
    return (
        <div className='mainpage'>

            <div className='eclipse' onClick={() => store.dispatch(getChangeTheme())}>
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

            <div className='sun' onClick={() =>store.dispatch(getChangeTheme())}/>


            <CityCard/>
            <Forecast/>
        </div>
    )
}
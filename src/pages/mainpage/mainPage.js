import { CCityCard } from '../../components/cityCard/cityCard';
import { Forecast } from '../../components/forecast/Forecast';
import { CForecast } from '../../components/weekForecast';
import './mainPage.css';


export const MainPage = () => {
    return (
        <div className='mainpage'>
            <CCityCard/>
            <Forecast/>
        </div>
    )
}
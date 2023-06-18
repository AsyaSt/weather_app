import './allCityPage.css'
import { WidgetCityCard } from "../../components/savedCityCard/SavedCityCard"
import arrowLeft from '../../images/arrow-left.svg'
import { Link } from 'react-router-dom'
import { SearchBar } from '../../components/searchBar/searchBar'
import { store } from '../../store/store'

export const AllCityPage = () => {

    return (
        <>
            <div className="allcity-header">
                <Link to='/' className="allcity-header__back">
                    <img src={arrowLeft} alt='back'/>
                    <p  className="allcity-header__back-text">Weather</p>
                </Link>
            </div>

            <SearchBar/>
            <div className="allcity_inner">
            {
                (store.getState()?.weatherReducer?.savedCityWeather).map((city, i) => <WidgetCityCard city={city} key={i}/>)
            }

            </div>
        </>
    )
}
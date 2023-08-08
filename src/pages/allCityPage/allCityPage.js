import './allCityPage.css'
import { WidgetCityCard } from "../../components/savedCityCard/SavedCityCard"
import arrowLeft from '../../images/arrow-left.svg'
import { Link } from 'react-router-dom'
import { SearchBar } from '../../components/searchBar/searchBar'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getSavedCity } from '../../store/actions/getSavedCityAction'

export const AllCityPage = () => {
    let dispatch = useDispatch();
    useEffect(() => {
        dispatch(getSavedCity())
    }, []);

    const savedCities = useSelector(state =>  state?.weatherReducer?.savedCityWeather);
    
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
                savedCities && (savedCities).map((city, i) => <WidgetCityCard city={city} key={i}/>)
            }

            </div>
        </>
    )
}
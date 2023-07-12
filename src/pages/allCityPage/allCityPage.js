import './allCityPage.css'
import { WidgetCityCard } from "../../components/savedCityCard/SavedCityCard"
import arrowLeft from '../../images/arrow-left.svg'
import { Link } from 'react-router-dom'
import { SearchBar } from '../../components/searchBar/searchBar'
import { connect, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getSavedCity } from '../../store/actions/getSavedCityAction'

export const AllCityPage = ({savedCities}) => {
    let dispatch = useDispatch();
    useEffect(() => {
        // let cities = (JSON.parse(localStorage.savedCity) || []);
        // dispatch(getSavedCity(cities))
        dispatch(getSavedCity())
    }, [])

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
                (savedCities).map((city, i) => <WidgetCityCard city={city} key={i}/>)
            }

            </div>
        </>
    )
}

export const CAllCityPage = connect(state => ({savedCities: state?.weatherReducer?.savedCityWeather || []} ), )(AllCityPage);
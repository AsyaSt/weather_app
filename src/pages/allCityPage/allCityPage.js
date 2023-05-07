import './allCityPage.css'
import { WidgetCityCard } from "../../components/savedCityCard/SavedCityCard"
import arrowLeft from '../../images/arrow-left.svg'
import menu from '../../images/✏️ Right Title.svg'
import { Link } from 'react-router-dom'
import { SearchBar } from '../../components/searchBar/searchBar'



export const AllCityPage = () => {
    return (
        <>
        <div className="allcity-header">
            <Link to='/' className="allcity-header__back">
                <img src={arrowLeft} alt='back'/>
                <p  className="allcity-header__back-text">Weather</p>
            </Link>

            <div className="allcity-header__menu">
                <img src={menu}/>
            </div>
        </div>

        <SearchBar/>
        <div className="allcity_inner">
            <WidgetCityCard/>
            <WidgetCityCard/>
            <WidgetCityCard/>
            <WidgetCityCard/>
        </div>
        </>
    )
}
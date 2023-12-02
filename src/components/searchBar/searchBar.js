import './searchBar.styles.css'
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getForecast } from '../../store/actions/getForecastAction';
import { getWeather } from '../../store/actions/getWeatherAction';
import { getSearchCity } from '../../store/actions/searchCity';
import { Link } from 'react-router-dom';
import { requestGetWeatherByCoords } from '../../store/saga';
import { getWeatherByCoords } from '../../store/actions/getWeatherByCoords';

export const SearchBar = () => {
    const dispatch = useDispatch();
    const [value, setValue] =  useState('');
    const get = (val) => dispatch(getSearchCity(val));

    useEffect( () => () => get(''), [] );

    const searchResults= useSelector(state =>  state?.weatherReducer?.searchcity);
    return(
        <div className="search">
            <form action="/" method="get" className="df">
                <button type="submit" onClick={(e) => {
                    // e.preventDefault();
                    dispatch(getWeather(value));
                    dispatch(getForecast(value));
                    setValue('');
                }}>
                    <FontAwesomeIcon icon={faSearch} />
                </button>
                <input type="text"
                    id="header-search"
                    autoComplete='off'
                    placeholder="Search for city"
                    value={value} onChange={e => {
                        setValue(e.target.value);
                        
                    }}

                    onKeyUp={e => {
                        get(e.target.value);
                    }}
                    
                />
                
            </form>

            <div className='search_result'>
                {searchResults ? 
                searchResults.map((result) => 
                
                    <Link to={'/'}>
                    <div className='search_result-item'
                    onClick={(e) => {
                        console.log(result.latitude, result.longitude)
                        // e.preventDefault();
                        dispatch(getWeather(result.city));
                        dispatch(getForecast(result.city));
                    }}  
                    >
                    <p>{result.city}, {result.country}</p>
                    </div>
                    </Link>
                ) 
                : <></>}
            </div>

            <div className="search-shadow"></div>
            <div className="search-shadow2"></div>
        </div>
    )
};

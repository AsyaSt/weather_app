import './searchBar.styles.css'
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getForecast } from '../../store/actions/getForecastAction';
import { getWeather } from '../../store/actions/getWeatherAction';

export const SearchBar = () => {
    const dispatch = useDispatch();
    const [value, setValue] =  useState('');
    return(
        <div className="search">
            <form action="/" method="get" className="df">
                <button type="submit" onClick={(e) => {
                    e.preventDefault();
                    dispatch(getWeather(value));
                    dispatch(getForecast(value));
                    setValue('');
                }}>
                    <FontAwesomeIcon icon={faSearch} />
                </button>
                <input type="text"
                    id="header-search"
                    placeholder="Search for city"
                    value={value} onChange={e => setValue(e.target.value)}
                />
                
            </form>
        </div>
    )
};

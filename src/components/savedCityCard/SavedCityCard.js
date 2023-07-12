import './SavedCityCard.css'
import windCloud from '../../images/Moonfastwind.png'
import { Link } from 'react-router-dom'
import { store } from '../../store/store'
import { getWeather } from '../../store/actions/getWeatherAction'
import { useDispatch } from 'react-redux'
import { deleteFromSavedCity } from '../../store/actions/deleteFromSavedCitiesAction'




export const WidgetCityCard = (city) => {
    const dispatch = useDispatch();
    return (
        <div className="widget">
            <Link to={'/'}>
                <div className='widget_inner'  onClick={() => store.dispatch(getWeather(city.city.name))}>
                    <div className='widget_text'>
                        <p className='widget_degree'>{Math.round(city?.city?.main?.temp)+'°' || '???'}</p>
                        <p className='widget_max-min'>{'H:' + Math.round(city?.city?.main?.temp_max)+'°' || '???'} {'L:' + Math.round(city?.city?.main?.temp_min)+'°' || '???'} </p>
                        <p className='widget_city'>{city.city.name || '???'}</p>
                    </div>
                </div>
                <div className='widget_image'>
                    <div>
                        <img src={windCloud} alt='weather'/>
                        <p className='widget_image-desc'>{city.city?.weather[0].main || '???'}</p>
                    </div>

                    <div onClick={(e) => {
                        e.preventDefault()       
                        dispatch(deleteFromSavedCity(city.city.name))
                    }}>
                        x
                    </div>
                    
                </div>
            </Link>
        </div>
    )
}
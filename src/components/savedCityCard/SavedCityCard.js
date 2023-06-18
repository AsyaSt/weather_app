import './SavedCityCard.css'
import windCloud from '../../images/Moonfastwind.png'




export const WidgetCityCard = (city) => {
    return (
        <div className="widget">
            <div className='widget_inner'>
                <div className='widget_text'>
                    <p className='widget_degree'>{Math.round(city?.city?.main?.temp)+'°' || '???'}</p>
                    <p className='widget_max-min'>{'H:' + Math.round(city?.city?.main?.temp_max)+'°' || '???'} {'L:' + Math.round(city?.city?.main?.temp_min)+'°' || '???'} </p>
                    <p className='widget_city'>{city.city.name || '???'}</p>
                </div>
            </div>
            <div className='widget_image'>
                <img src={windCloud} alt='weather'/>
                <p className='widget_image-desc'>{city.city?.weather[0].main || '???'}</p>
            </div>
        </div>
    )
}
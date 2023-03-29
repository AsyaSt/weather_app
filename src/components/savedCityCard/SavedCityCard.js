import './SavedCityCard.css'
import windCloud from '../../images/Moonfastwind.png'




export const WidgetCityCard = () => {
    return (
        <div className="widget">
            <div className='widget_inner'>
                <div className='widget_text'>
                    <p className='widget_degree'>19°</p>
                    <p className='widget_max-min'>H:19° L:19°</p>
                    <p className='widget_city'>Montreal, Canada</p>
                </div>
            </div>
            <div className='widget_image'>
                <img src={windCloud}/>
                <p className='widget_image-desc'>Mid Rain</p>
            </div>
        </div>
    )
}
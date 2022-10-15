import './App.css';
import { useEffect } from 'react';
import { Provider, useDispatch} from 'react-redux';
import { store } from './store/store';
import { getForecast } from './store/actions/getForecastAction';
import { getWeather } from './store/actions/getWeatherAction';
import { CCityCard } from './components/cityCard/cityCard';



store.subscribe(() => console.log(store.getState()));

const AppWrapper = () => {
  return (
    <Provider store={store}> 
      <App />
    </Provider>
  )
}

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getWeather('paris'));
    dispatch(getForecast('paris'));
  }, []);

  return (
    <div className="App">
        <CCityCard/>
        <div className='app_info_inner'>

        </div>
    </div>
  );
}

export default AppWrapper;

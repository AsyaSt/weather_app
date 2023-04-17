import './App.css';
import { useEffect } from 'react';
import { Provider, useDispatch} from 'react-redux';
import { store } from './store/store';
import { getForecast } from './store/actions/getForecastAction';
import { getWeather } from './store/actions/getWeatherAction';
import { CCityCard } from './components/cityCard/cityCard';
import { CForecast } from './components/weekForecast';
import { CWeatherHigtLigts } from './components/weatherConditions/weatherCondition';
import { AllCityPage } from './pages/allCityPage/allCityPage';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { MainPage } from './pages/mainpage/mainPage';

const history = createBrowserHistory();

store.subscribe(() => console.log(store.getState()));

const AppWrapper = () => {
  return (
    <Provider store={store}> 
      <App />
    </Provider>
  )
}

const Main = () => {
  return (
  <BrowserRouter history = {history}>
    <Routes>
      <Route  path="/" element={<MainPage/>} />
      <Route  path="/a" element={<AllCityPage/>} />
    </Routes>
  </BrowserRouter>)
}

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getWeather('kyiv'));
    dispatch(getForecast('kyiv'));
  }, []);

  return (
    <div className="App">
        <Main/>
        <div className='app_info_inner'>
        </div>
    </div>
  );
}



export default AppWrapper;

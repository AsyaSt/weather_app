import './App.css';
import { useEffect, useState } from 'react';
import { Provider, useDispatch, useSelector} from 'react-redux';
import { store } from './store/store';
import { getWeather } from './store/actions/getWeatherAction';
import { AllCityPage } from './pages/allCityPage/allCityPage';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { MainPage } from './pages/mainpage/mainPage';
import { WeatherDetailsPage } from './pages/WeatherDetailsPage/WeatherDetailsPage';
import { getForecast } from './store/actions/getForecastAction';

const history = createBrowserHistory();
localStorage.savedCity =  localStorage.savedCity || JSON.stringify(['London', 'Kharkiv', 'Florida', 'Kyiv', 'Mexico']);
localStorage.theme = localStorage.theme || 'dark';
store.subscribe(() => console.log(store.getState()));

const AppWrapper = () => {
  return (
    <Provider store={store}> 
      <App />
    </Provider>
  )
}

const Main = (props) => {
  return (
  <BrowserRouter history = {history}>
    <Routes>
      <Route  path="/" element={<MainPage/>} />
      <Route  path="/weather-details" element={<WeatherDetailsPage/>} />
      <Route  path="/saved-cities" element={<AllCityPage/>} />
    </Routes>
  </BrowserRouter>)
}

function App() {
  const dispatch = useDispatch();
  const theme = useSelector(state => state.weatherReducer?.theme)

  useEffect(() => {
    dispatch(getWeather('kyiv'));
    dispatch(getForecast('kyiv'));
  }, []);
  console.log(localStorage.theme)

  return (
    <div className={'App ' + theme}>
      <div className="stars"></div>
      <div className="twinkling"></div>

      <Main/>
      <div className='app_info_inner'>
      </div>
    </div>
  );
}



export default AppWrapper;

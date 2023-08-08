import './App.css';
import { useEffect, useState } from 'react';
import { Provider, useDispatch} from 'react-redux';
import { store } from './store/store';
import { getWeather } from './store/actions/getWeatherAction';
import { AllCityPage } from './pages/allCityPage/allCityPage';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { MainPage } from './pages/mainpage/mainPage';
import { WeatherDetailsPage } from './pages/WeatherDetailsPage/WeatherDetailsPage';

const history = createBrowserHistory();
localStorage.savedCity =  localStorage.savedCity || JSON.stringify(['London', 'Kharkiv', 'Florida', 'Kyiv', 'Mexico']);


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
      <Route  path="/" element={<MainPage theme={props.theme} changeTheme={props.changeTheme}/>} />
      <Route  path="/weather-details" element={<WeatherDetailsPage/>} />
      <Route  path="/saved-cities" element={<AllCityPage/>} />
    </Routes>
  </BrowserRouter>)
}

function App() {
  const [theme, setTheme] = useState('light');
  const changeTheme = (mode) => setTheme(mode);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getWeather('kyiv'));
    // dispatch(getSavedCity(cities))
    // dispatch(getForecast('kyiv'));
  }, []);

  return (
    <div className={'App ' + theme}>
      <div className="stars"></div>
      <div className="twinkling"></div>

      <Main changeTheme={changeTheme} theme={theme}/>
      <div className='app_info_inner'>
      </div>
    </div>
  );
}



export default AppWrapper;

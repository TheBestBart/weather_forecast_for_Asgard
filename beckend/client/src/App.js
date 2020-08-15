import React, { useEffect, useState } from 'react';
import './App.css';
import { Container } from './components/Container';
import { Title } from './components/Title';
import urls from './urls/urls';
import Loader from './components/Loader';
import { MushroomInfoContainer } from './components/MushroomInfoContainer'

export const App = props => {
  let [weather, setWeather] = useState(null);
  let [arrayOfWeather, loadArrayOfWeather] = useState([]);
  let [mushroomInfo, getMushroomInfo] = useState(false);
  let [isMushroomButtonClicked, setIsMushroomButtonClicked] = useState(false);
  let [isWeekButtonClicked, setIsWeekButtonClicked] = useState(false);
  
  const loadWeather = () => {
      let { GET } = urls;

      fetch(GET.getWeatherToday)
      .then(response => response.json())
      .then(data => {
          data.success && setWeather(data.todayWeather);
      })
      .catch(error => console.log(error));
  }

  const loadWeekWeather = () => {
      let { POST } = urls;

      fetch(POST.getWeatherForWeek,{
        method: 'POST',
        headers: {
          "Content-Type": "Application/json"
        },
        body: JSON.stringify({ weather: { ...weather } })
      })
      .then(response => response.json())
      .then(data => {
          data.success && loadArrayOfWeather(data.weekWeather);
      })
      .catch(error => console.log(error));
  }

  const loadMushroomInfo = () => {
    let { POST } = urls;

      fetch(POST.getMushroomInfo,{
        method: 'POST',
        headers: {
          "Content-Type": "Application/json"
        },
        body: JSON.stringify({ weekWeather: [ ...arrayOfWeather ] })
      })
      .then(response => response.json())
      .then(data => {
          data.success && getMushroomInfo(data.mushroomInfo);
      })
      .catch(error => console.log(error));
  }

  useEffect(() => { 
    if(!weather) {
      loadWeather();
    }
    if(isWeekButtonClicked) {
      loadWeekWeather();
      setIsWeekButtonClicked(false);
    }
    if(isMushroomButtonClicked) {
      loadMushroomInfo();
      setIsMushroomButtonClicked(false);
    }
  },[loadWeekWeather, arrayOfWeather,  weather, mushroomInfo]);

  return (
    <div className='App'>
      {
        weather
        ? <>
        <Title />
        
        { 
          Array.isArray(arrayOfWeather) && arrayOfWeather.length 
          ? <>
          <button 
            style={{display: mushroomInfo && 'none'}} 
            onClick={(() => setIsMushroomButtonClicked(true))} 
            className='button fade-in'
          >
              Sprawdź informacje o grzybach
          </button>
          { mushroomInfo && <MushroomInfoContainer mushroomInfo={mushroomInfo}/>}
          {
            arrayOfWeather.map((item, index) => {
            return <Container key={index} weatherForecast={item} day={index}/>
            })
          }
          </>
          : <>
          <Container weatherForecast={weather}/>
          <button 
            style={{display: Array.isArray(arrayOfWeather) && arrayOfWeather.length && 'none'}} 
            onClick={() => setIsWeekButtonClicked(true)} 
            className='button fade-in'
          >
              Sprawdź prognoze na tydzień
          </button>
          </>
        }
        </>
        : <Loader timeout={1000} />
      }   
    </div>
  )  
}

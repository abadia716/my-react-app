import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './WeatherWidget.css';
import MapaComponent from './MapaComponent';

const WeatherWidget = ({ city }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [showMap, setShowMap] = useState(false);

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6a910e6262dcc3416609682422390b82&units=metric`
        );
        setWeatherData(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchWeatherData();
  }, [city]);

  if (!weatherData) {
    return <div>Loading weather data...</div>;
  }

  const { name, main, weather, wind } = weatherData;
  const weatherIconUrl = `http://openweathermap.org/img/w/${weather[0].icon}.png`;

  const handleToggleMap = () => {
    setShowMap(!showMap);
  };


  return (
    <div className="weather-widget">
      <div className="weather-widget-header">
        <h2 className="weather-widget-title">Estado del clima en {name}</h2>
        <img
          className="weather-widget-icon"
          src={weatherIconUrl}
          alt={weather[0].description}
        />
      </div>
      <div className="weather-widget-details">
        <p className="weather-widget-temperature">{main.temp} °C</p>
        <p className="weather-widget-feels-like">
          Sensación térmica: {main.feels_like} °C
        </p>
        <p className="weather-widget-humidity">Humedad: {main.humidity}%</p>
        <p className="weather-widget-wind">Viento: {wind.speed} m/s</p>
      </div>
      <div className="weather-widget-footer">
        <p className="weather-widget-description">{weather[0].description}</p>
        <button onClick={handleToggleMap}>
          {showMap ? 'Cerrar Mapa' : 'Ver Mapa'}
        </button>
      </div>
      {showMap && <MapaComponent />}
    </div>
  );
};

export default WeatherWidget;
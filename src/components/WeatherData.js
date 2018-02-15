import React from 'react';
import WeatherTemperature from './WeatherTemperature';
import WeatherExtraInfo from './WeatherExtraInfo';
import '../css/style.css';

const WeatherData = () => (
  <div className="weatherDataCont">
    <WeatherTemperature temperatura={11} icon={'day-hail'}/>
    <br/>
    <WeatherExtraInfo humedad={80} viento="10m/s"/>
  </div>
);

export default WeatherData;

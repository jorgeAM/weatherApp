import React from 'react';
import WeatherTemperature from './WeatherTemperature';
import WeatherExtraInfo from './WeatherExtraInfo';
import '../css/style.css';

const WeatherData = (props) => (
  <div className="weatherDataCont">
    <WeatherTemperature temperatura={props.temperatura} icon={'night-alt-thunderstorm'}/>
    <br/>
    <WeatherExtraInfo humedad={props.humedad} viento={props.viento}/>
  </div>
);

export default WeatherData;

import React from 'react';
import WeatherTemperature from './WeatherTemperature';
import WeatherExtraInfo from './WeatherExtraInfo';

const WeatherData = () => (
  <div>
    <WeatherTemperature temperatura="09"/>
    <WeatherExtraInfo humedad="80%" viento="10m/s"/>
  </div>
);

export default WeatherData;

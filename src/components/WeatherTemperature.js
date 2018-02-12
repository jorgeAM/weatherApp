import React from 'react';
import WeatherIcons from 'react-weathericons';

const WeatherTemperature = (props) => (
  <div>
    <WeatherIcons name="umbrella" size="2x" />
    <span>{`${props.temperatura} C°`}</span>
  </div>
);

export default WeatherTemperature;

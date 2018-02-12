import React from 'react';

const WeatherExtraInfo = (props) => (
  <div>
    <span>{props.humedad + ' - '}</span>
    <span>{props.viento}</span>
  </div>
);

export default WeatherExtraInfo;

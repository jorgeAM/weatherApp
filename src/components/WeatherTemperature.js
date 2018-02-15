import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';
import '../css/style.css';

const WeatherTemperature = (props) => (
  <div className="weatherTemperatureCont">
    <WeatherIcons className="wicon-weather" name={props.icon} size="4x" />
    <span className="temperature">{`${props.temperatura} C°`}</span>
  </div>
);

WeatherTemperature.propTypes = {
  temperatura: PropTypes.number.isRequired,
  icon: PropTypes.string,
};

export default WeatherTemperature;

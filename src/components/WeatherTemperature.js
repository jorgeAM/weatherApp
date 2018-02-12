import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';

const WeatherTemperature = (props) => (
  <div>
    <WeatherIcons name={props.icon} size="2x" />
    <span>{`${props.temperatura} C°`}</span>
  </div>
);

WeatherTemperature.propTypes = {
  temperatura: PropTypes.number.isRequired,
  icon: PropTypes.string,
};

export default WeatherTemperature;

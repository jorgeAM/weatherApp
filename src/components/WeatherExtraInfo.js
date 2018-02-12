import React from 'react';
import PropTypes from 'prop-types';

const WeatherExtraInfo = (props) => (
  <div>
    <span>{props.humedad + '% - '}</span>
    <span>{props.viento}</span>
  </div>
);

WeatherExtraInfo.propTypes = {
  humedad: PropTypes.number.isRequired,
  viento: PropTypes.string.isRequired,
};

export default WeatherExtraInfo;

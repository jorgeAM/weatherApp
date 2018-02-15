import React from 'react';
import PropTypes from 'prop-types';
import '../css/style.css';

const WeatherExtraInfo = (props) => (
  <div className="weatherExtraInfoCont">
    <span className="extraInfo">{props.humedad + '% - '}</span>
    <span className="extraInfo">{props.viento}</span>
  </div>
);

WeatherExtraInfo.propTypes = {
  humedad: PropTypes.number.isRequired,
  viento: PropTypes.string.isRequired,
};

export default WeatherExtraInfo;

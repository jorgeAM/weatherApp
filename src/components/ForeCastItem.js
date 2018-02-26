import React from 'react';
import PropTypes from 'prop-types';
import WeatherData from './WeatherData';
import '../css/style.css';

const ForeCastItem = (props)=> (
  <div>
    <div>{props.weekDay} - {props.hora} hr</div>
    <WeatherData className="foreCastItemData"
    temperatura={props.temperatura}
    humedad={props.humedad}
    viento={props.viento}/>
  </div>
);

ForeCastItem.propTypes = {
  weekDay: PropTypes.string.isRequired,
  hora: PropTypes.number,
};

export default ForeCastItem;

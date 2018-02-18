import React from 'react';
import PropTypes from 'prop-types';
import WeatherLocation from './WeatherLocation';
import '../css/style.css';

const mapeo = (cities) => (
  cities.map((city, index) => (
    <WeatherLocation key={index} city={city}/>
  ))
);

const LocationList = (props)=> (
  <div>
    {mapeo(props.cities)}
  </div>
);

LocationList.propTypes = {
  cities: PropTypes.array,
};

export default LocationList;

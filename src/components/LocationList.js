import React from 'react';
import PropTypes from 'prop-types';
import WeatherLocation from './WeatherLocation';
import '../css/style.css';

const LocationList = (props)=> {
  const handleLocation = city=> {
    console.log('manejando ciudad');
    props.handleCity(city);
  };

  const mapeo = (cities) => (
    cities.map((city, index) => (
      <WeatherLocation
        key={index}
        city={city}
        onWeatherLocationClick={()=> handleLocation(city)}/>
    ))
  );
  return (<div>
            {mapeo(props.cities)}
          </div>);
};

LocationList.propTypes = {
  cities: PropTypes.array,
  handleCity: PropTypes.func,
};

export default LocationList;

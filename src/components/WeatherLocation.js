import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Location from './Location';
import WeatherData from './WeatherData';
import { Button }  from 'react-materialize';
import '../css/style.css';

//const location = 'Trujillo,PE';
const apiKey = 'f99bbd9e4959b513e9bd0d7f7356b38d';

class WeatherLocation extends Component{
  constructor(props) {
    super(props);
    this.state = {
      city: props.city,
      temperatura: 18,
      humedad: 80,
      viento: '10m/s',
      onWeatherLocationClick: props.onWeatherLocationClick,
    };
    this.actualizar = this.actualizar.bind(this);
  }

  componentWillMount() {
    this.actualizar();
  }

  actualizar() {
    //conectamos con API de weateher (GET)
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&appid=${apiKey}`)
    .then(res => res.json())
    .then(rs => {
      this.setState({
        city: this.state.city,
        temperatura: rs.main.temp.toFixed(0) - 273,
        humedad: rs.main.humidity,
        viento: `${rs.wind.speed}m/s`,
      });
    });
  }

  render() {
    return (
      <div className="root" onClick={this.state.onWeatherLocationClick}>
        <Location city={this.state.city}/>
        <WeatherData temperatura={this.state.temperatura}
        humedad={this.state.humedad}
        viento={this.state.viento}/>
        <Button onClick={this.actualizar} waves='light'>Actualizar</Button>
      </div>
    );
  }
}

WeatherLocation.propTypes = {
  city: PropTypes.string.isRequired,
  onWeatherLocationClick: PropTypes.func,
};

export default WeatherLocation;

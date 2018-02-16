import React, { Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import '../css/style.css';

const location = 'Trujillo,PE';
const apiKey = 'f99bbd9e4959b513e9bd0d7f7356b38d';

class WeatherLocation extends Component{
  constructor(props) {
    super(props);
    this.state = {
      city: 'Lima',
      temperatura: 18,
      humedad: 80,
      viento: '10m/s',
    };
    this.actualizar = this.actualizar.bind(this);
  }

  actualizar() {
    //conectamos con API de weateher (GET)
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`)
    .then(res => res.json())
    .then(rs => {
      this.setState({
        city: location,
        temperatura: rs.main.temp - 273.15,
        humedad: rs.main.humidity,
        viento: `${rs.wind.speed}m/s`,
      });
    });
  }

  render() {
    return (
      <div className="root">
        <Location city={this.state.city}/>
        <WeatherData temperatura={this.state.temperatura}
        humedad={this.state.humedad}
        viento={this.state.viento}/>
        <button onClick={this.actualizar}>Actualizar</button>
      </div>
    );
  }
}

export default WeatherLocation;

import React, { Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import '../css/style.css';

class WeatherLocation extends Component{
  constructor(props) {
    super(props);
    this.state = { city: 'Lima' };
    this.actualizar = this.actualizar.bind(this);
  }

  actualizar() {
    const city = this.state.city;
    if (city == 'Lima') this.setState({ city: 'Trujillo' });
    else this.setState({ city: 'Lima' });
  }

  render() {
    return (
      <div className="root">
        <Location city={this.state.city}/>
        <WeatherData/>
        <button onClick={this.actualizar}>Actualizar</button>
      </div>
    );
  }
}

export default WeatherLocation;

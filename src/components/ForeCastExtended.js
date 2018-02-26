import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ForeCastItem from './ForeCastItem';
import transformForeCast from '../services/transformForeCast';
import '../css/style.css';

const apiKey = 'f99bbd9e4959b513e9bd0d7f7356b38d';
const days = [
  'Lunes',
  'Martes',
  'Miercoles',
  'Jueves',
  'Viernes',
];

class ForeCastExtended extends Component{
  constructor(props) {
    super(props);
    this.state = {
      city: props.city,
      weekDay: props.weekDay,
      hora: props.hora,
      temperatura: null,
      humedad: null,
      viento: null,
    };
    console.log(this.state);
  }

  renderProgressBar() {
    return <h3>Cargando Pronosticos...</h3>;
  }

  renderForeCastItem() {
    return <h3>Cargando...</h3>;
    /*
    return days.map((day, index)=> (
      <ForeCastItem
        key={index}
        weekDay={day}
        hora={10}
        temperatura={24}
        humedad={80}
        viento={'15 m/s'}/>));
          */
  }

  componentDidMount() {
    fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${this.state.city}&appid=${apiKey}`)
    .then(res => res.json())
    .then(rs => {
      console.log(rs);
      const data = transformForeCast(rs);
      console.log(data);
    });
  }

  render() {
    return (
      <div>
        <h2 className="foreCastTitle">Pronostico {this.props.city}</h2>
        <div>
          {!(this.state.temperatura && this.state.humedad && this.state.viento)
            ? this.renderProgressBar() : this.renderForeCastItem()}
        </div>
      </div>
    );
  }
}

ForeCastExtended.propTypes = {
  city: PropTypes.string.isRequired,
};

export default ForeCastExtended;

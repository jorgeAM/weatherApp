import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ForeCastItem from './ForeCastItem';
import transformForeCast from '../services/transformForeCast';
import '../css/style.css';

const apiKey = 'f99bbd9e4959b513e9bd0d7f7356b38d';

class ForeCastExtended extends Component{
  constructor(props) {
    super(props);
    this.state = {
      city: props.city,
      foreCastData: null,
    };
  }

  renderProgressBar() {
    return <h3>Cargando Pronosticos...</h3>;
  }

  renderForeCastItem(foreCastData) {
    return foreCastData.map((foreCast, index)=> (
      <ForeCastItem
        key={index}
        weekDay={foreCast.weekDay}
        hora={foreCast.hora}
        temperatura={foreCast.temperatura}
        humedad={foreCast.humedad}
        viento={`${foreCast.viento} m/s`}/>));
  }

  componentDidMount() {
    fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${this.state.city}&appid=${apiKey}`)
    .then(res => res.json())
    .then(rs => {
      const data = transformForeCast(rs);
      this.setState({
        foreCastData: data,
      });
    });
  }

  render() {
    return (
      <div>
        <h2 className="foreCastTitle">Pronostico {this.props.city}</h2>
        <div>
          {!(this.state.foreCastData)
            ? this.renderProgressBar() : this.renderForeCastItem(this.state.foreCastData)}
        </div>
      </div>
    );
  }
}

ForeCastExtended.propTypes = {
  city: PropTypes.string.isRequired,
};

export default ForeCastExtended;

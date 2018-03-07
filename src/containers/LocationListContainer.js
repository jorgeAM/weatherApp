import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { setCity } from '../actions/index.js';
import LocationList from '../components/LocationList';

class LocationListContainer extends Component {
  ciudadElegida = city=> {
    this.props.setCity(city);
  };

  render() {
    return (
      <div>
        <LocationList handleCity={this.ciudadElegida} cities={this.props.cities}/>
      </div>
    );
  }
}

LocationListContainer.propTypes = {
  setCity: propTypes.func.isRequired,
  cities: propTypes.array.isRequired,
};

const mapDispatchToProps = dispatch => ({
  setCity: value => dispatch(setCity(value)),
});

export default connect(null, mapDispatchToProps)(LocationListContainer);

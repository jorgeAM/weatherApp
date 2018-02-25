import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ForeCastItem from './ForeCastItem';
import '../css/style.css';

class ForeCastExtended extends Component{
  constructor(props) {
    super(props);
    this.state = {
      city: props.city,
    };
  }

  render() {
    return (
      <div>
        <h2 className="foreCastTitle">Pronostico {this.props.city}</h2>
        <div>
          <ForeCastItem/>
        </div>
      </div>
    );
  }
}

ForeCastExtended.propTypes = {
  city: PropTypes.string.isRequired,
};

export default ForeCastExtended;

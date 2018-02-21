import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
        Pronostico {this.props.city}
      </div>
    );
  }
}

ForeCastExtended.propTypes = {
  city: PropTypes.string.isRequired,
};

export default ForeCastExtended;

import React from 'react';
import PropTypes from 'prop-types';
import '../css/style.css';

const Location = (props) => (
  <div className="locationCont">
    <h1>{props.city}</h1>
  </div>
);

Location.propTypes = {
  city: PropTypes.string.isRequired,
};

export default Location;

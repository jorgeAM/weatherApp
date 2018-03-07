import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import ForeCastExtended from '../components/ForeCastExtended';

class ForeCastExtendedContainer extends Component {
  render() {
    return (
      this.props.ciudad &&
      <ForeCastExtended city={this.props.ciudad}/>
    );
  }
}

ForeCastExtendedContainer.propTypes = {
  ciudad: propTypes.string,
};

const mapStateToProps = state => ({
  ciudad: state.city,
});

export default connect(mapStateToProps, null)(ForeCastExtendedContainer);

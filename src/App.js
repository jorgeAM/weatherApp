import React, { Component } from 'react';
import ForeCastExtendedContainer from './containers/ForeCastExtendedContainer';
import LocationListContainer from './containers/LocationListContainer';
import { Grid, Row, Col } from 'react-flexbox-grid';

//importamos metodo de redux

import './css/style.css';

const cities = [
  'Lima, PE',
  'Arequipa, PE',
  'Iquitos, PE',
  'Trujillo, PE',
  'Piura, PE',
];

class App extends Component {
  render() {
    return (
      <Grid fluid>
        <Row>
          <Col xs={12} md={6} lg={6}>
            <div className="lista">
              <LocationListContainer cities={cities}/>
            </div>
          </Col>
          <Col xs={12} md={6} lg={6}>
            <div className="detalle">
              <ForeCastExtendedContainer/>
            </div>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;

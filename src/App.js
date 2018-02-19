import React, { Component } from 'react';
import LocationList from './components/LocationList';
import ForeCastExtended from './components/ForeCastExtended';
import { Grid, Row, Col } from 'react-flexbox-grid';
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
            <div>
              <LocationList cities={cities}/>
            </div>
          </Col>

          <Col xs={12} md={6} lg={6}>
            <div className="detalle">
              <ForeCastExtended/>
            </div>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;

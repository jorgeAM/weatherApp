import React, { Component } from 'react';
import ForeCastExtended from './components/ForeCastExtended';
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
  constructor(props) {
    super(props);
    this.state = {
      city: null,
    };
  }

  render() {
    return (
      <Grid fluid>
        <Row>
          <Col xs={12} md={6} lg={6}>
            <div className="lista">
              <LocationListContainer cities={cities}/>
            </div>
          </Col>

          {this.state.city &&
          <Col xs={12} md={6} lg={6}>
            <div className="detalle">
              <ForeCastExtended city={this.state.city}/>
            </div>
          </Col>}
        </Row>
      </Grid>
    );
  }
}

export default App;

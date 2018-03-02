import React, { Component } from 'react';
import LocationList from './components/LocationList';
import ForeCastExtended from './components/ForeCastExtended';
import { Grid, Row, Col } from 'react-flexbox-grid';

//importamos metodo de redux

import './css/style.css';
import { store } from './store/index.js';
import { setCity } from './actions/index.js';

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

  ciudadElegida = city=> {
    this.setState({
      city: city,
    });

    //ejecutar accion
    store.dispatch(setCity(city));
  };

  render() {
    return (
      <Grid fluid>
        <Row>
          <Col xs={12} md={6} lg={6}>
            <div className="lista">
              <LocationList handleCity={this.ciudadElegida} cities={cities}/>
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

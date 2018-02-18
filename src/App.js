import React, { Component } from 'react';
import LocationList from './components/LocationList';
import './App.css';

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
      <div className="App">
        <LocationList cities={cities}/>
      </div>
    );
  }
}

export default App;

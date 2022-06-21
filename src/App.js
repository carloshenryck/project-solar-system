import React from 'react';
import Header from './components/Header';
import PlanetCard from './components/PlanetCard';
import SolarSystem from './components/SolarSystem';
import Earth from './images/Terra.png';

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <SolarSystem />
        <PlanetCard planetName="terra" planetImage={ Earth } />
      </>
    );
  }
}

export default App;

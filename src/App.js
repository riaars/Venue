import React from 'react';
import './resources/styles.css';
import Header from './component/header_footer/Header';
import Featured from './component/featured';
import VenueInfo from './component/venueInfo';
function App() {
  return (
    <div className="App" style={{height: '3000px', backgroundColor: '#efefef'}}>
      <Header />
      <Featured />
      <VenueInfo />
    </div>
  );
}

export default App;

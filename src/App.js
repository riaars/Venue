import React from 'react';
import './resources/styles.css';
import {Element} from 'react-scroll';
import Header from './component/header_footer/Header';
import Featured from './component/featured';
import VenueInfo from './component/venueInfo';
import Hightlight from './component/highlight';
import Pricing from './component/pricing';
import Location from './component/location';
import Footer from './component/header_footer/Footer';

function App() {
  return (
    <div className="App" style={{height: '3000px', backgroundColor: '#efefef'}}>
      <Header />
      <Element name="featured">
        <Featured />
      </Element>
      <Element name="venueInfo">
        <VenueInfo />
      </Element>

      <Element name="highlights">
        <Hightlight />
      </Element>
      <Element name="pricing">
        <Pricing />
      </Element>
      <Element name="location">
        <Location />
      </Element>

      <Footer />
    </div>
  );
}

export default App;

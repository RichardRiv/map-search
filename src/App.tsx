import React from 'react';
// import Gmaps from './apis/Gmaps';
import './App.css';
import Forms from './components/Forms';
import MapBox from './components/MapBox';

const App = () => {
  return (
    <div className="App">
      <MapBox/>
      <Forms />
    </div>
  );
}

export default App;

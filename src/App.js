import React,{ useRef } from 'react';
import './App.css';


// page import
import JejuMap from './pages/JejuMap';
import ThreeRendering from './pages/ThreeRendering';

function App() {

 
  return (
    <div className="App">

      <ThreeRendering/>

      <JejuMap/>
    </div>
  );
}

export default App;

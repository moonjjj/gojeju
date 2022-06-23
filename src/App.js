import React,{ useRef, useState } from 'react';
import './App.css';


// page import
import JejuMap from './pages/JejuMap';
import ThreeRendering from './pages/ThreeRendering';
import NoPlanIsPlan from './pages/NoPlanIsPlan';


function App() {


 
  return (
    <div className="App" >

      <ThreeRendering/>

      <JejuMap/>

      <NoPlanIsPlan/>



    </div>
  );
}

export default App;

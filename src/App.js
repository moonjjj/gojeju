import React,{ useRef, useState } from 'react';
import './App.css';


// page import
import JejuMap from './pages/JejuMap';
import ThreeRendering from './pages/ThreeRendering';
import NoPlanIsPlan from './pages/NoPlanIsPlan';
import Weather from './pages/Weather';

function App() {
  const [cold, setCold] = useState();

 
  return (
    <div className="App" >

      {/* <ThreeRendering/> */}

      {/* <JejuMap/> */}

      <NoPlanIsPlan/>

      <Weather setCold={setCold}/>

    </div>
  );
}

export default App;

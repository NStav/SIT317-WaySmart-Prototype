import './App.css';
import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Homepage from './routes/Homepage';

document.title = "WaySmartLandingPage"
function App() {
  return (
    <Routes>
      <Route path='/' element={<Homepage/>}/>
    </Routes>
  );
}

export default App;

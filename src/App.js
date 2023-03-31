
// import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Contact from "../src/components/pages/Contact";
import Home from "../src/components/pages/Home";

function App() {
  // const []= useState([]) 

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
    </div>
  );
}

export default App;

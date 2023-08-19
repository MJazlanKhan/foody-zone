import React from 'react';
import './App.css';
import Navbar from './myComponents/Pages/Navbar';
import Dinner from './myComponents/Pages/Dinner';
import Main from '../src/myComponents/Pages/Main'
import All from '../src/myComponents/Pages/All'
import Breakfast from '../src/myComponents/Pages/Breakfast'
import Lunch from '../src/myComponents/Pages/Lunch'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/all" element={<All />} />
        <Route path="/dinner" element={<Dinner />} />
        <Route path="/breakfast" element={<Breakfast />} />
        <Route path="/lunch" element={<Lunch />} />
        {/* Define other routes here if needed */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

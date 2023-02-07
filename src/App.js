import Sidebar from './components/Sidebar/Sidebar';
import Hero from './components/Hero';
import Page from './components/Page';
import Datepicker from './components/Datepicker';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    // <BrowserRouter>
    <>
     
      <Sidebar /><Routes>
        <Route element={<Sidebar />} />
        <Route path="dashboard" element={<Hero />} />
        <Route path="/" element={<Hero />} />
        <Route path="meeting" element={<Datepicker />} />
      </Routes></>
    // </BrowserRouter>
  );
}

export default App;

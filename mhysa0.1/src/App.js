import React from 'react';
import Home from "./pages/Home";
import About from './pages/About';
import Contact from './pages/Contact';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MhysaClass from './pages/MhysaClass';
import MhysaSpeakers from './pages/MhysaSpeakers';
import Blog from './pages/Blog';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/aboutUs" element={<About />} />
        <Route path="/contactUs" element={<Contact/>} />
        <Route path="/mhysaClass" element={<MhysaClass/>} />
        <Route path="/mhysaSpeakers" element={<MhysaSpeakers/>} />
        <Route path="/blog" element={<Blog/>} />



      </Routes>
  </BrowserRouter>
    
  );
}

export default App;

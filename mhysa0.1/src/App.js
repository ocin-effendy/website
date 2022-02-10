import React from 'react';
import Home from "./pages/Home";
import About from './pages/About';
import Contact from './pages/Contact';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MhysaClass from './pages/MhysaClass';
import MhysaSpeakers from './pages/MhysaSpeakers';
import Blog from './pages/Blog';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import PaymentClass from './pages/PaymentClass.';
import DetailSpeaker from './pages/DetailSpeaker';
import PaymentSpeaker from './pages/PaymentSpeaker';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/aboutUs" element={<About/>} />
          <Route path="/contactUs" element={<Contact/>} />
          <Route path="/mhysaClass" element={<MhysaClass/>} />
          <Route path="/mhysaSpeakers" element={<MhysaSpeakers/>} />
          <Route path="/blog" element={<Blog/>} />
          <Route path="/sign-in" element={<Login/>} />
          <Route path="/sign-up" element={<SignUp/>} />
          <Route path="/payment-class:id" element={<PaymentClass/>} />
          <Route path="/details-speaker:id" element={<DetailSpeaker/>} />
          <Route path="/payment-speaker:id" element={<PaymentSpeaker />} />
        </Routes>
      </BrowserRouter>
    
  );
}

export default App;

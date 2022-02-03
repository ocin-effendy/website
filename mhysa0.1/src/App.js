import React from 'react';
import Home from "./pages/Home";
import About from './pages/About';
import Contact from './pages/Contact';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./config/redux/store";
import MhysaClass from './pages/MhysaClass';
import MhysaSpeakers from './pages/MhysaSpeakers';
import Blog from './pages/Blog';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

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
        </Routes>
      </BrowserRouter>
    
  );
}

export default App;

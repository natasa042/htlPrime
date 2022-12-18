import { BrowserRouter, Route, Routes} from "react-router-dom";
import React from 'react'
import Home from "./components/home/home";
import About from "./components/about";
import Bautechnik from "./components/bautechnik";
import Elektrotechnik from "./components/elektrotechnik";
import Informatik from "./components/informatik";
import Navbar from "./components/navbar/navbar";
import './components/navbar/navbar-style.scss'
import './components/home/home-style.scss'
import './globals-module.css';

function App() {
  return (
    <BrowserRouter>
     <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}  />
        <Route path='/Informatik' element={<Informatik/>} />
        <Route path='/bautechnik' element={<Bautechnik/>} />
        <Route path='/elektrotechnik'element={<Elektrotechnik/>} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;

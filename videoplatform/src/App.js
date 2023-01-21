import { BrowserRouter, Route, Routes} from "react-router-dom";
import React from 'react'
import Home from "./components/home/home";
import About from "./components/about";
import Bautechnik from "./components/bautechnik";
import Elektrotechnik from "./components/elektrotechnik";
import Informatik from "./components/informatik";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import Post from "./components/post/post";
import './components/navbar/navbar-style.scss'
import './components/footer/footer-style.scss'
import './components/home/home-style.scss'
import './globals-module.css';
import './App.scss';
import Container from "react-bootstrap/esm/Container";

function App() {
  return (
    <Container>
      <div className="contentWrap">
        <BrowserRouter>
        <Navbar />
          <Routes className="routes">
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>} />
            <Route path='/Post/:slug' element={<Post/>} />
            <Route path='/Post/:slug' element={<Post/>} />
            <Route path='/Informatik' element={<Informatik/>} />
            <Route path='/bautechnik' element={<Bautechnik/>} />
            <Route path='/elektrotechnik'element={<Elektrotechnik/>} />
          </Routes>
        </BrowserRouter>
        </div>
        <Footer className="footer" />
    </Container>
  );
}

export default App;

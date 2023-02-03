import { BrowserRouter, Route, Routes} from "react-router-dom";
import {React} from 'react'
import Home from "./sites/home";
import About from "./sites/about";
import Bautechnik from "./sites/bautechnik";
import Elektrotechnik from "./sites/elektrotechnik";
import Informatik from "./sites/informatik";
import Mechatronik from "./sites/mechatronik";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import Post from "./components/post/post";
import Picture from "./components/picture/picture";
import Gallery from "./components/gallery/gallery";
import Text from "./components/text/text";
import Slider from "./components/slider/slider";
import './components/navbar/navbar-style.scss'
import './components/footer/footer-style.scss'
import './globals-module.css';
import './App.scss';


function App() {
  return (
    <div className ="siteWrapper">
      <Navbar />
      <div className="contentWrap">
        <BrowserRouter>
        
          <Routes className="routes">
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>} />
            <Route path='/Post/:slug' element={<Post/>} />
            <Route path='/Picture/:slug' element={<Picture/>} />
            <Route path='/Slider/:slug' element={<Slider/>} />
            <Route path='/Gallery/:slug' element={<Gallery/>} />
            <Route path='/Text/:slug' element={<Text/>} />
            <Route path='/Informatik' element={<Informatik/>} />
            <Route path='/bautechnik' element={<Bautechnik/>} />
            <Route path='/elektrotechnik'element={<Elektrotechnik/>} />
            <Route path='/mechatronik'element={<Mechatronik/>} />
          </Routes>
        </BrowserRouter>
      </div>
        <Footer className="footer" /> 
    </div>
  );
}

export default App;

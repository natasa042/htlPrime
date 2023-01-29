import { BrowserRouter, Route, Routes} from "react-router-dom";
import {React} from 'react'
import Home from "./sites/home/home";
import About from "./sites/about/about";
import Bautechnik from "./sites/bautechnik/bautechnik";
import Elektrotechnik from "./sites/elektrotechnik/elektrotechnik";
import Informatik from "./sites/informatik/informatik";
import Mechatronik from "./sites/mechatronik/mechatronik";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import Post from "./components/post/post";
import Picture from "./components/picture/picture";
import Gallery from "./components/gallery/gallery";
import Bost from "./components/text/text";
import './components/navbar/navbar-style.scss'
import './components/footer/footer-style.scss'
import './sites/home/home-style.scss'
import './globals-module.css';
import './App.scss';


function App() {
  return (
    <div>
      <Navbar />
      <div className="contentWrap">
        <BrowserRouter>
        
          <Routes className="routes">
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>} />
            <Route path='/Post/:slug' element={<Post/>} />
            <Route path='/Picture/:slug' element={<Picture/>} />
            <Route path='/Gallery/:slug' element={<Gallery/>} />
            <Route path='/Bost/:slug' element={<Bost/>} />
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

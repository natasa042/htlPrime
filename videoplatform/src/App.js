import { BrowserRouter, Route, Routes} from "react-router-dom";
import {React} from 'react'
import Home from "./sites/home";
import Bautechnik from "./sites/bautechnik";
import Elektrotechnik from "./sites/elektrotechnik";
import Informatik from "./sites/informatik";
import Mechatronik from "./sites/mechatronik";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
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

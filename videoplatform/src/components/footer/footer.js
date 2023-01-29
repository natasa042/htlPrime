import Nav from 'react-bootstrap/Nav';  
import React from "react"
import Logo from './assets/logofooter.svg'
import "bootstrap/dist/css/bootstrap.min.css";
import './footer-style.scss'

function Footer() {
  return (
          <div className="footerWrapper">
            <Nav>
              <img
                  src={Logo}
                  width="300"
                  height="300"
                  className="image"
                  alt="React Bootstrap logo"
                />
            </Nav>
            <Nav>
              <Nav.Link href="/About"><h3>About</h3></Nav.Link>
              <Nav.Link href="/Datenschutz"><h3>Datenschutz</h3></Nav.Link>
              <Nav.Link href="/Impressum"><h3>Impresssum</h3></Nav.Link>
              <Nav.Link href="/Kontakt"><h3>Kontakt</h3></Nav.Link>
            </Nav>
          </div>
  );
}

export default Footer;
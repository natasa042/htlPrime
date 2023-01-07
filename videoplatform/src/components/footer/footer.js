import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "bootstrap/dist/css/bootstrap.min.css";
import "./footer-style.scss"
import React from "react"
import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';

function Footer() {
  return (
    <Navbar collapseOnSelect expand="lg" variant="dark" className="Footer">
      <Container>
        <Navbar.Brand href="/"><h2>HTL Saalfelden</h2></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav>
            <Nav.Link href="/About"><h3>About</h3></Nav.Link>
            <Nav.Link href="/Datenschutz"><h3>Datenschutz</h3></Nav.Link>
            <Nav.Link href="/Impressum"><h3>Impresssum</h3></Nav.Link>
            <Nav.Link href="/Kontakt"><h3>Kontakt</h3></Nav.Link>
          </Nav>
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Footer;
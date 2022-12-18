import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react"

function Navigation() {
  return (
    <Navbar collapseOnSelect expand="lg" variant="dark" className="Navbar">
      <Container>
        <Navbar.Brand href="/"><h2>HTL Saalfelden</h2></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav>
            <Nav.Link href="/Informatik"><h3>Informatik</h3></Nav.Link>
            <Nav.Link href="/Bautechnik"><h3>Bautechnik</h3></Nav.Link>
            <Nav.Link href="/Elektrotechnik"><h3>Elektrotechnik</h3></Nav.Link>
            <Nav.Link href="/Mechatronik"><h3>Mechatronik</h3></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
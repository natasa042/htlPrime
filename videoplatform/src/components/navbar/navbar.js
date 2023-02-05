import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "bootstrap/dist/css/bootstrap.min.css";
import { useMediaQuery } from 'react-responsive'
import React from "react"
 
function Navigation() {
    const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  return (
    <Navbar collapseOnSelect expand="lg" variant="dark" className="Navbar">
      <Container>
        <Navbar.Brand href="/">
          {isTabletOrMobile &&
            <div className="smallFont">
                <p>Mediathek</p><h2>HTL Saalfelden</h2>
            </div>}
            {isBigScreen&&
            <div>
                <h3>Mediathek</h3><h2>HTL Saalfelden</h2>
            </div>}
        </Navbar.Brand>
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
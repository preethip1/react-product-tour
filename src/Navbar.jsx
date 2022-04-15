import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

const MyNavbar = () => {
  return (
    <>
      <Navbar bg="light" expand="lg" className="w-100">
        <Container>
          <Navbar.Brand href="/">Yamak</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/">Products</Nav.Link>
              <Nav.Link href="/">Blog</Nav.Link>
              <Nav.Link href="/">About Us</Nav.Link>
              <Nav.Link href="/">Contact Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default MyNavbar;

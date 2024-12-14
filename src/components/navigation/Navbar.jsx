import React from "react";
import { Navbar, Nav, Container, Button, Image } from "react-bootstrap";
import Logo from "../../../public/logo.svg";

const Header = () => {
  return (
    <Navbar bg="light" expand="lg" className="py-3">
      <Container>
        <Navbar.Brand className="pe-5" href="/">
          <Image
            src={Logo}
            alt="rateify-logo"
            fluid
            style={{ maxWidth: "150px" }}
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#">Categories</Nav.Link>
            <Nav.Link href="#">Contact</Nav.Link>
          </Nav>
          <Button variant="outline-primary rounded-pill">Sign Up</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

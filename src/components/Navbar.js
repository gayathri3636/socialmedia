import React from "react";
import { Navbar, Nav } from "react-bootstrap";

export default function Navbarr() {
  return (
    <Navbar bg="primary" expand="lg">
      <Navbar.Brand href="#home">codecademy</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#home">Catalog</Nav.Link>
        <Nav.Link href="#link">pricing</Nav.Link>
        <Nav.Link href="#link">For Business</Nav.Link>
        <input type ="search" placeholder = "Search for course" />       
        <Nav.Link href="#link">Login</Nav.Link>
        <Nav.Link href="#link">signup</Nav.Link>
      </Nav>
    </Navbar>
  );
}

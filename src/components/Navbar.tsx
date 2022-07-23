import React from 'react';
import { Navbar as NavbarBS, Container, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <NavbarBS className="bg-white shadow-sm mb-2">
      <Container>
        <Nav>
          <Nav.Link to="/" as={NavLink}>
            Home
          </Nav.Link>
          <Nav.Link to="/about" as={NavLink}>
            About
          </Nav.Link>
        </Nav>
      </Container>
    </NavbarBS>
  );
};

export default Navbar;

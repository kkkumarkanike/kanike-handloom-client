import React from "react";
import { Nav, Container, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

function AdminNav() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <LinkContainer to="/admin">
          <Navbar.Brand href="#home">Kanike Handlooms</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          {false ? (
            <Nav>
              <LinkContainer to="/admin/signup">
                <Nav.Link>Sign Up</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/admin/login">
                <Nav.Link>Login</Nav.Link>
              </LinkContainer>
            </Nav>
          ) : (
            <Nav>
              <LinkContainer to="/admin/products">
                <Nav.Link>Products</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/admin/users">
                <Nav.Link>Users</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/admin/logout">
                <Nav.Link>Logout</Nav.Link>
              </LinkContainer>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AdminNav;

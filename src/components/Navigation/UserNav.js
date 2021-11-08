import React from "react";
import { Nav, Container, Navbar, Badge } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { userLogout } from "../../store/actions/userAuthActions";
import { FaCartPlus, FaHeart, FaSignOutAlt } from "react-icons/fa";

function UserNav() {
  const { user } = useSelector((state) => state.userAuth);
  const { cart, favorites } = useSelector((state) => state.cartnFav);
  const dispatch = useDispatch();

  const handleLogout = (e) => {
    e.preventDefault();
    return dispatch(userLogout());
  };
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand href="#home">Kanike Handlooms</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          {user ? (
            <Nav>
              <LinkContainer to="/cart" style={{ margin: "0rem 0.5rem" }}>
                <Nav.Link>
                  <FaCartPlus size={20} />
                  {cart ? (
                    <Badge
                      bg="secondary"
                      pill
                      style={{
                        fontSize: "8px",
                        position: "absolute",
                        marginLeft: "-3px",
                      }}
                    >
                      {cart.length}
                    </Badge>
                  ) : null}
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/favorites" style={{ margin: "0rem 0.5rem" }}>
                <Nav.Link>
                  <FaHeart size={20} />
                  {favorites ? (
                    <Badge
                      bg="secondary"
                      pill
                      style={{
                        fontSize: "8px",
                        position: "absolute",
                        marginLeft: "-3px",
                      }}
                    >
                      {favorites.length}
                    </Badge>
                  ) : null}
                </Nav.Link>
              </LinkContainer>

              <LinkContainer to="/api/user/logout">
                <Nav.Link onClick={handleLogout}>
                  <FaSignOutAlt size={20} />
                </Nav.Link>
              </LinkContainer>
            </Nav>
          ) : (
            <Nav>
              <LinkContainer to="/signup">
                <Nav.Link>Sign Up</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/login">
                <Nav.Link>Login</Nav.Link>
              </LinkContainer>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default UserNav;

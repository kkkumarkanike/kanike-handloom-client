import React, { useState } from "react";
import { Nav, Container, Navbar, Badge } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { userLogout } from "../../store/actions/userAuthActions";
import {
  FaCartPlus,
  FaHeart,
  FaSignOutAlt,
  FaUserAlt,
  FaBoxOpen,
} from "react-icons/fa";
import UserLogoutModal from "../User/UserLogoutModal";

function UserNav() {
  const { user } = useSelector((state) => state.userAuth);
  const { cart, favorites, orders } = useSelector((state) => state.cartnFav);
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>Kanike Handlooms</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          {user ? (
            <Nav>
              <LinkContainer to="/profile" style={{ margin: "0rem 0.5rem" }}>
                <Nav.Link>
                  <FaUserAlt size={18} />
                </Nav.Link>
              </LinkContainer>
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
              <LinkContainer to="/orders" style={{ margin: "0rem 0.5rem" }}>
                <Nav.Link>
                  <FaBoxOpen size={20} />
                  {orders ? (
                    <Badge
                      bg="secondary"
                      pill
                      style={{
                        fontSize: "8px",
                        position: "absolute",
                        marginLeft: "-3px",
                      }}
                    >
                      {orders.length}
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

              <div
                style={{ margin: "0rem 0.5rem" }}
                onClick={() => setIsLogoutModalOpen(true)}
              >
                <Nav.Link>
                  <FaSignOutAlt size={18} />
                </Nav.Link>
              </div>
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
      <UserLogoutModal
        show={isLogoutModalOpen}
        hideModal={() => setIsLogoutModalOpen(false)}
      />
    </Navbar>
  );
}

export default UserNav;

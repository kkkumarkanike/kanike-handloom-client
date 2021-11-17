import React from "react";
import { Modal, Button, Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { userLogout } from "../../store/actions/userAuthActions";

function UserLogoutModal({ show, hideModal }) {
  const dispatch = useDispatch();

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(userLogout());
    hideModal();
  };
  return (
    <Modal show={show} aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton onClick={hideModal}>
        <Modal.Title id="contained-modal-title-vcenter">Logout</Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <Container>
          <p>Are you sure want to logout?</p>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={hideModal} variant="dark">
          CANCEL
        </Button>
        <Button onClick={handleLogout} variant="danger">
          LOGOUT
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default UserLogoutModal;

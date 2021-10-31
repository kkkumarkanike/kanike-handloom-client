import React from "react";
import { Modal, Button, Container, Form } from "react-bootstrap";

function DeleteProductModal({ show, hideModal }) {
  return (
    <Modal show={show} aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton onClick={hideModal}>
        <Modal.Title id="contained-modal-title-vcenter">
          Delete Saree
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <Container>
          <p>Are you sure want to delete the Saree?</p>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={hideModal} variant="dark" size="sm">
          Cancel
        </Button>
        <Button onClick={hideModal} variant="danger" size="sm">
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default DeleteProductModal;

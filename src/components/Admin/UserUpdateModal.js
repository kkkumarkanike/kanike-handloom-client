import React from "react";
import { Modal, Button, Container, Form } from "react-bootstrap";

function UserUpdateModal({ show, hideModal }) {
  return (
    <Modal show={show} aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton onClick={hideModal}>
        <Modal.Title id="contained-modal-title-vcenter">
          Update USer
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <Container>
          <Form.Group className="mb-1">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Saree Name" disabled />
          </Form.Group>
          <Form.Group className="mb-1">
            <Form.Label>Email</Form.Label>
            <Form.Control type="text" placeholder="Email" disabled />
          </Form.Group>
          <Form.Group className="mb-1">
            <Form.Label>Status</Form.Label>
            <Form.Select aria-label="Floating label select example">
              <option value="enable">Enable</option>
              <option value="disable">Disable</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-1">
            <Form.Label>Verified</Form.Label>
            <Form.Select aria-label="Floating label select example" disabled>
              <option value="true">true</option>
              <option value="false">false</option>
            </Form.Select>
          </Form.Group>
          <Button
            variant="dark"
            type="submit"
            className="mt-3"
            style={{ width: "100%" }}
          >
            UPDATE
          </Button>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={hideModal} variant="dark" size="sm">
          Cancel
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default UserUpdateModal;

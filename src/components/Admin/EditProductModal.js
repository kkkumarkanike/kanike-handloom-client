import React from "react";
import { Modal, Button, Container, Form } from "react-bootstrap";

function UpdateProductModal({ show, hideModal }) {
  return (
    <Modal show={show} aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton onClick={hideModal}>
        <Modal.Title id="contained-modal-title-vcenter">
          Update Saree Details
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <Container>
          <Form.Group className="mb-1">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Saree Name" />
          </Form.Group>
          <Form.Group className="mb-1">
            <Form.Label>Description</Form.Label>
            <Form.Control type="text" placeholder="description" />
          </Form.Group>
          <Form.Group className="mb-1">
            <Form.Label>Price</Form.Label>
            <Form.Control type="number" placeholder="price" />
          </Form.Group>
          <Form.Group className="mb-1">
            <Form.Label>Saree Type</Form.Label>
            <Form.Select aria-label="Floating label select example">
              <option>--select--</option>
              <option value="silk">Silk</option>
              <option value="cotton">Cotton</option>
              <option value="silk-boota">Silk with Bootaa</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-1">
            <Form.Label>Color</Form.Label>
            <Form.Control type="text" placeholder="color" />
          </Form.Group>
          <Form.Group className="mb-1">
            <Form.Label>Price</Form.Label>
            <Form.Control type="number" placeholder="price in rupees" />
          </Form.Group>
          <Form.Group className="mb-1">
            <Form.Label>In Stock</Form.Label>
            <Form.Select aria-label="Floating label select example">
              <option value="true">true</option>
              <option value="false">false</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-1">
            <Form.Label>Image Link</Form.Label>
            <Form.Control type="text" placeholder="price in rupees" />
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

export default UpdateProductModal;

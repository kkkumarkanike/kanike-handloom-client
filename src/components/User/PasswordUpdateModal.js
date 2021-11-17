import React, { useState } from "react";
import { Modal, Button, Container, Form } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { changePassword } from "../../store/actions/userAuthActions";

function PasswordUpdateModal({ show, hideModal }) {
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const { user } = useSelector((state) => state.userAuth);
  const dispatch = useDispatch();

  const handleChangePassword = () => {
    console.log(password, user._d);
    dispatch(changePassword(user._id, password));
    return hideModal();
  };

  return (
    <Modal show={show} aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton onClick={hideModal}>
        <Modal.Title id="contained-modal-title-vcenter">
          Change Password
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <Container>
          <Form.Group className="mb-2" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              size="lg"
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-2" controlId="formBasicPassword">
            <Form.Label>Re-Enter Password</Form.Label>
            <Form.Control
              type="password"
              size="lg"
              placeholder="re-enter password"
              value={confPassword}
              onChange={(e) => setConfPassword(e.target.value)}
            />
          </Form.Group>
          <Button
            variant="dark"
            type="submit"
            className="mt-2 mb-2"
            style={{ width: "100%" }}
            size="lg"
            onClick={handleChangePassword}
          >
            UPDATE
          </Button>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={hideModal} variant="danger">
          Cancel
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default PasswordUpdateModal;

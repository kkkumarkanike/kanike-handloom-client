import React, { useState } from "react";
import { Col, Form, Button, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { adminSignIn } from "../../store/actions/adminAuthActions";

function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { signInErrorMessage } = useSelector((state) => state.adminAuth);

  const handleSignIn = (e) => {
    e.preventDefault();
    dispatch(adminSignIn(email, password));
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        // justifyContent: "center",
        // height: "90vh",
        flexDirection: "column",
      }}
      className="mt-5"
    >
      <Col
        lg={4}
        sm={6}
        xs={9}
        className="p-5 shadow mb-3 mt-10 bg-white rounded"
      >
        <h4 className="mb-3">Admin Login</h4>
        <Form>
          <Form.Group className="mb-2" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              size="lg"
              type="email"
              placeholder="enter email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-2" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              size="lg"
              type="password"
              placeholder="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Button
            variant="dark"
            type="submit"
            className="mt-3"
            style={{ width: "100%" }}
            size="lg"
            onClick={(e) => handleSignIn(e)}
          >
            Login
          </Button>
        </Form>
        <p className="mt-3">
          If you don't have account? please <Link to="/signup">sign up</Link>
        </p>
      </Col>
      <Col lg={4} sm={6} xs={9}>
        {signInErrorMessage ? (
          <Alert variant="danger" size="lg">
            {signInErrorMessage}
          </Alert>
        ) : null}
      </Col>
    </div>
  );
}

export default AdminLogin;

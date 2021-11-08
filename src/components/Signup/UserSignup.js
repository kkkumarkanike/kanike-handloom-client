import React, { useState } from "react";
import { Col, Form, Button, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userSignup } from "../../store/actions/userAuthActions";

function UserSignup() {
  const { signUpSuccessMessage, signUpErrorMessage } = useSelector(
    (state) => state.userAuth
  );
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleSignup = (e) => {
    e.preventDefault();
    console.log({ name, email, password });
    dispatch(
      userSignup({
        name,
        email,
        password,
      })
    );
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
        <h4 className="mb-3">User Signup</h4>
        <Form>
          <Form.Group className="mb-2" controlId="formBasicText">
            <Form.Label>Name</Form.Label>
            <Form.Control
              size="lg"
              type="text"
              placeholder="enter name"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </Form.Group>
          <Form.Group className="mb-2" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              size="lg"
              type="email"
              placeholder="enter email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </Form.Group>

          <Form.Group className="mb-2" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              size="lg"
              type="password"
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </Form.Group>

          <Button
            variant="dark"
            type="submit"
            className="mt-3"
            style={{ width: "100%" }}
            size="lg"
            onClick={handleSignup}
          >
            Sign up
          </Button>
        </Form>
        <p className="mt-3">
          If you have an account? please <Link to="/login">Login</Link>
        </p>
      </Col>
      <Col lg={4} sm={6} xs={9}>
        {signUpErrorMessage ? (
          <Alert variant="danger" size="lg">
            {signUpErrorMessage}
          </Alert>
        ) : null}
        {signUpSuccessMessage ? (
          <Alert variant="success" size="lg" style={{ width: "100%" }}>
            {signUpSuccessMessage}
          </Alert>
        ) : null}
      </Col>
    </div>
  );
}

export default UserSignup;

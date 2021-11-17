import React, { useState } from "react";
import { Col, Form, Button, Alert } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { getResetLink } from "../../store/actions/userAuthActions";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const { resetLinkSentError, resetLinkSentSuccess } = useSelector(
    (state) => state.userAuth
  );

  const handleSignIn = (e) => {
    e.preventDefault();
    dispatch(getResetLink(email));
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
        <h4 className="mb-3">Get Reset Link</h4>
        <Form>
          <Form.Group className="mb-2" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              size="lg"
              type="email"
              placeholder="enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Button
            variant="dark"
            type="submit"
            className="mt-3"
            style={{ width: "100%" }}
            size="lg"
            onClick={handleSignIn}
          >
            Send Link
          </Button>
        </Form>
      </Col>
      <Col lg={4} sm={6} xs={9}>
        {resetLinkSentError ? (
          <Alert variant="danger" size="lg">
            {resetLinkSentError}
          </Alert>
        ) : null}
        {resetLinkSentSuccess ? (
          <Alert variant="success" size="lg">
            {resetLinkSentSuccess}
          </Alert>
        ) : null}
      </Col>
    </div>
  );
}

export default ForgotPassword;

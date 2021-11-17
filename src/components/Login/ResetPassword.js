import React, { useState, useEffect } from "react";
import axios from "axios";
import { Col, Form, Button, Alert } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { resetPassword } from "../../store/actions/userAuthActions";

function ResetPassword(props) {
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [isInvalidLink, setIsInvalidLink] = useState(null);
  const { id } = useParams();
  const dispatch = useDispatch();
  const { resetPasswordSuccess, resetPasswordError } = useSelector(
    (state) => state.userAuth
  );

  useEffect(() => {
    if (id) {
      axios
        .get(`/api/user/check-valid-token/${id}`)
        .then((result) => {
          const data = result.data;
          console.log(data);
          setIsInvalidLink(true);
        })
        .catch((error) => {
          const data = error.response.data;
          console.log("errror response", data);
          setIsInvalidLink(false);
        });
    }
  }, []);

  const handleResetPassword = (e) => {
    e.preventDefault();
    dispatch(resetPassword(id, password));
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
        <h4 className="mb-3">Reset your password</h4>
        <Form>
          <Form.Group className="mb-2" controlId="formBasicEmail">
            <Form.Label>Password</Form.Label>
            <Form.Control
              size="lg"
              type="password"
              placeholder="enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-2" controlId="formBasicPassword">
            <Form.Label>Confirm password</Form.Label>
            <Form.Control
              size="lg"
              type="password"
              placeholder="re-enter your password"
              value={confPassword}
              onChange={(e) => setConfPassword(e.target.value)}
            />
          </Form.Group>
          <Button
            variant="dark"
            type="submit"
            className="mt-3"
            style={{ width: "100%" }}
            size="lg"
            onClick={handleResetPassword}
          >
            Reset Password
          </Button>
        </Form>
      </Col>
      <Col lg={4} sm={6} xs={9}>
        {resetPasswordSuccess ? (
          <Alert variant="success" size="lg">
            {resetPasswordSuccess}
          </Alert>
        ) : null}
        {resetPasswordError ? (
          <Alert variant="danger" size="lg">
            {resetPasswordError}
          </Alert>
        ) : null}
      </Col>
    </div>
  );
}

export default ResetPassword;

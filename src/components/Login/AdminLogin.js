import React from "react";
import { Col, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function AdminLogin() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "80vh",
      }}
    >
      <Col lg={4} sm={6} xs={9} className="p-5 shadow mb-5 bg-white">
        <h4 className="mb-3">Admin Login</h4>
        <Form>
          <Form.Group className="mb-2" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              size="lg"
              type="email"
              placeholder="enter email"
              onChange={(e) => console.log(e.target.val)}
            />
          </Form.Group>

          <Form.Group className="mb-2" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control size="lg" type="password" placeholder="password" />
          </Form.Group>

          <Button
            variant="dark"
            type="submit"
            className="mt-3"
            style={{ width: "100%" }}
            size="lg"
          >
            Login
          </Button>
        </Form>
        <p className="mt-3">
          If you don't have account? please <Link to="/signup">sign up</Link>
        </p>
      </Col>
    </div>
  );
}

export default AdminLogin;

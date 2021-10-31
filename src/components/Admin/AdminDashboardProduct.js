import React from "react";
import { Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

function AdminDashboardProduct({ title, count, url }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
      className="p-5 shadow mb-5 bg-white"
    >
      <p style={{ fontSize: 20 }}>{title}</p>
      <p style={{ fontSize: 50, fontWeight: "bold" }}>{count}</p>
      <LinkContainer to={`/admin/${url}`} style={{ width: "100%" }}>
        <Button
          variant="dark"
          type="submit"
          className="mt-3"
          style={{ width: "100%" }}
        >
          VIEW DETAILS
        </Button>
      </LinkContainer>
    </div>
  );
}

export default AdminDashboardProduct;

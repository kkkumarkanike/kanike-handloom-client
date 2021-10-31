import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import AdminDashboardProduct from "../../components/Admin/AdminDashboardProduct";

function Home() {
  return (
    <div>
      <h3>Dashboard</h3>
      <Row>
        <Col lg={4} className="p-4">
          <AdminDashboardProduct
            title="Number of Products"
            count={20}
            url="products"
          />
        </Col>
        <Col lg={4} className="p-4">
          <AdminDashboardProduct
            title="Number of Users"
            count={5}
            url="users"
          />
        </Col>
        <Col lg={4} className="p-4">
          <AdminDashboardProduct title="Disabled Users" count={2} url="users" />
        </Col>
      </Row>
    </div>
  );
}

export default Home;

import { Button } from "react-bootstrap";
import React, { useState } from "react";
import AdminProducts from "../../components/Admin/AdminProducts";
import { PlusCircleFill } from "react-bootstrap-icons";
import AddProductModal from "../../components/Admin/AddProductModal";

function Products() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h3>Products</h3>
        <Button variant="success" size="sm" onClick={() => setIsOpen(true)}>
          <PlusCircleFill /> Add Saree
        </Button>
      </div>
      <AdminProducts />
      <AddProductModal show={isOpen} hideModal={() => setIsOpen(false)} />
    </div>
  );
}

export default Products;

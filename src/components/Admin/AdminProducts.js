import React, { useState } from "react";
import { Table, Button } from "react-bootstrap";
import { TrashFill, PencilFill } from "react-bootstrap-icons";
import DeleteProductModal from "./DeleteProductModal";
import UpdateProductModal from "./EditProductModal";

function AdminProducts() {
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  return (
    <Table responsive className="mt-4">
      <thead>
        <tr>
          <th>S.no</th>
          <th>Name</th>
          <th>Description</th>
          <th>Type</th>
          <th>Color</th>
          <th>Price</th>
          <th>inStock</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Gadwal Saree</td>
          <td>Saree is made up of Silk, Jaree</td>
          <td>silk</td>
          <td>green</td>
          <td>5500/-</td>
          <td>true</td>
          <td>
            <Button
              variant="success"
              size="sm"
              onClick={() => setShowUpdateModal(true)}
            >
              <PencilFill />
            </Button>
          </td>
          <td>
            <Button
              variant="danger"
              size="sm"
              onClick={() => setShowDeleteModal(true)}
            >
              <TrashFill />
            </Button>
          </td>
        </tr>
      </tbody>
      <UpdateProductModal
        show={showUpdateModal}
        hideModal={() => setShowUpdateModal(false)}
      />
      <DeleteProductModal
        show={showDeleteModal}
        hideModal={() => setShowDeleteModal(false)}
      />
    </Table>
  );
}

export default AdminProducts;

import React, { useState } from "react";
import { Table, Button } from "react-bootstrap";
import { TrashFill, PencilFill } from "react-bootstrap-icons";
import UserUpdateModal from "./UserUpdateModal";

function ShowUsers() {
  const [showUserUpdateModal, setShowUserUpdateModal] = useState(false);
  return (
    <Table responsive className="mt-4">
      <thead>
        <tr>
          <th>S.no</th>
          <th>Name</th>
          <th>Email</th>
          <th>Status</th>
          <th>Verified</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Kalyan</td>
          <td>kkalyan812@gmail.com</td>
          <td>enabled</td>
          <td>true</td>
          <td>
            <Button
              variant="success"
              size="sm"
              onClick={() => setShowUserUpdateModal(true)}
            >
              <PencilFill />
            </Button>
          </td>
          <td>
            <Button variant="danger" size="sm">
              <TrashFill />
            </Button>
          </td>
        </tr>
        <UserUpdateModal
          show={showUserUpdateModal}
          hideModal={() => setShowUserUpdateModal(false)}
        />
      </tbody>
    </Table>
  );
}

export default ShowUsers;

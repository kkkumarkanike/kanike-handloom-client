import React, { useState } from "react";
import { Col, Button, Badge } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import avatar from "../../assets/avatar.jpeg";
import {
  FaCartPlus,
  FaHeart,
  FaSignOutAlt,
  FaBoxOpen,
  FaPencilAlt,
} from "react-icons/fa";
import UserLogoutModal from "../../components/User/UserLogoutModal";
import PasswordUpdateModal from "../../components/User/PasswordUpdateModal";

function Profile() {
  const { user } = useSelector((state) => state.userAuth);
  const { cart, favorites, orders } = useSelector((state) => state.cartnFav);
  const [isChangePasswordModelOpen, setIsChangePasswordModelOpen] =
    useState(false);
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        // height: "90vh",
        flexDirection: "column",
      }}
      className="mt-3"
    >
      <Col lg={5} sm={8} xs={9} className="p-5 shadow mb-3 bg-white rounded">
        <img
          src={avatar}
          alt="avatar"
          style={{
            display: "block",
            width: "150px",
            height: "150px",
            borderRadius: "50%",
            marginLeft: "auto",
            marginRight: "auto",
          }}
          className="ml-auto mr-auto"
        />
        <p style={{ textAlign: "center" }} className="pt-3 pb-3">
          {user.email}
        </p>

        <div className="d-flex justify-content-center mb-3">
          <Link to="/cart" style={{ color: "#212529" }}>
            {" "}
            <div
              className="p-3 d-flex flex-column justify-content-center align-items-center rounded-circle"
              style={{
                backgroundColor: "#fff6e6",
                width: "70px",
                height: "70px",
                margin: "0px 5px",
              }}
            >
              <FaCartPlus size={20} />
              <Badge
                bg="dark"
                pill
                style={{
                  fontSize: "8px",
                  position: "absolute",
                  marginLeft: "15px",
                  marginBottom: "20px",
                }}
              >
                {cart ? cart.length : 0}
              </Badge>
            </div>
          </Link>
          <Link to="/orders" style={{ color: "#212529" }}>
            <div
              className="p-3 d-flex flex-column justify-content-center align-items-center rounded-circle"
              style={{
                backgroundColor: "#e6ffe6",
                width: "70px",
                height: "70px",
                margin: "0px 5px",
              }}
            >
              <FaBoxOpen size={20} />
              <Badge
                bg="dark"
                pill
                style={{
                  fontSize: "8px",
                  position: "absolute",
                  marginLeft: "15px",
                  marginBottom: "20px",
                }}
              >
                {orders ? orders.length : 0}
              </Badge>
            </div>
          </Link>
          <Link to="/favorites" style={{ color: "#212529" }}>
            <div
              className="p-3 d-flex flex-column justify-content-center align-items-center rounded-circle"
              style={{
                backgroundColor: "#ffe6e6",
                width: "70px",
                height: "70px",
                margin: "0px 5px",
              }}
            >
              <FaHeart size={20} />
              <Badge
                bg="dark"
                pill
                style={{
                  fontSize: "8px",
                  position: "absolute",
                  marginLeft: "15px",
                  marginBottom: "20px",
                }}
              >
                {favorites ? favorites.length : 0}
              </Badge>
            </div>
          </Link>
        </div>
        <Button
          onClick={() => setIsChangePasswordModelOpen(true)}
          variant="secondary"
          type="submit"
          className="mt-3"
          style={{ width: "100%" }}
          size="lg"
          //   onClick={handleSignIn}
        >
          <FaPencilAlt fontSize={15} style={{ marginRight: "0.5rem" }} />
          CHANGE PASSWORD
        </Button>
        <Button
          variant="dark"
          type="submit"
          className="mt-3"
          style={{ width: "100%" }}
          size="lg"
          onClick={() => setIsLogoutModalOpen(true)}
        >
          <FaSignOutAlt fontSize={15} style={{ marginRight: "0.5rem" }} />
          LOGOUT
        </Button>
        <UserLogoutModal
          show={isLogoutModalOpen}
          hideModal={() => setIsLogoutModalOpen(false)}
        />
        <PasswordUpdateModal
          show={isChangePasswordModelOpen}
          hideModal={() => setIsChangePasswordModelOpen(false)}
        />
      </Col>
    </div>
  );
}

export default Profile;

import React, { useEffect, useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FaRupeeSign, FaTrash } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { deleteFromCart } from "../../store/actions/cartnFavActions";
import Payments from "../../components/Payments/Payments";
import empty from "../../assets/empty.svg";
import { Link } from "react-router-dom";

function Cart() {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.cartnFav);
  const courierCost = 200;
  const [sareeAmount, setSareeAmount] = useState(0);

  useEffect(() => {
    if (cart) {
      let amount = 0;
      cart.map(({ itemInfo }) => {
        amount += parseInt(itemInfo.price);
      });
      setSareeAmount(amount);
    }
  }, [cart]);
  return (
    <div>
      <Container>
        {cart ? (
          <>
            <h3>Shopping Cart</h3>
            <Row>
              <Col lg={8} sm={12} xs={12} md={8} className="p-3">
                <div>
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">Product Details</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Price</th>
                        <th scope="col"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {cart ? (
                        cart.map(({ itemInfo }) => {
                          return (
                            <tr key={itemInfo._id}>
                              <td scope="row">
                                <div style={{ display: "flex" }}>
                                  <img
                                    src={itemInfo.imageLink}
                                    alt=""
                                    width={100}
                                    height={100}
                                    className="m-2"
                                  />
                                  <div
                                    style={{
                                      paddingLeft: "0.5rem",
                                      fontSize: "14px",
                                    }}
                                  >
                                    <p className="m-0 p-0 mt-1">
                                      <strong>{itemInfo.name}</strong>
                                    </p>
                                    <p className="m-0 p-0 mt-1">
                                      {itemInfo.color}
                                    </p>
                                    <p className="m-0 p-0 mt-1">
                                      {itemInfo.sareeType}
                                    </p>
                                  </div>
                                </div>
                              </td>
                              <td>
                                <input
                                  type="text"
                                  value="1"
                                  disabled
                                  className="mt-2"
                                  style={{ textAlign: "center", width: "4rem" }}
                                />
                              </td>
                              <td>
                                <FaRupeeSign fontSize={15} />
                                {itemInfo.price}
                              </td>
                              <td>
                                <Button
                                  variant="danger"
                                  size="lg"
                                  className="mt-1"
                                  onClick={() =>
                                    dispatch(deleteFromCart(itemInfo._id, cart))
                                  }
                                >
                                  <FaTrash size={18} />
                                </Button>
                              </td>
                            </tr>
                          );
                        })
                      ) : (
                        <p>Empty Cart!!</p>
                      )}
                    </tbody>
                  </table>
                </div>
              </Col>
              <Col lg={4} sm={12} xs={12} md={4} className="p-4">
                <div
                  style={{
                    backgroundColor: "#eee",
                    fontSize: "14px",
                    fontWeight: "bold",
                    padding: "2.5rem",
                  }}
                >
                  <p>ORDER SUMMARY</p>
                  <hr />
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                    className="mb-2"
                  >
                    <p>Items {cart ? cart.length : 0}</p>
                    <p>
                      <FaRupeeSign fontSize={15} />
                      {sareeAmount}
                    </p>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="select" className="mb-2">
                      Delivery Address
                    </label>
                    <Form.Select id="select">
                      <option>select address</option>
                      <option>address1</option>
                      <option>address2</option>
                    </Form.Select>
                  </div>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                    className="mb-2"
                  >
                    <p>Courier Charge</p>
                    <p>
                      <FaRupeeSign fontSize={15} />
                      200
                    </p>
                  </div>
                  <hr />
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                    className="mb-2"
                  >
                    <p>Total Amount</p>
                    <p>
                      <FaRupeeSign fontSize={15} />
                      {sareeAmount + courierCost}
                    </p>
                  </div>
                  <Payments
                    amount={sareeAmount + courierCost}
                    description={cart ? `${cart.length} Sarees` : ""}
                    cartItems={cart}
                  />
                </div>
              </Col>
            </Row>
          </>
        ) : (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "70vh",
              flexDirection: "column",
            }}
          >
            <img src={empty} alt="Empty cart" width={250} height={250} />
            <h2 className="pt-2">Your Cart is Empty</h2>
            <p>
              Click on Continue shopping to got the shopping menu and continue
              your shopping!!
            </p>
            <Link to="/">
              <Button variant="dark" className="mt-3" size="lg">
                Continue Shopping
              </Button>
            </Link>
          </div>
        )}
      </Container>
    </div>
  );
}

export default Cart;

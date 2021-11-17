import React from "react";
import StripeCheckout from "react-stripe-checkout";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { completePayment } from "../../store/actions/cartnFavActions";
// import { handleToken } from "../store/actions/authActions";

const Payments = ({ amount, description, cartItems }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const handlePayments = (token) => {
    dispatch(completePayment(token, amount, cartItems, history));
  };
  return (
    <StripeCheckout
      name="Kanike Handlooms"
      description={description}
      currency="INR"
      amount={amount * 100}
      token={(token) => handlePayments(token)}
      stripeKey="pk_test_51GrK91AcP3XN5kttwg2Uo17UmF8QCuCy4Okb59kVtd59ncFPTTQ5kCaCb0p3NHvfEUHr0D6tmUrvJnajwhHU2CxB00Lx6RdcLM"
    >
      <Button variant="dark" size="lg" style={{ width: "100%" }}>
        CHECKOUT
      </Button>
    </StripeCheckout>
  );
};

export default Payments;

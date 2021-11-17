import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { Card, Row, Col, Button } from "react-bootstrap";
import { FaCartPlus, FaHeart, FaShoppingCart } from "react-icons/fa";
import {
  addToFavorites,
  addToCart,
  deleteFromFavorites,
  deleteFromCart,
} from "../../store/actions/cartnFavActions";

function ItemCard({ details }) {
  const { user } = useSelector((state) => state.userAuth);
  const { cart, favorites } = useSelector((state) => state.cartnFav);
  const dispatch = useDispatch();
  const [isFavorite, setIsFavorite] = useState(null);
  const [isInCart, setIsInCart] = useState(null);

  useEffect(() => {
    if (isInCart === null) {
      axios
        .post("/api/cart/in-cart", { itemId: details._id, userId: user._id })
        .then((result) => {
          const data = result.data;
          setIsInCart(data.inCart);
        })
        .catch((error) => {
          console.log(error.response);
        });
    }
    if (isFavorite === null) {
      axios
        .post("/api/favorites/in-cart", {
          itemId: details._id,
          userId: user._id,
        })
        .then((result) => {
          const data = result.data;
          setIsFavorite(data.inFavorites);
        })
        .catch((error) => {
          console.log(error.response);
        });
    }
  }, [details]);

  const handleCartItem = () => {
    if (isInCart) dispatch(deleteFromCart(details._id, cart));
    else {
      dispatch(addToCart(details, user._id));
    }
    setIsInCart(!isInCart);
  };

  const handleFavoriteItem = () => {
    if (isFavorite) dispatch(deleteFromFavorites(details._id, favorites));
    else dispatch(addToFavorites(details, user._id));
    setIsFavorite(!isFavorite);
  };

  return (
    <Col>
      <Card>
        <img src={details.imageLink} alt={details.name} height={250} />
        <Card.Body>
          <Card.Title>{details.name}</Card.Title>
          <p className="p-0 m-0">
            <strong>Rs.{details.price}/-</strong>
          </p>
          <Card.Text>{details.description}</Card.Text>
          <Button
            variant={isInCart ? "dark" : "light"}
            size="lg"
            onClick={handleCartItem}
          >
            {isInCart ? <FaShoppingCart size={18} /> : <FaCartPlus size={18} />}
          </Button>
          <Button
            variant={isFavorite ? "dark" : "light"}
            size="lg"
            style={{ marginLeft: "1rem" }}
            onClick={handleFavoriteItem}
          >
            <FaHeart size={18} />
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default ItemCard;

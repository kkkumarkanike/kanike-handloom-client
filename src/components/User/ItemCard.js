import React, { useState } from "react";
import { Card, Row, Col, Button } from "react-bootstrap";
import image from "../../assets/image.jpeg";
import { FaCartPlus, FaHeart } from "react-icons/fa";

function ItemCard({ details }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isInCart, setIsInCart] = useState(false);
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
            onClick={() => setIsInCart(!isInCart)}
          >
            <FaCartPlus size={18} />
          </Button>
          <Button
            variant={isFavorite ? "dark" : "light"}
            size="lg"
            style={{ marginLeft: "1rem" }}
            onClick={() => setIsFavorite(!isFavorite)}
          >
            <FaHeart size={18} />
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default ItemCard;

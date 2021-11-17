import React from "react";
import { useSelector } from "react-redux";
import ItemCard from "../../components/User/ItemCard";
import { Row } from "react-bootstrap";

function Home() {
  const { user } = useSelector((state) => state.userAuth);
  const { sarees } = useSelector((state) => state.cartnFav);

  return (
    <div>
      {user ? (
        <div>
          {sarees ? (
            <Row xs={1} md={3} sm="2" className="g-4">
              {Array.from({ length: sarees.length }).map((_, idx) => (
                <ItemCard key={idx} details={sarees[idx]} />
              ))}
            </Row>
          ) : (
            "Out of Stock"
          )}
        </div>
      ) : (
        "User Home"
      )}
    </div>
  );
}

export default Home;

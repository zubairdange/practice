import React from "react";
import { Card, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export const Mycard = ({ itemCurent }) => {
  return (
    <div>
      <Col>
        <Card style={{ width: "18rem" }}>
          <Col>
            <Card.Img variant="top" src={itemCurent.cimage} />
          </Col>

          <Col>
            <Card.Title>{itemCurent.title}</Card.Title>
          </Col>

          <Card.Body>
            <Card.Text>{itemCurent.name}</Card.Text>

            <Card.Text>{itemCurent.descp}</Card.Text>

            <Card.Link> {itemCurent.links}</Card.Link>
          </Card.Body>
        </Card>
      </Col>

      {/* <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={img2} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={img3} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={img4} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card> */}
    </div>
  );
};

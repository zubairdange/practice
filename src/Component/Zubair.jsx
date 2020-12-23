import React from "react";
import { Card, Col } from "react-bootstrap";

export const Zubair = ({ curentData }) => {
  return (
    <React.Fragment>
      <Col>
        <Card style={{ width: "18rem" }}>
          <Card.Title>{curentData.Title}</Card.Title>
          <Card.Img
            variant="top"
            height="250px"
            width="300px"
            src={curentData.Image}
          />
          <Card.Body>
            <Card.Text>{curentData.Text}</Card.Text>
            <Card.Link>{curentData.Link}</Card.Link>
          </Card.Body>
        </Card>
      </Col>
    </React.Fragment>
  );
};

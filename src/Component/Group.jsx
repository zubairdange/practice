import React from "react";
import { Col, Card } from "react-bootstrap";
export const Group = (itemCurent) => {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Col>
          <Card.Title>{itemCurent.groupTitle}</Card.Title>
        </Col>

        <Card.Body>
          <Card.Text>{itemCurent.groupName}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

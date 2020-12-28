import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Card } from "react-bootstrap";
export const Group = ({ itemCurent }) => {
  console.log("myyyyyyy", itemCurent);
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>{itemCurent.groupTitle}</Card.Title>
          <Card.Text>{itemCurent.groupName}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

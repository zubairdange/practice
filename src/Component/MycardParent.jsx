import React from "react";
import { Mycard } from "./Mycard";
import { CardReducer } from "./Reducer/CardReducer";
import { Row } from "react-bootstrap";
export const MycardParent = () => {
  return (
    <div>
      <Row>
        {CardReducer.cardItem.map((item) => {
          return <Mycard itemCurent={item} />;
        })}
      </Row>
    </div>
  );
};

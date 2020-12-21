import React from "react";
import { Mycard } from "./Mycard";
import { CardReducer } from "./Reducer/CardReducer";
import { Row } from "react-bootstrap";
export const MycardParent = () => {
  return (
    <React.Fragment>
      <Row>
        {CardReducer.cardItem.map((item) => {
          return <Mycard itemCurent={item} />;
        })}
      </Row>
    </React.Fragment>
  );
};

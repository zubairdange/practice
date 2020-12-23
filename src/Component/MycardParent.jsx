import React, { useEffect, useState } from "react";
import { Mycard } from "./Mycard";
import { CardReducer } from "./Reducer/CardReducer";
import { useSelector } from "react-redux";
import { getAllCards } from "../Component/State/selecter/cards";
import { Row } from "react-bootstrap";
export const MycardParent = () => {
  const selector = useSelector(getAllCards);
  const [carddata, setcarddata] = useState();
  useEffect(() => {
    setcarddata(selector);
  }, [selector]);
  console.log("cardsdata====>", carddata);
  return (
    <React.Fragment>
      <Row>
        {carddata &&
          carddata.map((item) => {
            return <Mycard itemCurent={item} />;
          })}
      </Row>
    </React.Fragment>
  );
};

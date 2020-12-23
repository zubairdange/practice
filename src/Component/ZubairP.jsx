import React from "react";
import { Row } from "react-bootstrap";

import { ZubsRed } from "./Reducer/ZubsRed";
import { Zubair } from "./Zubair";

export const ZubairP = () => {
  return (
    <React.Fragment>
      <Row>
        {ZubsRed.zubsData.map((data) => {
          return <Zubair curentData={data} />;
        })}
      </Row>
    </React.Fragment>
  );
};

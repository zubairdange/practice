import React from "react";
import "./App.css";
import { Mycard } from "./Component/Mycard";
import { MycardParent } from "./Component/MycardParent";
import { Cake } from "./Component/Cake";
import { Zubair } from "./Component/Zubair";
import { ZubairP } from "./Component/ZubairP";
import { CardDispatch } from "./Component/CardDispatch";
import { MyReport } from "./Component/MyReport";
import { GroupP } from "./Component/GroupP";

function App() {
  return (
    <div>
      {/* <ZubairP /> */}

      {/* <CardDispatch />
      <MycardParent /> */}
      <GroupP />
    </div>
  );
}

export default App;

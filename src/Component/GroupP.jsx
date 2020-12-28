import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Group } from "./Group";
import { groupReducer } from "./State/Reducer/groupReducer";
import { getAllGroup } from "./State/selecter/Group";
export const GroupP = () => {
  const selector = useSelector(getAllGroup);
  const [groupData, setGroupData] = useState();
  useEffect =
    (() => {
      setGroupData(selector);
    },
    [selector]);
  console.log = "groupData====>,groupdata";
  return (
    <div>
      {groupData &&
        groupData.map((item) => {
          return <Group itemCurent={item} />;
        })}
    </div>
  );
};

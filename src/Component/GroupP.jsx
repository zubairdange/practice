import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Group } from "./Group";
import { getAllGroup } from "./State/selecter/groups";
export const GroupP = () => {
  const selector = useSelector(getAllGroup);
  const [groupData, setGroupData] = useState();
  useEffect(() => {
    setGroupData(selector);
    console.log("hiiiiiiiiii", selector);
  }, [selector]);
  console.log("groupsdata=====>", groupData);
  return (
    <div>
      {groupData &&
        groupData.map((item) => {
          return <Group itemCurent={item} />;
        })}
    </div>
  );
};

import { uuid } from "uuidv4";

export const addNewGroup = (groupName, groupTitle) => ({
  type: "ADD_NEW_Group",
  group: {
    id: uuid(),
    groupName,
    groupTitle,
  },
});

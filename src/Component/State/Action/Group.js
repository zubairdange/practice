import { uuid } from "uuidv4";

export const addNewGroup = (id, groupName, GroupTitle) => ({
  type: "ADD_NEW_CARD",
  group: {
    id: uuid(),
    groupName,
    GroupTitle,
  },
});

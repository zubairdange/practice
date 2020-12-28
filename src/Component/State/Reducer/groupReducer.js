import { uuid } from "uuidv4";
const groupReducer = (state = groupDefaultState, action) => {
  switch (action.type) {
    case "ADD_NEW_Group":
      return {
        ...state,
        groups: [action.group, ...state.groups],
      };

    default:
      return state;
  }
};

const groupDefaultState = {
  groups: [
    {
      id: uuid(),
      groupName: "React Developer",
      groupTitle: "welcome to REACT World",
    },
    {
      id: uuid(),

      groupName: "UI Developer",
      groupTitle: "welcome to UI Technologies",
    },
  ],
};
export default groupReducer;

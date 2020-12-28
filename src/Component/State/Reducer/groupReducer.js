import { uuid } from "uuidv4";
export const groupReducer = (state = groupDefaultState, action) => {
  switch (action.type) {
    case "ADD_NEW_Group":
      return {
        ...state,
        group: [...state.group, action.group],
      };

    default:
      return state;
  }
};

const groupDefaultState = {
  group: [
    {
      id: uuid(),
      groupName: "React Developer",
      groupTitle: "welcome to REACT World",
    },
    {
      groupName: "UI Developer",
      groupTitle: "welcome to UI Technologies",
    },
  ],
};

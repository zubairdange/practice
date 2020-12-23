import { uuid } from "uuidv4";
const cardsReducer = (state = cardsDefaultState, action) => {
  switch (action.type) {
    case "ADD_NEW_CARD":
      return {
        ...state,
        Cards: [...state.Cards, action.card],
      };

    default:
      return state;
  }
};

const cardsDefaultState = {
  Cards: [
    {
      id: uuid(),
      name: "zubair ahmed",
      title: "This is my card",
      descp: "hjbkjfjjkbvjwbwjfjvjvbjkj bjbdkj kjjbk",
      links: "www.google.com",
    },
  ],
};

export default cardsReducer;

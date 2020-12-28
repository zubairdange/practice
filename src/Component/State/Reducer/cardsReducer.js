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
      cimage: "Images/img1.jpg",
      title: "redux",
      links: "www.google.com",

      name: "zubair ahmed",
      descp: "card implimented in redux",
    },
    {
      id: uuid(),
      links: "mdtauseef27@gmail.com",

      cimage: "Images/z5.jpg",
      title: "redux",

      name: "Tauseef Iqball",
      descp: "card implimented in redux",
    },
  ],
};

export default cardsReducer;

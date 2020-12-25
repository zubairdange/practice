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
      title: "redux",
      descp: "card implimented in redux",
      links: "www.google.com",
      cimage: "Images/img1.jpg",
    },
    {
      id: uuid(),
      name: "Tauseef Iqball",
      title: "redux",
      descp: "card implimented in redux",
      links: "mdtauseef27@gmail.com",
      cimage: "Images/z5.jpg",
    },
  ],
};

export default cardsReducer;

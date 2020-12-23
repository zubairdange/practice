import uuid from "uuid/v4";

export const addNewCard = ({ name, title, descp, links }) => ({
  type: "ADD_NEW_CARD",
  card: {
    id: uuid(),
    name,
    title,
    descp,
    links,
  },
});

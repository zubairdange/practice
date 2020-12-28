import { uuid } from "uuidv4";

export const addNewCard = (cimage, title, name, descp, links) => ({
  type: "ADD_NEW_CARD",
  card: {
    id: uuid(),
    cimage,
    title,
    name,

    descp,
    links,
  },
});

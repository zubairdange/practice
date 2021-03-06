import { createStore, combineReducers } from "redux";
import cardsReducer from "../Reducer/cardsReducer";
import groupReducer from "../Reducer/groupReducer";

const configureStore = () => {
  const store = createStore(
    combineReducers({
      cardsReducer,
      groupReducer,
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store;
};

export default configureStore;

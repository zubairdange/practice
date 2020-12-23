import { createStore, combineReducers } from "redux";
import cardsReducer from "../Reducer/cardsReducer";

const configureStore = () => {
  const store = createStore(
    combineReducers({
      cardsReducer,
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store;
};

export default configureStore;

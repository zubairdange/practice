import redux, { createStore } from "redux";
import { CakeReducer } from "../Reducer/CakeReducer";
const ConfigureStore = () => {
  const store = createStore(CakeReducer);
};
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
return store;

console.log("initialstate", store.getState());
const unsubscribe = store.subscribe(() =>
  console.log("updatedstore", store.getState())
);
store.dispatch(Buycake());
store.dispatch(Buycake());
store.dispatch(Buycake());
unsubscribe();

import { createStore, combineReducers } from "redux";
import content from "../../content";

const store = createStore(
  combineReducers({ content: content.reducer }),
  process.env.NODE_ENV === "development" &&
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;

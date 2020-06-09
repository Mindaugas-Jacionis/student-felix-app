import { createStore } from "redux";
import contentReducer from "../../content";

const store = createStore(contentReducer);

export default store;

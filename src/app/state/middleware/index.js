import thunk from "redux-thunk";
import { apiMiddleware } from "redux-api-middleware";
// import { routerMiddleware } from "connected-react-router";

import log from "./log";
import authHandling from "./authHandling";
// import history from "../../history";

// export default [routerMiddleware(history), apiMiddleware, thunk, authHandling, log];
export default [apiMiddleware, thunk, authHandling, log];

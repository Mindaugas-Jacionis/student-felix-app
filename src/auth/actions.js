// import { RSAA } from "redux-api-middleware";
import { createAction } from "redux-api-middleware";

import * as types from "./types";

// new way of defining fetch action creators via redux-api-middleware
export const login = (username, password) =>
  createAction({
    endpoint: "https://academy-video-api.herokuapp.com/auth/login",
    method: "POST",
    body: JSON.stringify({
      username,
      password,
    }),
    headers: {
      "Content-Type": "application/json",
    },
    types: [types.LOGIN_REQ, types.LOGIN_SUCESS, types.LOGIN_FAILURE],
  });

// "old" way of defining fetch action creators via redux-api-middleware
// export const login = (username, password) => {
//   return {
//     [RSAA]: {
//       endpoint: "https://academy-video-api.herokuapp.com/auth/login",
//       method: "POST",
//       body: JSON.stringify({
//         username,
//         password,
//       }),
//       headers: {
//         "Content-Type": "application/json",
//       },
//       types: [types.LOGIN_REQ, types.LOGIN_SUCESS, types.LOGIN_FAILURE],
//     },
//   };
// };

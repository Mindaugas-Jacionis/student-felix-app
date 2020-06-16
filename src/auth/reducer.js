import * as types from "./types";

const DEFAULT_AUTH_STATE = {
  token: localStorage.getItem("authToken"),
  login: {
    loading: false,
    error: null,
  },
};

function reducer(state = DEFAULT_AUTH_STATE, action) {
  switch (action.type) {
    case types.LOGIN_REQ:
      return { ...state, login: { ...state.login, loading: true } };
    case types.LOGIN_FAILURE:
      return {
        ...state,
        login: {
          ...state.login,
          loading: false,
          error: action.payload,
        },
      };
    case types.LOGIN_SUCESS:
      return { ...state, token: action.payload.token, login: { ...state.login, loading: false } };

    default:
      return state;
  }
}

export default reducer;

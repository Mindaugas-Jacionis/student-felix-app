// import history from "../../history";
import auth from "../../../auth";

const log = ({ dispatch }) => (next) => (action) => {
  if (action.type === auth.types.LOGIN_SUCESS) {
    localStorage.setItem("authToken", action.payload.token);
  }

  // if (action.error === 401) {
  //   return dispatch(auth.actions.logout());
  // }

  if (action.type === auth.types.LOGOUT_SUCESS) {
    // history.replace("/"); // need to look into why it is not working
    localStorage.removeItem("authToken");
  }

  return next(action);
};

export default log;

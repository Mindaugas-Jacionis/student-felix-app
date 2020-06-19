import history from "../../history";
import auth from "../../../auth";

const log = ({ dispatch }) => (next) => (action) => {
  if (action.type === auth.types.LOGIN_SUCESS) {
    localStorage.setItem("authToken", action.payload.token);
  }

  const isUnauthorized = action.payload && action.payload.status === 401;

  if (action.type === auth.types.LOGOUT_SUCESS || isUnauthorized) {
    history.replace("/");
    localStorage.removeItem("authToken");
  }

  return next(action);
};

export default log;

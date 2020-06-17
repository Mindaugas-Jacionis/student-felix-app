import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import auth from "../../../auth";
import "./Login.scss";
import Button from "../../components/Button/Button";
import eye from "../../images/eye.svg";

const Login = () => {
  let emailInput = React.createRef();
  let passwordInput = React.createRef();
  const [showPassword, setShowPassword] = useState(false);
  const history = useHistory();

  const dispatch = useDispatch();
  const error = useSelector(auth.selectors.getLoginErrorMessage);
  const loading = useSelector(auth.selectors.isFetchingLogin);
  const isAuthenticated = !!useSelector(auth.selectors.getAccessToken);
  const token = useSelector(auth.selectors.getAccessToken);

  useEffect(() => {
    if (isAuthenticated) {
      history.replace("/content");
    } else {
      emailInput.focus();
    }
  }, [emailInput, history, isAuthenticated, token]);

  const signIn = () => {
    dispatch(auth.actions.login(emailInput.value, passwordInput.value));
  };

  const revealPassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <section className="hero has-background-black-ter is-fullheight-with-navbar login-section">
      <div className="hero-body">
        <div className="container">
          <div className="tile login-tile">
            <div className="tile has-background-grey-light is-6 is-vertical ">
              <form onSubmit={signIn}>
                {loading && <p>Processing login...</p>}
                <div className="field">
                  <label className="label">Username</label>
                  <div className="control">
                    <input
                      className="input"
                      type="email"
                      ref={(input) => {
                        emailInput = input;
                      }}
                    />
                  </div>
                </div>
                <div className="field password-field">
                  <label className="label">Password</label>
                  <div className="control has-icons-right">
                    <span
                      className="icon is-small is-right icon-eye"
                      onMouseDown={revealPassword}
                      onMouseUp={revealPassword}
                    >
                      <img src={eye} alt="eye icon" />
                    </span>
                    <input
                      className="input"
                      type={showPassword ? "text" : "password"}
                      ref={(input) => {
                        passwordInput = input;
                      }}
                    />
                  </div>
                </div>
                {error && <p className="is-size-6 has-text-danger">{error}</p>}

                <div className="field">
                  <div className="control has-text-centered">
                    <Button type="submit" onClick={signIn}>
                      Sign In
                    </Button>
                  </div>
                </div>

                <p className="is-size-6">
                  Don't have an account? <Link to="/register">Register</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;

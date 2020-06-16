import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import auth from "../../../auth";
import "./Login.scss";
import Button from "../../components/Button/Button";
import eye from "../../images/eye.svg";

const Login = ({ login, loading, error, isAuthenticated, token }) => {
  let emailInput = React.createRef();
  let passwordInput = React.createRef();
  const [showPassword, setShowPassword] = useState(false);
  const history = useHistory();

  useEffect(() => {
    if (isAuthenticated) {
      history.replace("/content");
    } else {
      emailInput.focus();
    }
  }, [emailInput, history, isAuthenticated, token]);

  const signIn = () => {
    login(emailInput.value, passwordInput.value);
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

const enhance = connect(
  (state) => {
    return {
      error: auth.selectors.getLoginErrorMessage(state),
      loading: auth.selectors.isFetchingLogin(state),
      isAuthenticated: !!auth.selectors.getAccessToken(state),
      token: auth.selectors.getAccessToken(state),
    };
  },
  (dispatch) => {
    return {
      login: bindActionCreators(auth.actions.login, dispatch),
    };
  }
);

export default enhance(Login);

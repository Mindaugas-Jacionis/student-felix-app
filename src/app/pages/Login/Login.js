import React, { useState, useEffect } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import "./Login.scss";
import Button from "../../components/Button/Button";
import eye from "../../images/eye.svg";

const Login = () => {
  let emailInput = React.createRef();
  let passwordInput = React.createRef();

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(false);

  const history = useHistory();
  const location = useLocation();

  console.log(location);

  useEffect(() => {
    if (localStorage.authorization) {
      history.replace("/content");
    }
    emailInput.focus();
  }, [history, emailInput]);

  const signIn = async () => {
    const response = await fetch(
      "https://academy-video-api.herokuapp.com/auth/login",
      {
        method: "POST",
        body: JSON.stringify({
          username: emailInput.value,
          password: passwordInput.value,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (!response.ok) {
      const { message } = await response.json();
      return setError(message);
    }
    const { token } = await response.json();
    localStorage.setItem("authorization", token);
    return history.replace(
      location.state ? location.state.referrer.pathname : "/content"
    );
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
                  <Button onClick={signIn}>Sign In</Button>
                </div>
              </div>

              <p className="is-size-6">
                Don't have an account? <Link to="/register">Register</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// class Login extends Component {
//   emailInput = React.createRef();
//   passwordInput = React.createRef();

//   state = {
//     showPassword: false,
//     loading: false,
//     token: "",
//   };
//   componentDidMount() {
//     if (localStorage.authorization) {
//       this.props.history.replace("/content");
//     }
//     this.emailInput.focus();
//   }
//   signIn = async () => {
//     const response = await fetch(
//       "https://academy-video-api.herokuapp.com/auth/login",
//       {
//         method: "POST",
//         body: JSON.stringify({
//           username: this.emailInput.value,
//           password: this.passwordInput.value,
//         }),
//         headers: {
//           "Content-Type": "application/json",
//         },
//       }
//     );
//     if (!response.ok) {
//       const { message } = await response.json();
//       return this.setState({ error: message });
//     }
//     const { token } = await response.json();
//     localStorage.setItem("authorization", token);
//     return this.props.history.replace("/content");
//   };
//   showPassword = () => {
//     this.setState((prevState) => ({
//       showPassword: !prevState.showPassword,
//     }));
//   };
//   render() {
//     return (
//       <section className="hero has-background-black-ter is-fullheight-with-navbar login-section">
//         <div className="hero-body">
//           <div className="container">
//             <div className="tile login-tile">
//               <div className="tile has-background-grey-light is-6 is-vertical ">
//                 <div className="field">
//                   <label className="label">Username</label>
//                   <div className="control">
//                     <input
//                       className="input"
//                       type="email"
//                       ref={(input) => {
//                         this.emailInput = input;
//                       }}
//                     />
//                   </div>
//                 </div>
//                 <div className="field password-field">
//                   <label className="label">Password</label>
//                   <div className="control has-icons-right">
//                     <span
//                       className="icon is-small is-right icon-eye"
//                       onMouseDown={this.showPassword}
//                       onMouseUp={this.showPassword}
//                     >
//                       <img src={eye} alt="eye icon" />
//                     </span>
//                     <input
//                       className="input"
//                       type={this.state.showPassword ? "text" : "password"}
//                       ref={(input) => {
//                         this.passwordInput = input;
//                       }}
//                     />
//                   </div>
//                 </div>
//                 {this.state.error && (
//                   <p className="is-size-6 has-text-danger">
//                     {this.state.error}
//                   </p>
//                 )}

//                 <div className="field">
//                   <div className="control has-text-centered">
//                     <Button onClick={this.signIn}>Sign In</Button>
//                   </div>
//                 </div>

//                 <p className="is-size-6">
//                   Don't have an account? <Link to="/register">Register</Link>
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     );
//   }
// }

export default Login;

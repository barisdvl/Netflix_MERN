import { Checkbox } from "@mui/material";
import { useContext, useState } from "react";
import "./login.css";
import { login } from "../../authContext/apiCalls";
import { AuthContext } from "../../authContext/AuthContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { dispatch } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    login({ email, password }, dispatch);
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <img
          className="loginLogo"
          src="https://i.ibb.co/yyhVzZ7/logo.png"
          alt=""
        />
      </div>
      <div className="loginBottomContainer">
        <div className="loginCard">
          <div className="loginCardHeader">
            <h3>Sign In</h3>
          </div>
          <form className="loginCardForm">
            <div className="loginFormInputItem">
              <input
                type="text"
                placeholder="Email adress"
                className="loginFormInputText"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="loginFormInputItem">
              <input
                type="password"
                placeholder="Password"
                className="loginFormInputText"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="loginFormSubmitBtn">
              <input
                type="submit"
                value="LOG IN"
                className="loginButton"
                onClick={handleLogin}
              />
            </div>
            <div className="rememberMe">
              <div className="checkbox">
                <Checkbox defaultChecked size="small" />
                <span>Remember me</span>
              </div>
              <div className="needHelp">
                <span>Need help?</span>
              </div>
            </div>
          </form>
          <div className="loginFacebook">
            <img
              src="https://img.icons8.com/fluency/48/000000/facebook.png"
              alt=""
              className="facebookIcon"
            />
            <span>Login with Facebook</span>
          </div>
          <div className="signupNow">
            <span>New to Netflix? </span>
            <a href="/">Sign up now.</a>
          </div>
          <small className="botCheck">
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. <b>Learn more</b>.
          </small>
        </div>
      </div>
    </div>
  );
}

import { Checkbox } from "@mui/material";

import("./login.css");

export default function Login() {
  return (
    <div className="login">
      <div className="loginWrapper">
        <img className="loginLogo" src="https://i.ibb.co/yyhVzZ7/logo.png" alt="" />
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
              />
            </div>
            <div className="loginFormInputItem">
              <input
                type="password"
                placeholder="Password"
                className="loginFormInputText"
                required
              />
            </div>
            <div className="loginFormSubmitBtn">
              <input type="submit" value="LOG IN" className="loginButton" />
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

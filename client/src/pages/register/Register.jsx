import { useRef, useState } from "react";

import("./register.css");

export default function Register() {
  const [isEmail, setIsEmail] = useState("");
  const [isPassword, setIsPassword] = useState("");

  let emailRef = useRef();
  let passwordRef = useRef();

  const handleStart = () => {
    setIsEmail(emailRef.current.value);
  };
  const handleFinish = () => {
    setIsPassword(passwordRef.current.value);
  };

  return (
    <div className="register">
      <div className="registerWrapper">
        <img className="logo" src="https://i.ibb.co/yyhVzZ7/logo.png" alt="" />
        <button className="loginBtn">Sign In</button>
      </div>
      <div className="bottomContainer">
        <div className="registerContainer">
          <h1>Unlimited movies, TV shows, and more.</h1>
          <h2>Watch anywhere. Cancel anytime.</h2>
          <form className="cardForm">
            <h3>
              Ready to watch? Enter your email to create or restart your
              membership.
            </h3>
            {!isEmail ? (
              <div className="cardInput">
                <input
                  className="formInputText"
                  type="text"
                  placeholder="Email address"
                  required
                  ref={emailRef}
                />
                <button className="submitBtn" onClick={handleStart}>
                  Get Started
                </button>
              </div>
            ) : (
              <form className="cardInput">
                <input
                  className="formInputText"
                  type="password"
                  placeholder="Password"
                  required
                  ref={passwordRef}
                />
                <button className="submitBtn" onClick={handleFinish}>
                  Finish
                </button>
              </form>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

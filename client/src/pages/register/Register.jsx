import axios from "axios";
import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import("./register.css");

export default function Register() {
  const [email, setIsEmail] = useState("");
  const [password, setIsPassword] = useState("");
  const [username, setIsUsername] = useState("");
  const navigate = useNavigate();

  let emailRef = useRef();
  let passwordRef = useRef();
  let usernameRef = useRef();

  const handleStart = () => {
    setIsEmail(emailRef.current.value);
  };
  const handleFinish = async (e) => {
    e.preventDefault();
    setIsPassword(passwordRef.current.value);
    setIsUsername(usernameRef.current.value);
    try {
      await axios.post("/auth/register", { username, email, password });
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="register">
      <div className="registerWrapper">
        <img className="logo" src="https://i.ibb.co/yyhVzZ7/logo.png" alt="" />
        <Link to="/login" className="link">
          <button className="loginBtn">Sign In</button>
        </Link>
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
            {!email ? (
              <form className="cardInput">
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
              </form>
            ) : (
              <form className="cardInput">
                <div className="cardInputRev">
                  <input
                    className="formInputTextRev"
                    type="text"
                    placeholder="Username"
                    required
                    ref={usernameRef}
                  />
                  <input
                    className="formInputTextRev"
                    type="password"
                    placeholder="Password"
                    required
                    ref={passwordRef}
                  />
                </div>
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

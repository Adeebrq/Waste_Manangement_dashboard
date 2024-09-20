import React, { useState } from 'react';
import "./Login.css";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { BiSolidHide, BiSolidShow } from "react-icons/bi";
import { Link, useNavigate } from 'react-router-dom';
import backgroundImage from './image/backgroundtwo.png';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const Navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault(); // to avoid automatic reloading
    // Navigate to Home directly without any checks
    Navigate('/Home');
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className='container1'>
      <div className='login-container'>
        <div className="login-wrapper">
          <div className="login-content">

            <h1 className="logo">LOGO</h1>
            <h2 className="login-title">Login to your account</h2>
            <form onSubmit={handleLogin}>
              <div className="input-container">
                <i className='icon email-icon'><MdEmail /></i>
                <input
                  type="text"
                  placeholder="Enter your mail ID (Click login)"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </div>

              <div className="input-container">
                <i className='icon password-icon'><RiLockPasswordFill /></i>
                <input
                  type="password"
                  placeholder="Enter your Password (Click login)"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
                <i className='icon hide-icon'><BiSolidHide /></i>
              </div>

              <button type="submit" className="login-button">Login</button>

              <div className="footer">
                <span>Powered by</span>
                <span className="footer-logo">LOGO</span>
              </div>

              <p className="copyright">2024. All Rights Reserved.</p>
            </form>
          </div>
        </div>

        <div className="image-container">
          <img src={backgroundImage} alt="background" className="side-image"/>
        </div>
      </div>
    </div>
  );
};

export default Login;

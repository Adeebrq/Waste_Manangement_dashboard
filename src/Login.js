import React, { useState} from 'react';
import "./Login.css";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { BiSolidHide } from "react-icons/bi";
import { Link, useNavigate } from 'react-router-dom';
import backgroundImage from './/image/backgroundtwo.png'; 


const Login = () => {
  const [email, setEmail]= useState("");
  const [password, setPassword]=useState("");
  const [error, setError]= useState("");
  const Navigate= useNavigate();


  const authenticateUser = (email, password) => {
    const validEmail = 'user';
    const validPassword = '123';
    return validEmail === email && validPassword === password;
  };

  const handleLogin = (event) => {
    event.preventDefault(); 

    if (authenticateUser(email, password)) {
      Navigate('/Home');
    } else {
      setError('Invalid email or password');
    }
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
            <input type="text" placeholder="Enter your mail ID (Enter 'user')" onChange={(e)=> setEmail(e.target.value)} value={email} />
          </div>

          <div className="input-container">
            <i className='icon password-icon'><RiLockPasswordFill /></i>
            <input type="password" placeholder="Enter your Password (Enter '123')"  onChange={(e)=> setPassword(e.target.value)} value={password}/>
            <i className='icon hide-icon'><BiSolidHide /></i>
          </div>
          {error && <p className="error-message">{error}</p>}

          <Link to="resetPassword" className="forgot-password">Forgot Password ?</Link>
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
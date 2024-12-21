import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { handleError, handleSuccess } from '../../utils';
import { ToastContainer } from 'react-toastify';
import './LoginCss.css';

const Login = () => {
  const [loginInfo, setLoginInfo] = useState({
    email: '',
    password: ''
  })

  const navigate = useNavigate();

  const handleChange = (e) => {
    const {name, value} = e.target;
    const copyLoginInfo = {...loginInfo}
    copyLoginInfo[name] = value;
    setLoginInfo(copyLoginInfo);
  }

  const handleLogin = async(e) => {
    e.preventDefault()
    const {email, password} = loginInfo;
    if(!email || !password ) {
      return handleError('Email and Password are required!')
    }

    try {
      const url = `http://localhost:8080/auth/login`;
      const response = await fetch(url, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginInfo)
      })
      const result = await response.json();
      const {success, message, jwtToken, name, error} = result;

      if(success) {
        handleSuccess(message)
        localStorage.setItem('token', jwtToken);
        localStorage.setItem('loggedInUser', name);
        setTimeout(() => {
          navigate('/dashboard')
        },1000);
      } else if(error) {
        const details = error?.details[0].message
        handleError(details);

      } else if(success) {
        handleError(success)
      }
      console.log(result);
    } catch (err) {
        handleError(err)
    }
  }

  return (
    <div className="login-container">
      {/* Logo Section */}
      <div className='logo-container'>
          <h3>
            LOGO
          </h3>
      </div>
      {/* Form Section */}
      <div className="login-form">
        <h1>Welcome to Dashboard</h1>
        <form onSubmit={(e) => handleLogin(e)}>

          <label htmlFor="email">Email Address<span style={{color:'red'}}>*</span></label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            required
            name='email'
            value={loginInfo.email}
            onChange={handleChange}
          />

          <label htmlFor="password">Password<span style={{color:'red'}}>*</span></label>
          <div className="input-with-icon">
            <input
              type="password"
              id="password"
              placeholder="Password"
              required
              name='password'
              value={loginInfo.password}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className='submit-btn'>Login</button>
        </form>
        <p>
          Don't have an account? <Link to="/signup">Register</Link>
        </p>
      </div>
        {/* Image Section */}
      <div className="login-image">
        <img src="Onboarding.png" alt="Side Illustration" />
      </div>
      
      <ToastContainer  />

    </div>
  )
}

export default Login;
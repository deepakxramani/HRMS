import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { handleError, handleSuccess } from '../../utils';
import { ToastContainer } from 'react-toastify';
// import serverURL from '../../services/fetchNodeServices';

import './SignUpCss.css'
const SignUp = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [signupInfo, setSignUpInfo] = useState({
    name: '',
    email: '',
    password: ''
  })
  const [confirmPassword, setConfirmPassword] = useState('')

  const navigate = useNavigate();

  const handleChange = (e) => {
    const {name, value} = e.target;
    console.log(name, value);
    const copySignUpInfo = {...signupInfo}
    copySignUpInfo[name] = value;
    setSignUpInfo(copySignUpInfo)
  }

  const handleSignUp = async(e) => {
    e.preventDefault()
    const {name, email, password} = signupInfo;
    if(!name || !email || !password || !confirmPassword) {
      return handleError('name, email and password are required')
    }
    else if (password !== confirmPassword) {
      return handleError("Passwords didn't match!")
    }

    try {
      const url = `http://localhost:8080/auth/signup`;
      const response = await fetch(url, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(signupInfo)
      })
      const result = await response.json();
      const {success, message, error} = result;

      if(success) {
        handleSuccess(message)
        setTimeout(() => {
            navigate('/login')
        },1000)

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
    <div className="signup-container">
      {/* Logo Section */}
      <div className='logo-container'>
          <h3>
            LOGO
          </h3>
      </div>
      {/* Form Section */}
      <div className="signup-form">
        <h1>Welcome to Dashboard</h1>
        <form onSubmit={(e) => handleSignUp(e)}>
          <label htmlFor="name">Full Name<span  style={{color:'red'}}>*</span></label>
          <input
            type="text"
            id="name"
            placeholder="Enter your full name"
            required
            name='name'
            value={signupInfo.name}
            onChange={handleChange}
          />

          <label htmlFor="email">Email Address<span style={{color:'red'}}>*</span></label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            required
            name='email'
            value={signupInfo.email}
            onChange={handleChange}
          />

          <label htmlFor="password">Password<span style={{color:'red'}}>*</span></label>
          <div className="input-with-icon">
            <input
              type={passwordVisible ? "text" : "password"}
              id="password"
              placeholder="Password"
              required
              name='password'
              value={signupInfo.password}
              onChange={handleChange}
            />
            <span
              className="toggle-visibility"
              onClick={() => setPasswordVisible(!passwordVisible)}
            >
              {passwordVisible ? <i className="fa-regular fa-eye"></i> : <i className="fa-regular fa-eye-slash"></i> }
            </span>
          </div>

          <label htmlFor="confirm-password">Confirm Password<span style={{color:'red'}}>*</span></label>
          <div className="input-with-icon">
            <input
              type={confirmPasswordVisible ? "text" : "password"}
              id="confirm-password"
              placeholder="Password"
              required
              name="confirm-password"
              value={confirmPassword}
              onChange={(e)=> setConfirmPassword(e.target.value)}
            />
            <span
              className="toggle-visibility"
              onClick={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
            >
              {confirmPasswordVisible ? <i className="fa-regular fa-eye"></i> : <i className="fa-regular fa-eye-slash"></i>}
            </span>
          </div>


          <button type="submit" className='submit-btn'>Register</button>
        </form>
        <p>
          Already have an account? <Link to="/login">Log In</Link>
        </p>
      </div>
        {/* Image Section */}
      <div className="signup-image">
        <img src="Onboarding.png" alt="Side Illustration" />
      </div>
      
      <ToastContainer  />

    </div>
  );
}

export default SignUp;
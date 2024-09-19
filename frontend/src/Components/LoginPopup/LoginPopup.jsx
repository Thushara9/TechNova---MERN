import React, { useContext, useEffect, useState } from 'react';
import './LoginPopup.css';
import axios from "axios"

import { MdOutlineClose } from 'react-icons/md';
import { StoreContext } from '../Context/StoreContext';

const LoginPopup = ({ setShowLogin }) => {

  const { url, setToken } = useContext(StoreContext)

  const [currentState, setCurrentState] = useState('Login');
  const [data, setData] = useState({
    name: "",
    email: "",
    password: ""
  })

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data => ({ ...data, [name]: value }))

  }

  const onLogin = async (event) => {
    event.preventDefault()
    let newUrl = url;
    if (currentState === "Login") {
      newUrl += "/api/user/login"

    }
    else {
      newUrl += "/api/user/register"
    }

    const response = await axios.post(newUrl, data);

    if (response.data.success) {
      setToken(response.data.token);
      localStorage.setItem("token", response.data.token)
      setShowLogin(false)
    }
    else {
      alert(response.data.message)
    }
  }


  useEffect(() => {
    console.log(data);
  }, [data])


  return (
    <div className='login-popup'>
      <form onSubmit={onLogin} className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currentState}</h2>
          <MdOutlineClose className='close' onClick={() => setShowLogin(false)} />
        </div>
        <div className="login-popup-inputs">
          {currentState === 'Sign Up' && <input name='name' onChange={onChangeHandler} value={data.name} type="text" placeholder='Your Name' required />}
          <input name='email' onChange={onChangeHandler} value={data.email} type="email" placeholder='Your Email' required />
          <input
            type="password"
            name='password'
            onChange={onChangeHandler}
            value={data.password}
            placeholder='Password'
            required
          />

          {currentState === 'Sign Up' && (
            <>
              <input
                type="password"
                name='confirmPassword'
                placeholder='Confirm Password'
                required
              />
            </>
          )}
        </div>
        <button type="submit">{currentState === 'Sign Up' ? 'Create Account' : 'Login'}</button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
        {currentState === 'Login' ? (
          <p>Create a new account? <span onClick={() => setCurrentState('Sign Up')}>Click here</span></p>
        ) : (
          <p>Already have an account? <span onClick={() => setCurrentState('Login')}>Login here</span></p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;

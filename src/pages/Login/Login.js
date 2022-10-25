import React from 'react';
import './Login.css';
import loginImg from '../../assets/images/login.png';

const Login = () => {
  return (
    <div className='container login-container'>
        <div className='login-img'>
            <img src={loginImg} alt="login to ada academy" />
        </div>
        <div className='login-form'>
          <h2>Login to Ada Academy</h2>
          <form>
            <label htmlFor="email">Your Email</label>
            <input type="email" name="email" id="" placeholder='username@email.com' />
            
            <label htmlFor="password">Your Password</label>
            <input type="password" name="passwprd" id="" placeholder='password' />

            <button>Login</button>
          </form>
          
          <div className='hr-line'>
            <span></span>
            <p>or</p>
            <span></span>
          </div>

          <div className='popup-login'>
            <button>
              <img src='https://www.shareicon.net/data/512x512/2016/07/10/119930_google_512x512.png' alt='google sign in'/>
              Login with Google</button>
            <button>
              <img src='https://cdn.iconscout.com/icon/free/png-512/github-3691248-3073768.png' alt='github sign in'/>
              Login with Github</button>
          </div>
        </div>
    </div>
  )
}

export default Login
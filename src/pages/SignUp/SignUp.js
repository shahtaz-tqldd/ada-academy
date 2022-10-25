import React from 'react';
import '../Login/Login.css';
import loginImg from '../../assets/images/login2.webp';

const Signup = () => {
  return (
    <div className='container login-container'>
      <div className='login-img'>
            <img src={loginImg} alt="login to ada academy" />
            <h2>Open an account</h2>
        </div>
        <div className='login-form'>
          <h2>Resgistration Form</h2>
          <form>
            <label htmlFor="email">Your Name</label>
            <input type="text" name="name" id="" placeholder='Ex: Joe Don' />
            
            <label htmlFor="email">Your Email</label>
            <input type="email" name="email" id="" placeholder='username@email.com' />
            
            <label htmlFor="password">Your Password</label>
            <input type="password" name="passwprd1" id="" placeholder='password' />
            
            <label htmlFor="password">Confirm Password</label>
            <input type="password" name="passwprd2" id="" placeholder='confirm password' />

            <button>Sign Up</button>
          </form>
          
          <div className='hr-line'>
            <span></span>
            <p>or</p>
            <span></span>
          </div>

          <div className='popup-login'>
            <button>
              <img src='https://www.shareicon.net/data/512x512/2016/07/10/119930_google_512x512.png' alt='google sign in'/>
              Sign Up with Google</button>
            <button>
              <img src='https://cdn.iconscout.com/icon/free/png-512/github-3691248-3073768.png' alt='github sign in'/>
              Sign Up with Github</button>
          </div>
        </div>
        
    </div>
  )
}

export default Signup
import React, {useState} from 'react';
import './Login.css';
import loginImg from '../../assets/images/login.png';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';

import {GoogleAuthProvider} from 'firebase/auth';

const Login = () => {
  const { googleSignIn, signIn } = useContext(AuthContext);
  const [err, setErr] = useState('')

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/';

  const handleSubmit = event =>{
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then(result => {
        const user = result.user;
        console.log(user)
        setErr('');
        form.reset();
        navigate(from, {replace: true});
      })
      .catch(error=>{  
        console.error(error);
        setErr(error.message);
      })
  }
  const googleProvider = new GoogleAuthProvider()
  const handleGoogleSignIn = () =>{
    googleSignIn(googleProvider)
      .then(result=>{
        const user = result.user;
        console.log(user)
        setErr('')
        navigate(from, {replace: true});
      })
      .catch(error=>{
        console.error(error);
        setErr('Your Email or password is incorrect');
      })
  }
  return (
    <div className='container login-container'>
        <div className='login-img'>
            <img src={loginImg} alt="login to ada academy" />
        </div>
        <div className='login-form'>
          <h2>Login Form</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">Your Email</label>
            <input type="email" name="email" id="" placeholder='username@email.com' />
            
            <label htmlFor="password">Your Password</label>
            <input type="password" name="password" id="" placeholder='password' />

            <button type="submit">Login</button>
          </form>
          
          {
            err ?
              <div className='err-msg'>
                <small>{err}</small>
              </div>
              : <span></span>
          }
          
          <div className='hr-line'>
            <span></span>
            <p>or</p>
            <span></span>
          </div>

          <div className='popup-login'>
            <button onClick={handleGoogleSignIn}>
              <img src='https://www.shareicon.net/data/512x512/2016/07/10/119930_google_512x512.png' alt='google sign in'/>
              Login with Google</button>
            <button>
              <img src='https://cdn.iconscout.com/icon/free/png-512/github-3691248-3073768.png' alt='github sign in'/>
              Login with Github</button>
          </div>
          <div className='login-signin'>
          Don't have any account? <Link to='/sign-up'>Create an Account</Link>
        </div>
        </div>
    </div>
  )
}

export default Login
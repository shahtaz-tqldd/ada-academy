import React, { useContext, useState } from 'react';
import '../Login/Login.css';
import loginImg from '../../assets/images/register.png';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';

const Signup = () => {
  const [error, setError] = useState('')
  const { createUser, updateUserProfile, googleSignIn, githubSignIn } = useContext(AuthContext)

  const navigate = useNavigate();

  const handleSubmit = event => {
    event.preventDefault()
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const photoURL = form.photoURL.value;
    const password1 = form.password1.value;
    const password2 = form.password2.value;

    if (password1 !== password2) {
      setError(`Your Password didn't match`)
    }
    if (password1.length < 6) {
      setError(`Your Password is too small`)
    }

    if (password1.length >= 6 && password1 === password2) {
      createUser(email, password1)
        .then(result => {
          const user = result.user;
          console.log(user);
          setError('');
          form.reset();
          handleUpdateUserProfile(name, photoURL)
        })
        .catch(err => {
          console.error(err);
          setError(err.message);
        })
    }
  }
  const handleUpdateUserProfile = (name, photoURL) => {
    const profile = {
      displayName: name,
      photoURL: photoURL
    }
    updateUserProfile(profile)
      .then((result) => {
        console.log(result)
      })
      .catch(err => console.error(err))
  }
  const googleProvider = new GoogleAuthProvider()
  const githubProvider = new GithubAuthProvider()

  const handleGoogleSignIn = () => {
    googleSignIn(googleProvider)
      .then(result => {
        const user = result.user;
        console.log(user)
        navigate('/');
      })
      .catch(error => {
        console.error(error);
      })
  }

  const handleGithubSignIn = () => {
    githubSignIn(githubProvider)
      .then(result => {
        const user = result.user;
        console.log(user)
        navigate('/');
      })
      .catch(error => {
        console.error(error);
      })
  }

  return (
    <div className='container login-container'>
      <div className='login-img'>
        <img src={loginImg} alt="login to ada academy" />
      </div>
      <div className='login-form'>
        <h2>Resgistration Form</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Your Full Name</label>
          <input type="text" name="name" id="" placeholder='Ex: Joe Don' />

          <label htmlFor="photoURL">Photo Url</label>
          <input type="text" name="photoURL" id="" placeholder='https://photo.jpeg' />

          <label htmlFor="email">Your Email</label>
          <input type="email" name="email" id="" placeholder='username@email.com' required />

          <label htmlFor="password">Your Password</label>
          <input type="password" name="password1" id="" placeholder='password' required />

          <label htmlFor="password">Confirm Password</label>
          <input type="password" name="password2" id="" placeholder='confirm password' required />

          {
            error ?
              <div className='err-msg'>
                <small>{error}</small>
              </div>
              : <span></span>
          }


          {/* <input type="submit" value="Sign Up" /> */}
          <button type="submit">Sign Up</button>
        </form>

        <div className='hr-line'>
          <span></span>
          <p>or</p>
          <span></span>
        </div>
        <div className='popup-login'>
          <button onClick={handleGoogleSignIn}>
            <img src='https://www.shareicon.net/data/512x512/2016/07/10/119930_google_512x512.png' alt='google sign in' />
            Login with Google</button>
          <button onClick={handleGithubSignIn}>
            <img src='https://cdn.iconscout.com/icon/free/png-512/github-3691248-3073768.png' alt='github sign in' />
            Login with Github</button>
        </div>
        <div className='login-signin'>
          Already have an account? <Link to='/login'>Login Here</Link>
        </div>
      </div>

    </div>
  )
}

export default Signup
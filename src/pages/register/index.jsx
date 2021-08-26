import './register.css';
import { useRef } from 'react';
import { useHistory } from 'react-router';

import api from '../../services/api';

export default function Register() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordAgain.current.value !== password.current.value) {
      passwordAgain.current.setCustomValidity('Senhas diferentes');
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };

      try {
        await api.post('/auth/register', user);

        history.push('/login')
      } catch (error) {
        console.log(error)
      }
    }
  }

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Lamasocial</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on Lamasocial.
          </span>
        </div>
        <div className="loginRight">

          <form className="loginBox" onSubmit={handleSubmit}>
            <input
              placeholder="Username"
              required
              ref={username}
              className="loginInput"
            />
            <input
              placeholder="Email"
              required
              ref={email}
              className="loginInput"
            />
            <input
              placeholder="Password"
              required ref={password}
              className="loginInput"
            />
            <input
              placeholder="Password Again"
              required
              ref={passwordAgain}
              className="loginInput"
            />
            <button className="loginButton" type='submit'>Sign Up</button>
            <button className="loginRegisterButton">
              Log into Account
            </button>
          </form>

        </div>
      </div>
    </div>
  );
}

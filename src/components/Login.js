import React, { useState } from 'react'
import { auth } from '../firebase/'
import '../styles/Login.css'

function Login() {
  const [reset, setReset] = useState(false)

  const handleReset = flip => {
    setReset(flip)
  }

  return reset ? (
    <PasswordReset reset={reset} handleReset={handleReset} />
  ) : (
    <SignIn reset={reset} handleReset={handleReset} />
  )
}

function SignIn(props) {
  const [user, setUser] = useState({
    email: '',
    password: '',
  })

  const [error, setError] = useState(null)

  const onSignInSubmit = event => {
    event.preventDefault()

    auth
      .doSignInWithEmailAndPassword(user.email, user.password)
      .then(() => {
        setUser({
          email: '',
          password: '',
        })
        setError(null)
      })
      .catch(error => setError(error))
  }

  return (
    <div className="Login">
      <form onSubmit={onSignInSubmit} className="Login-form">
        <div>
          <label htmlFor="email" className="_d-none">
            E-mail
          </label>
          <input
            id="email"
            type="email"
            className="Login-email"
            name="email"
            placeholder="E-Mail Address"
            required
            onChange={e => setUser({ ...user, email: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="password" className="_d-none">
            Password
          </label>
          <input
            id="password"
            type="password"
            className="Login-password"
            name="password"
            placeholder="Password"
            required
            onChange={e => setUser({ ...user, password: e.target.value })}
          />
        </div>
        <div>
          <button type="submit" className="Login-button _btn _btn-primary" autoFocus>
            Login
          </button>
          <button
            type="button"
            className="_btn _btn-link _text-center _w100 _upper"
            onClick={() => props.handleReset(!props.reset)}>
            <small>Forgot Your Password?</small>
          </button>
        </div>
        {error && <p>{error.message}</p>}
      </form>
    </div>
  )
}

function PasswordReset(props) {
  return (
    <div className="Login">
      <form className="Login-form">
        <div>
          <label htmlFor="email" className="_d-none">
            E-mail
          </label>
          <input id="email" type="email" className="Login-email" name="email" placeholder="E-Mail Address" required />
        </div>
        <div>
          <button type="submit" className="Login-button _btn _btn-primary" autoFocus>
            Send request
          </button>
          <button
            type="button"
            className="_btn _btn-link _text-center _w100 _upper"
            onClick={() => props.handleReset(!props.reset)}>
            <small>Back to login</small>
          </button>
        </div>
      </form>
    </div>
  )
}

export default Login
export { PasswordReset }

import React from 'react'
import { Link } from 'react-router-dom'
import { auth } from '../firebase'
import '../styles/Navigation.css'

const Nav = () => {
  return (
    <nav className="_nav">
      <ul className="_nav-menu">
        <li className="_nav-link">
          <Link className="_btn _btn-link" to="/">
            Home
          </Link>
        </li>
        <li className="_nav-link">
          <Link className="_btn _btn-link" to="/settings">
            Settings
          </Link>
        </li>
        <li className="_nav-link">
          <button type="button" onClick={auth.doSignOut} className="_btn _btn-link">
            Logout
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default Nav

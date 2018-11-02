import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Login.css'

export default () => (
  <div className="Login">
    <h1 className="_text-gray2">
      Not found, go <Link to="/">home</Link>
    </h1>
  </div>
)

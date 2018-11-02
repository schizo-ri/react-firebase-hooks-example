import React from 'react'

const Home = props => {
  return <h1>Welcome, {props.user.displayName || props.user.email}</h1>
}

export default Home

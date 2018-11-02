import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { auth } from '../firebase/firebase'
import Navigation from './Navigation'
import Home from './Home'
import Settings from './Settings'
import Login from './Login'
import NotFound from './NotFound'
import Splash from './Splash'

function App() {
  const [login, setLogin] = useState('waiting')

  useEffect(
    () => {
      const unsubscribe = auth.onAuthStateChanged(setLogin)
      return unsubscribe
    },
    [login]
  )

  return (
    <Router>
      {login === 'waiting' ? <Splash /> : login !== null ? <Authenticated user={{ ...login }} /> : <Login />}
    </Router>
  )
}

const Authenticated = props => {
  return (
    <>
      <Navigation />
      <main>
        <Switch>
          <Route exact path="/" render={() => <Home user={props.user} />} />
          <Route exact path="/settings" component={Settings} />
          <Route render={() => <NotFound />} />
        </Switch>
      </main>
    </>
  )
}

export default App

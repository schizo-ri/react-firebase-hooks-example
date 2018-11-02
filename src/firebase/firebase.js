import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

const prodConfig = {
  apiKey: 'REAL_DATA_HERE',
  authDomain: 'REAL_DATA_HERE',
  databaseURL: 'REAL_DATA_HERE',
  projectId: 'REAL_DATA_HERE',
  storageBucket: 'REAL_DATA_HERE',
  messagingSenderId: 'REAL_DATA_HERE',
}

const devConfig = {
  apiKey: 'REAL_DATA_HERE',
  authDomain: 'REAL_DATA_HERE',
  databaseURL: 'REAL_DATA_HERE',
  projectId: 'REAL_DATA_HERE',
  storageBucket: 'REAL_DATA_HERE',
  messagingSenderId: 'REAL_DATA_HERE',
}

const config = process.env.NODE_ENV === 'production' ? prodConfig : devConfig

if (!firebase.apps.length) {
  firebase.initializeApp(config)
}

const db = firebase.database()
const auth = firebase.auth()

export { db, auth }

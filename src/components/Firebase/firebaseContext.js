import { createContext } from "react"
import firebaseConfig from './firebase';
import { initializeApp } from "firebase/app"

const firebaseApp = initializeApp(firebaseConfig)

const FirebaseContext = createContext()

const FirebaseProvider = ({ children }) => {
  return <FirebaseContext.Provider value={firebaseApp}>
    {children}
  </FirebaseContext.Provider>
}

export {FirebaseProvider}
export default FirebaseContext
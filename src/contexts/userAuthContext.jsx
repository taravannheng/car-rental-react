import { useState, createContext } from "react"


const UserAuthContext = createContext()

const UserAuthProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false)

  return <UserAuthContext.Provider value={{
    loggedIn,
    setLoggedIn
  }}>
    {children}
  </UserAuthContext.Provider>
}

export {UserAuthProvider}
export default UserAuthContext
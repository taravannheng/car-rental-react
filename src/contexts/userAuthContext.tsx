import { FC, ReactNode, useState, createContext } from "react"

interface Props {
  children: ReactNode;
}

const UserAuthContext = createContext(null)

const UserAuthProvider: FC<Props> = ({ children }) => {
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
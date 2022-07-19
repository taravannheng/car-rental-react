import { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import UserAuthContext from '../../contexts/userAuthContext'


const PrivateRoute = () => {
  const { loggedIn } = useContext(UserAuthContext)

  return loggedIn ? <Outlet /> : <Navigate to='/signin' />
}

export default PrivateRoute
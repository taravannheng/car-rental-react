import { Navigate, Outlet } from 'react-router-dom'

import { useSelector } from 'react-redux'


const PrivateRoute = () => {
  const isLoggedIn = useSelector<any, any>(state => state.auth.isLoggedIn);

  return isLoggedIn ? <Outlet /> : <Navigate to='/signin' />
}

export default PrivateRoute
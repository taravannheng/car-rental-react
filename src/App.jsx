import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import SignInPage from "./pages/Signin/SignInPage";
// import SignUpPage from './pages/Signup/SignUpPage';
import ForgotPasswordPage from "./pages/ForgotPassword/ForgotPasswordPage"
import CartPage from './pages/Cart/CartPage';
import Home from "./pages/Home/Home";
import * as ROUTES from './constants/routes'
import { FirebaseProvider } from './components/Firebase/firebaseContext';
import PrivateRoute from './components/Routes/PrivateRoute';
import { UserAuthProvider } from './contexts/userAuthContext'
import { CartProvider } from './contexts/cartContext'

function App() {
  return (
   <>
    <FirebaseProvider>
    <UserAuthProvider>
    <CartProvider>
      <Router>
        <Routes>
          <Route path={ROUTES.LANDING} element={<SignInPage />} />
          <Route path={ROUTES.HOME} element={<PrivateRoute />}>
            <Route path={ROUTES.HOME} element={<Home />} />
          </Route>
          <Route path={ROUTES.CART} element={<PrivateRoute />}>
            <Route path={ROUTES.CART} element={<CartPage />} />
          </Route>
          <Route path={ROUTES.SIGNIN} element={<SignInPage />} />
          {/* <Route path={ROUTES.SIGNUP} element={<SignUpPage />} /> */}
          <Route path={ROUTES.FORGOTPASSWORD} element={<ForgotPasswordPage />} />
        </Routes>
      </Router>
    </CartProvider>
    </UserAuthProvider>
    </FirebaseProvider>
   </>
  );
}

export default App;

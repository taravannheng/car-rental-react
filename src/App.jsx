import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import SignInPage from "./pages/Signin/SignInPage";
import SignUpPage from './pages/Signup/SignUpPage';
import ForgotPasswordPage from "./pages/ForgotPassword/ForgotPasswordPage"
import CartPage from './pages/Cart/CartPage';
import CheckoutPage from './pages/Checkout/CheckoutPage';
import ConfirmationPage from './pages/Confirmation/ConfirmationPage';
import NotFoundPage from './pages/NotFound/NotFoundPage';
import Home from "./pages/Home/Home";
import * as ROUTES from './constants/routes'
import PrivateRoute from './components/Routes/PrivateRoute';
import { UserAuthProvider } from './contexts/userAuthContext'
import { CartProvider } from './contexts/cartContext'
import firebaseConfig from './components/Firebase/firebase';
import { initializeApp } from "firebase/app"

initializeApp(firebaseConfig)

function App() {
  return (
   <>
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
          {/* <Route path={ROUTES.CHECKOUT} element={<PrivateRoute />}> */}
            <Route path={ROUTES.CHECKOUT} element={<CheckoutPage />} />
          {/* </Route> */}
          {/* <Route path={ROUTES.CONFIRMATION} element={<PrivateRoute />}> */}
            <Route path={ROUTES.CONFIRMATION} element={<ConfirmationPage />} />
          {/* </Route> */}
          <Route path={ROUTES.SIGNIN} element={<SignInPage />} />
          <Route path={ROUTES.SIGNUP} element={<SignUpPage />} />
          <Route path={ROUTES.FORGOTPASSWORD} element={<ForgotPasswordPage />} />
          <Route path={ROUTES.FORGOTPASSWORD} element={<ForgotPasswordPage />} />
          <Route path={ROUTES.NOTFOUND} element={<NotFoundPage />} />

        </Routes>
      </Router>
    </CartProvider>
    </UserAuthProvider>
   </>
  );
}

export default App;

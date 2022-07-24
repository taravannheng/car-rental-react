import React, { Suspense, useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import * as ROUTES from './constants/routes';
import { initializeApp } from 'firebase/app';

import firebaseConfig from './components/Firebase/firebase';
import PrivateRoute from './components/Routes/PrivateRoute';
import Preloader from './components/Preloader/Preloader';

//INIT FIREBASE
initializeApp(firebaseConfig);

//LAZY LOADING
const SignInPage = React.lazy(() => import('./pages/Signin/SignInPage'));
const SignUpPage = React.lazy(() => import('./pages/Signup/SignUpPage'));
const ForgotPasswordPage = React.lazy(() =>
  import('./pages/ForgotPassword/ForgotPasswordPage')
);
const ForgotPasswordConfirmationPage = React.lazy(() =>
  import('./pages/ForgotPassword/ForgotPasswordConfirmationPage')
);
const CartPage = React.lazy(() => import('./pages/Cart/CartPage'));
const CheckoutPage = React.lazy(() => import('./pages/Checkout/CheckoutPage'));
const ConfirmationPage = React.lazy(() =>
  import('./pages/Confirmation/ConfirmationPage')
);
const NotFoundPage = React.lazy(() => import('./pages/NotFound/NotFoundPage'));
const Home = React.lazy(() => import('./pages/Home/Home'));

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);

  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
            <Router>
              <Routes>
                <Route
                  path={ROUTES.LANDING}
                  element={
                    <Suspense fallback={<>...</>}>
                      <SignInPage />
                    </Suspense>
                  }
                />
                <Route path={ROUTES.HOME} element={<PrivateRoute />}>
                  <Route
                    path={ROUTES.HOME}
                    element={
                      <Suspense fallback={<>...</>}>
                        <Home />
                      </Suspense>
                    }
                  />
                </Route>
                <Route path={ROUTES.CART} element={<PrivateRoute />}>
                  <Route
                    path={ROUTES.CART}
                    element={
                      <Suspense fallback={<>...</>}>
                        <CartPage />
                      </Suspense>
                    }
                  />
                </Route>
                <Route path={ROUTES.CHECKOUT} element={<PrivateRoute />}>
                  <Route
                    path={ROUTES.CHECKOUT}
                    element={
                      <Suspense fallback={<>...</>}>
                        <CheckoutPage />
                      </Suspense>
                    }
                  />
                </Route>
                <Route path={ROUTES.CONFIRMATION} element={<PrivateRoute />}>
                  <Route
                    path={ROUTES.CONFIRMATION}
                    element={
                      <Suspense fallback={<>...</>}>
                        <ConfirmationPage />
                      </Suspense>
                    }
                  />
                </Route>
                <Route
                  path={ROUTES.SIGNIN}
                  element={
                    <Suspense fallback={<>...</>}>
                      <SignInPage />
                    </Suspense>
                  }
                />
                <Route
                  path={ROUTES.SIGNUP}
                  element={
                    <Suspense fallback={<>...</>}>
                      <SignUpPage />
                    </Suspense>
                  }
                />
                <Route
                  path={ROUTES.FORGOTPASSWORD}
                  element={
                    <Suspense fallback={<>...</>}>
                      <ForgotPasswordPage />
                    </Suspense>
                  }
                />
                <Route
                  path={ROUTES.FORGOTPASSWORDCONFIRMATION}
                  element={
                    <Suspense fallback={<>...</>}>
                      <ForgotPasswordConfirmationPage />
                    </Suspense>
                  }
                />
                <Route
                  path={ROUTES.NOTFOUND}
                  element={
                    <Suspense fallback={<>...</>}>
                      <NotFoundPage />
                    </Suspense>
                  }
                />
              </Routes>
            </Router>
      )}
    </>
  );
}

export default App;

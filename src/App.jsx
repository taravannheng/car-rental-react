import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import SignInPage from "./pages/Signin/SignInPage";
import SignUpPage from "./pages/Signup/SignUpPage";
import Home from "./pages/Home/Home";
import * as ROUTES from './constants/routes'
import { FirebaseProvider } from './components/Firebase/firebaseContext';
import PrivateRoute from './components/Routes/PrivateRoute';

function App() {
  return (
   <>
    <FirebaseProvider>
      <Router>
        <Routes>
          <Route path={ROUTES.LANDING} element={<SignUpPage />} />
          <Route path={ROUTES.HOME} element={<PrivateRoute />}>
            <Route path={ROUTES.HOME} element={<Home />} />
          </Route>
          <Route path={ROUTES.SIGNIN} element={<SignInPage />} />
          <Route path={ROUTES.SIGNUP} element={<SignUpPage />} />
        </Routes>
      </Router>
    </FirebaseProvider>
   </>
  );
}

export default App;

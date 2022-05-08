import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import SignInPage from "./pages/Signin/SignInPage";
import SignUpPage from "./pages/Signup/SignUpPage";
import Home from "./pages/Home/Home";
import * as ROUTES from './constants/routes'
import { FirebaseProvider } from './components/Firebase/firebaseContext';

function App() {
  return (
   <>
    <FirebaseProvider>
      <Router>
        <Routes>
          <Route path={ROUTES.LANDING} element={<Home />} />
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.SIGNIN} element={<SignInPage />} />
          <Route path={ROUTES.SIGNUP} element={<SignUpPage />} />
        </Routes>
      </Router>
    </FirebaseProvider>
   </>
  );
}

export default App;

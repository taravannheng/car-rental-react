import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import LogInPage from "./pages/login/LogInPage";
import SignUpPage from "./pages/signup/SignUpPage";
import Home from "./pages/home/Home";
import * as ROUTES from './constants/routes'

function App() {
  return (
   <>
    <Router>
      <Routes>
        <Route path={ROUTES.LANDING} element={<Home />} />
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.LOGIN} element={<LogInPage />} />
        <Route path={ROUTES.SIGNUP} element={<SignUpPage />} />
      </Routes>
    </Router>
   </>
  );
}

export default App;

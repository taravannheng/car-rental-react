import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import LogInPage from "./pages/login/LogInPage";
import SignUpPage from "./pages/signup/SignUpPage";

function App() {
  return (
   <>
    <Router>
      <Routes>
        <Route path="/login" element={<LogInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </Router>
   </>
  );
}

export default App;

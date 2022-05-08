import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import LogInPage from "./pages/login/LogInPage";
import SignUpPage from "./pages/signup/SignUpPage";
import Home from "./pages/home/Home";

function App() {
  return (
   <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<LogInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </Router>
   </>
  );
}

export default App;

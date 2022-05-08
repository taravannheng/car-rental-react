import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import LogInPage from "./pages/login/LogInPage";

function App() {
  return (
   <>
    <Router>
      <Routes>
        <Route path="/login" element={<LogInPage />} />
      </Routes>
    </Router>
   </>
  );
}

export default App;

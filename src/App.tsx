import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginScreen from "./screens/LoginScreen";
import TriviaScreen from "./screens/TriviaScreen";
import './css/App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LoginScreen />} />
          <Route path="/trivia" element={<TriviaScreen />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

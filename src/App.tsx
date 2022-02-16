import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginScreen from "./screens/LoginScreen";
import TriviaScreen from "./screens/TriviaScreen";
import "./css/App.css";
import { IFormValues } from "./types";

function App() {
  const [formValues, setFormValues] = React.useState<IFormValues>();
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <LoginScreen
                setFormValues={setFormValues}
              />
            }
          />
          <Route path="/trivia" element={<TriviaScreen />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

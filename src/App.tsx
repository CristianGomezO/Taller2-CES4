import React from "react";
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import "./css/App.css";
import LoginScreen from "./screens/LoginScreen";
import TriviaScreen from "./screens/TriviaScreen";
import { IFormValues } from "./types";
import showNotification from "./utils/notifications";
import { startGameValidations } from "./utils/validations";
import NotFoundScreen from "./screens/NotFoundScreen";
import { private_urls } from "./constants";

function App() {
  const [formValues, setFormValues] = React.useState<IFormValues>();
  const navigate = useNavigate();
  const location = useLocation();

  React.useEffect(() => {
    if (!formValues && private_urls.find(url => url === location.pathname)) {
      navigate("/", { replace: true });
    }
  }, [formValues, location.pathname, navigate]);

  const onStartGame = React.useCallback(
    async (values: IFormValues) => {
      const validations = startGameValidations(values);
      if (validations.code !== 200) {
        return showNotification("error", "ERROR", validations.message);
      }
      values.type = "multiple";

      await fetch(
        `https://opentdb.com/api.php?amount=10&category=${values.category}&difficulty=${values.difficulty}&type=${values.type}`
      )
        .then((res) => res.json())
        .then((res) => {
          if (res.response_code === 0) {
            navigate("/trivia", { replace: true });
          } else {
            showNotification("error", "ERROR", "error getting data");
          }
        });
    },
    [navigate]
  );

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <LoginScreen
              setFormValues={setFormValues}
              onStartGame={onStartGame}
              formValues={formValues}
            />
          }
        />
        <Route path="/trivia" element={<TriviaScreen />} />
        <Route path="/*" element={<NotFoundScreen />} />
      </Routes>
    </div>
  );
}

export default App;

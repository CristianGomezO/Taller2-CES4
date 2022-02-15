import React from "react";
import Navbar from "../components/Navbar";

interface TriviaScreenProps {}

const TriviaScreen: React.FC<TriviaScreenProps> = () => {
  return (
    <div>
      <Navbar />
      Trivia screen
    </div>
  );
};

export default TriviaScreen;

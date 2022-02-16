import { Col, Row } from "antd";
import React from "react";
import { IQuestions } from "../types";
import Timer from "./Timer";

const styles = {
  mainContainer: {
    width: 800,
    height: 300,
    zIndex: 10,
    opacity: 1,
  },
  questionContainer: {
    display: "flex",
    justifyContent: "center",
  },
  m10: {
    margin: 10,
  },
};
interface QuestionsSectionProps {
  questions: IQuestions[];
  level: number;
  answers: string[];
  onSelectAnswer: (answer: string) => void;
  setTimeOut: (value: boolean) => void;
}

const QuestionsSection: React.FC<QuestionsSectionProps> = ({
  questions = [],
  level,
  answers,
  onSelectAnswer,
  setTimeOut,
}) => {
  return (
    <div style={styles.mainContainer}>
      <Timer setTimeOut={setTimeOut} questionNumber={level}/>
      <div style={styles.questionContainer}>
        <div className="question" style={{ textAlign: "center" }}>
          <p className="answerText">{questions[level]?.question}</p>
        </div>
      </div>
      <div>
        <Row style={{ justifyContent: "center" }}>
          {answers.map((answer, i) => (
            <Col className="answerBox" key={i}>
              <div
                onClick={() => {
                  onSelectAnswer(answer);
                }}
                className="answerTextContainer"
              >
                <p className="answerText">{answer}</p>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default QuestionsSection;

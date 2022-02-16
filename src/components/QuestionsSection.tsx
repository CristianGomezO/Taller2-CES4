import { Col, Row } from "antd";
import React from "react";
import { IQuestions } from "../types";

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
}

const QuestionsSection: React.FC<QuestionsSectionProps> = ({
  questions = [],
  level,
  answers,
  onSelectAnswer,
}) => {
  return (
    <div style={styles.mainContainer}>
      <div className="questionTimer"></div>
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

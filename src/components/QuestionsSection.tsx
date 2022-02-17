import { Col, Row } from "antd";
import React from "react";
import { IQuestions } from "../types";
import Timer from "./Timer";
import he from "he";

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
  idxSelectedAnswer: number;
  isCorrectAnswer: boolean | undefined;
  onSelectAnswer: (answer: string, i: number) => void;
  setTimeOut: (value: boolean) => void;
}

const QuestionsSection: React.FC<QuestionsSectionProps> = ({
  questions = [],
  level,
  answers,
  isCorrectAnswer,
  idxSelectedAnswer,
  onSelectAnswer,
  setTimeOut,
}) => {
  const returnCorrectAnswerClassName = React.useCallback(
    (i: number): string => {
      if (idxSelectedAnswer === i && isCorrectAnswer === undefined) {
        return "selectedAnswer";
      } else if (idxSelectedAnswer === i && isCorrectAnswer) {
        return "greenBox";
      } else if (idxSelectedAnswer === i && isCorrectAnswer === false) {
        return "redBox";
      }
      return "answerBox";
    },
    [isCorrectAnswer, idxSelectedAnswer]
  );
  return (
    <div style={styles.mainContainer}>
      <Timer
        stopTimer={idxSelectedAnswer !== -1}
        setTimeOut={setTimeOut}
        questionNumber={level}
      />
      <div style={styles.questionContainer}>
        <div className="question" style={{ textAlign: "center" }}>
          <p className="answerText">{he.decode(questions[level]?.question)}</p>
        </div>
      </div>
      <div>
        <Row style={{ justifyContent: "center" }}>
          {answers.map((answer, i) => (
            <Col className={returnCorrectAnswerClassName(i)} key={i}>
              <div
                onClick={() => {
                  if (idxSelectedAnswer === -1) {
                    onSelectAnswer(answer, i);
                  }
                }}
                className={
                  idxSelectedAnswer === -1
                    ? "answerTextContainer answerTextContainerHover"
                    : "answerTextContainer"
                }
              >
                <p className="answerText">{he.decode(answer)}</p>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default QuestionsSection;

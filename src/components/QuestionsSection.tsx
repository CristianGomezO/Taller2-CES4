import { Col, Row } from "antd";
import React, { useEffect } from "react";
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
}

const QuestionsSection: React.FC<QuestionsSectionProps> = ({ questions = [] }) => {
  const [correctAnswerPosition, setCorrectAnswerPosition] =
    React.useState<number>();
  const [answers, setAnswers] = React.useState<Array<string>>([]);

  const answersFunction = React.useCallback(() => {
    let aTemp: string[] = [];
    const randomNumber = Math.floor(Math.random() * 4);
    setCorrectAnswerPosition(randomNumber);

    aTemp[randomNumber] = questions[0].correct_answer;

    for (let i = 0; i < questions[0].incorrect_answers.length + 1; i++) {
      if (aTemp[i]) {
        aTemp[i + 1] = questions[0].incorrect_answers[i];
      } else {
        aTemp[i] = questions[0].incorrect_answers[i];
      }
    }

    aTemp.map((x, i) => {
      if (!x) {
        aTemp.splice(i, 1);
      }
    });

    setAnswers(aTemp)
  }, [questions]);

  useEffect(() => {
    if(questions.length){
      answersFunction();
    }
  }, [answersFunction, questions]);

  return (
    <div style={styles.mainContainer}>
      <div className="questionTimer"></div>
      <div style={styles.questionContainer}>
        <div className="question" style={{ textAlign: "center" }}>
          <p className="answerText">{questions[0].question}</p>
        </div>
      </div>
      <div>
        <Row style={{ justifyContent: "center" }}>
          {answers.map((x, i) => (
            <Col className="answerBox" key={i}>
              <p className="answerText">{x}</p>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default QuestionsSection;

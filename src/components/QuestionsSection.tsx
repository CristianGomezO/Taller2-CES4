import { Col, Row } from "antd";
import React from "react";

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
interface QuestionsSectionProps {}

const QuestionsSection: React.FC<QuestionsSectionProps> = () => {
  return (
    <div style={styles.mainContainer}>
      <div className="questionTimer"></div>
      <div style={styles.questionContainer}>
        <div className="question"></div>
      </div>
      <div>
        <Row style={{ justifyContent: "center" }}>
          <Col className="answerBox">asdsa</Col>
          <Col className="answerBox">asdsa</Col>
        </Row>
        <Row style={{ justifyContent: "center" }}>
          <Col className="answerBox">asdsa</Col>
          <Col className="answerBox">asdsa</Col>
        </Row>
      </div>
    </div>
  );
};

export default QuestionsSection;

import { Layout, List } from "antd";
import React from "react";
import Navbar from "../components/Navbar";
import QuestionsSection from "../components/QuestionsSection";
import { data_earnings } from "../constants";
import { IFormValues, IQuestions } from "../types";
import { delay } from "../utils/delay";
import background from "./../assets/images/millionarieImage.jpg";

const styles = {
  list: {
    height: "100%",
    display: "flex",
  },
  sider: {
    backgroundColor: "#030231",
  },
  listLabelStyle: {
    fontSize: 18,
    color: "#fff",
    margin: 0,
  },
  listItemStyle: {
    marginLeft: 25,
    marginTop: 8,
    borderRadius: 5,
    borderBottomColor: "#030231",
    display: "flex",
    height: 30,
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
  },
  headerStyle: {
    backgroundColor: "#512057",
  },
  content: {
    width: "100%",
    height: "89.6%",
    backgroundImage: `url(${background})`,
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    opacity: "0.8",
    backgroundColor: "#030231",
  },
};

const { Header, Sider, Content } = Layout;

interface TriviaScreenProps {
  questions: IQuestions[];
  formValues: IFormValues;
  timeOut: boolean;
  setQuestions: (value: any) => void;
  setFormValues: (value: any) => void;
  setTimeOut: (value: boolean) => void;
}

const TriviaScreen: React.FC<TriviaScreenProps> = ({
  questions,
  formValues,
  timeOut,
  setQuestions,
  setFormValues,
  setTimeOut,
}) => {
  const [level, setLevel] = React.useState<number>(0);
  const [answers, setAnswers] = React.useState<string[]>([]);
  const [isCorrectAnswer, setIsCorrectAnswer] = React.useState<boolean | undefined>(undefined);
  const [idxSelectedAnswer, setIdxSelectedAnswer] = React.useState<number>(-1);

  React.useEffect(() => {
    console.log(questions[level]?.correct_answer);
  }, [level, questions]);

  const answersFunction = React.useCallback(() => {
    if (level < 10) {
      let aTemp: string[] = [...questions[level]?.incorrect_answers];
      const randomNumber = Math.floor(Math.random() * 3);
      aTemp[3] = aTemp[randomNumber];
      aTemp[randomNumber] = questions[level].correct_answer;
      setAnswers(aTemp);
    }
  }, [questions, level]);

  const onSelectAnswer = React.useCallback(
    (answer, answerIdx) => {
      if (answer === questions[level].correct_answer) {
        delay(2000, () => {
          setIsCorrectAnswer(true);
          delay(5000, () => {
            setIdxSelectedAnswer(-1);
            setIsCorrectAnswer(undefined);
            setLevel(level + 1);
          });
        });
      } else {
        delay(2000, () => {
          setIsCorrectAnswer(false);
          delay(5000, () => {
            setIdxSelectedAnswer(-1);
            setIsCorrectAnswer(undefined);
            setTimeOut(true);
          });
        });
      }
      setIdxSelectedAnswer(answerIdx);
    },
    [level, questions, setTimeOut]
  );
  React.useEffect(() => {
    if (questions.length) {
      answersFunction();
    }
  }, [answersFunction, questions]);
  return (
    <Layout>
      <Layout>
        <Header style={styles.headerStyle}>
          <Navbar
            playerName={formValues?.user}
            earnings={
              data_earnings[data_earnings.length - level - 1] ||
              data_earnings[data_earnings.length - 1]
            }
            dificulty={formValues?.difficulty}
            setQuestions={setQuestions}
            setFormValues={setFormValues}
            setTimeOut={setTimeOut}
          />
        </Header>
        <Content>
          <div className="triviaContent">
            <div style={{ ...styles.content, position: "absolute" }}></div>
            {level < 10 && !timeOut ? (
              <QuestionsSection
                onSelectAnswer={onSelectAnswer}
                level={level}
                answers={answers}
                questions={questions}
                setTimeOut={setTimeOut}
                isCorrectAnswer={isCorrectAnswer}
                idxSelectedAnswer={idxSelectedAnswer}
              />
            ) : (
              <div className="finishedBox">
                <p className="finishedMessage">
                  You earned:{" "}
                  {level === 0
                    ? 0
                    : data_earnings[data_earnings.length - level]}
                </p>
              </div>
            )}
          </div>
        </Content>
      </Layout>
      <Sider style={styles.sider} className="sider2">
        <List
          dataSource={data_earnings}
          style={{
            ...styles.list,
            justifyContent: "center",
            flexDirection: "column-reverse",
          }}
          renderItem={(item, idx) => (
            <List.Item
              style={{
                ...styles.listItemStyle,
                backgroundColor:
                  idx === data_earnings.length - level - 1
                    ? "#02686c"
                    : "unset",
              }}
            >
              <p style={styles.listLabelStyle}>{`$ ${item}`}</p>
            </List.Item>
          )}
        />
      </Sider>
    </Layout>
  );
};

export default TriviaScreen;

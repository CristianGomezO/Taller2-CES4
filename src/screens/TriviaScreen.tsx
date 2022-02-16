import { Layout, List } from "antd";
import React from "react";
import Navbar from "../components/Navbar";
import QuestionsSection from "../components/QuestionsSection";
import { data_earnings } from "../constants";
import { IFormValues, IQuestions } from "../types";
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
    opacity: "0.7",
    backgroundColor: "#030231",
  },
};

const { Header, Sider, Content } = Layout;

interface TriviaScreenProps {
  questions: IQuestions[];
  formValues: IFormValues;
  setQuestions: (value: any) => void;
  setFormValues: (value: any) => void;
}

const TriviaScreen: React.FC<TriviaScreenProps> = ({
  questions,
  formValues,
  setQuestions,
  setFormValues,
}) => {
  const [level, setLevel] = React.useState<number>(0);
  const [answers, setAnswers] = React.useState<string[]>([]);

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
    (answer) => {
      if (answer === questions[level].correct_answer) {
        setLevel(level + 1);
      }
    },
    [level, questions]
  );

  React.useEffect(() => {
    console.log(level);
  }, [level]);

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
          />
        </Header>
        <Content>
          <div className="triviaContent">
            <div style={{ ...styles.content, position: "absolute" }}></div>
            {level < 10 ? (
              <QuestionsSection
                onSelectAnswer={onSelectAnswer}
                level={level}
                answers={answers}
                questions={questions}
              />
            ) : null}
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

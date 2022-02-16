import { Layout, List } from "antd";
import React from "react";
import Navbar from "../components/Navbar";
import QuestionsSection from "../components/QuestionsSection";
import { data_earnings } from "../constants";
import { IQuestions } from "../types";
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
}

const TriviaScreen: React.FC<TriviaScreenProps> = ({ questions }) => {
  return (
    <Layout>
      <Layout>
        <Header style={styles.headerStyle}>
          <Navbar
            playerName="Edward andres"
            earnings={data_earnings[0]}
            dificulty="easy"
          />
        </Header>
        <Content>
          <div className="triviaContent">
            <div style={{ ...styles.content, position: "absolute" }}></div>
            <QuestionsSection questions={questions}/>
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
                  idx === data_earnings.length - 1 ? "#02686c" : "unset",
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

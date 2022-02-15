import { Layout, List } from "antd";
import React from "react";
import Navbar from "../components/Navbar";
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
};

const { Header, Sider, Content } = Layout;

interface TriviaScreenProps {}

const data = [
  1000000, 900000, 800000, 700000, 600000, 500000, 400000, 300000, 200000,
  100000,
];

const TriviaScreen: React.FC<TriviaScreenProps> = () => {
  return (
    <Layout>
      <Layout>
        <Header style={styles.headerStyle}>
          <Navbar
            playerName="Edward andres"
            earnings={data[0]}
            dificulty="easy"
          />
        </Header>
        <Content
          style={{
            backgroundImage: `url(${background})`,
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
            backgroundPosition: "center",
            opacity: "0.7",
          }}
        >
          Content
        </Content>
      </Layout>
      <Sider style={styles.sider} className="sider2">
        <List
          dataSource={data}
          style={{
            ...styles.list,
            justifyContent: "center",
            flexDirection: "column-reverse",
          }}
          renderItem={(item, idx) => (
            <List.Item
              style={{
                ...styles.listItemStyle,
                backgroundColor: idx === data.length - 1 ? "#02686c" : "unset",
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

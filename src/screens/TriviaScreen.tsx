import { Layout, List } from "antd";
import React from "react";
import Navbar from "../components/Navbar";

const styles = {
  list: {
    height: '100%',
    display: 'flex',
  },
  sider: {
    backgroundColor: "#030231",
  },
};

const { Header, Sider, Content } = Layout;

interface TriviaScreenProps {}

const data = [
  1000000,
  500000,
  250000,
  125000,
  64000,
  32000,
  16000,
  8000,
  4000,
  2000,
  1000,
  500,
  400,
  300,
  200,
  100,
];

const TriviaScreen: React.FC<TriviaScreenProps> = () => {
  return (
    <Layout>
      <Layout>
        <Header>
          <Navbar />
        </Header>
        <Content>Content</Content>
      </Layout>
      <Sider style={styles.sider} className="sider2">
        <List
          dataSource={data}
          style={{...styles.list, justifyContent: 'center',flexDirection: 'column-reverse', overflow: 'auto'}}
          renderItem={(item, idx) => (
            <List.Item
              style={{
                backgroundColor: idx === data.length - 1 ? "#036364" : 'unset',
                marginLeft: 25,
                marginTop: 8,
                borderRadius: 5,
                borderBottomColor: '#030231',
                display: "flex",
                height: 30,
                width: "80%",
                justifyContent: "center",
                alignItems: 'center',
              }}
            >
              <p style={{ fontSize: 18,color: "#fff", margin: 0 }}>{`$ ${item}`}</p>
            </List.Item>
          )}
        />
      </Sider>
    </Layout>
  );
};

export default TriviaScreen;

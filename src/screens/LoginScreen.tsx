import { Button, Card, Form, Input, Select } from "antd";
import React from "react";

const styles = {
  cardContainer: {
    width: 500,
    borderRadius: 10,
    backgroundColor: "#ececec",
  },
  cardHeadStyle: {
    display: "flex",
    justifyContent: "center",
    borderBottomColor: "#bfbfbf",
    borderBottomWidth: 1,
  },
};

const { Option } = Select;

interface LoginScreenProps {}

const LoginScreen: React.FC<LoginScreenProps> = () => {
  function handleChange(value: any) {
    console.log(`selected ${value}`);
  }

  return (
    <div className="loginScreen">
      <Card
        title="Inicio"
        style={styles.cardContainer}
        headStyle={styles.cardHeadStyle}
        bodyStyle={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={(values) => console.log("Success:", values)}
          onFinishFailed={(errorInfo) => console.log("Failed:", errorInfo)}
          autoComplete="off"
        >
          <Form.Item
            label="username"
            name="username"
            rules={[{ required: true, message: "El nombre es requerido" }]}
          >
            <Input />
          </Form.Item>

          <Select
            defaultValue="lucy"
            style={{ width: 120 }}
            onChange={handleChange}
          >
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="disabled" disabled>
              Disabled
            </Option>
            <Option value="Yiminghe">yiminghe</Option>
          </Select>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default LoginScreen;

import { Button, Card, Col, Input, Row, Select } from "antd";
import React from "react";
import { difficulty_values, trivia_categories } from "../constants/formValues";
import { IFormValues } from "../types";

const styles = {
  mainRowStyles: {
    height: "80%",
    backgroundColor: "#e9ecef",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  cardContainer: {
    width: 700,
    borderRadius: 10,
    backgroundColor: "#ececec",
  },
  cardHeadStyle: {
    display: "flex",
    justifyContent: "center",
    borderBottomColor: "#bfbfbf",
    borderBottomWidth: 1,
  },
  secondRow: {
    backgroundColor: "#e9ecef",
    paddingTop: "20px",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
};

const { Option } = Select;

interface LoginScreenProps {
  formValues?: IFormValues;
  setFormValues: (values: IFormValues) => void;
  onStartGame: (values: IFormValues) => void;
}

const LoginScreen: React.FC<LoginScreenProps> = ({
  formValues,
  setFormValues,
  onStartGame,
}) => {
  const handleChange = React.useCallback(
    (field: any, value: string) => {
      const aTemp = { ...formValues };
      aTemp[field as keyof IFormValues] = value;
      setFormValues(aTemp as IFormValues);
    },
    [formValues, setFormValues]
  );

  return (
    <div className="loginScreen">
      <div className="backgroundLogin"></div>
      <Card
        title="Inicio"
        style={styles.cardContainer}
        headStyle={styles.cardHeadStyle}
        bodyStyle={{
          justifyContent: "center",
        }}
      >
        <Row style={styles.mainRowStyles}>
          <Row
            style={{ width: "100%", padding: "20px 0" }}
            justify="center"
            align="middle"
          >
            <Col span={6}>User</Col>
            <Input
              placeholder="User"
              required={true}
              style={{ width: "50%" }}
              onChange={(e) => handleChange("user", e.target.value)}
            />
          </Row>

          <Row
            style={{ width: "100%", padding: "20px 0" }}
            justify="center"
            align="middle"
          >
            <Col span={6}>Category</Col>
            <Select
              defaultValue={""}
              style={{ width: "50%" }}
              onChange={(e) => handleChange("category", e)}
            >
              <Option value={""}>Choose an option</Option>
              {trivia_categories.map((x, i) => (
                <Option value={x.id} key={i}>
                  {x.name}
                </Option>
              ))}
            </Select>
          </Row>

          <Row
            style={{ width: "100%", padding: "20px 0" }}
            justify="center"
            align="middle"
          >
            <Col span={6}>Difficulty</Col>
            <Select
              defaultValue={""}
              style={{ width: "50%" }}
              onChange={(e) => handleChange("difficulty", e)}
            >
              <Option value={""}>Choose an option</Option>
              {difficulty_values.map((x, i) => (
                <Option value={x.value} key={i}>
                  {x.label}
                </Option>
              ))}
            </Select>
          </Row>
        </Row>
        <Row style={styles.secondRow} justify="center" align="middle">
          <Col>
            <Button type="primary" onClick={() => onStartGame(formValues!)}>
              Enter to play
            </Button>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default LoginScreen;

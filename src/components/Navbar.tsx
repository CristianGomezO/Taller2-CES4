import { Button, Col, Row } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

const styles = {
  label: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  labelValue: {
    color: "white",
    fontSize: 18,
  },
};

interface NavbarProps {
  playerName: string;
  earnings: number;
  dificulty: string;
}

const Navbar: React.FC<NavbarProps> = ({ dificulty, earnings, playerName }) => {
  let navigate = useNavigate();
  return (
    <Row justify="space-between">
      <Col>
        <Button onClick={() => {
          navigate("/", { replace: true });
        }} type="primary">
          Salir
        </Button>
        <label style={styles.label}>Player: </label>
        <label style={styles.labelValue}>{playerName}</label>
      </Col>
      <Col>
        <label style={styles.label}>Level: </label>
        <label style={styles.labelValue}>{dificulty}</label>
      </Col>
      <Col>
        <label style={styles.label}>Earnings: </label>
        <label style={styles.labelValue}>{`$ ${earnings}`}</label>
      </Col>
    </Row>
  );
};

export default Navbar;

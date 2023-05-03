import React from "react";
import { Container, Row, Col, Table } from "react-bootstrap";
import GraphLinear from "../Graphs/GraphLinear";
import GraphPie from "../Graphs/GraphPie";

function FinalBars() {
  return (
    <Container style={{ height: "50vh" }}>
      <Row style={{ height: "inherit" }}>
        <Col xs={12} lg={6}>
          <span
            style={{
              backgroundColor: "aqua",
              height: "48vh",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              marginTop: "2vh",
              borderRadius: "5px",
              alignContent: "center",
            }}
          >
            <GraphLinear></GraphLinear>
          </span>
        </Col>
        <Col xs={12} lg={6}>
          <span
            style={{
              backgroundColor: "aqua",
              height: "48vh",
              display: "flex",
              justifyContent: "space-around",
              flexDirection: "column",
              marginTop: "2vh",
              borderRadius: "5px",
              alignContent: "center",
              textAlign: "center",
              overflow: "scroll",
            }}
          >
            <GraphPie></GraphPie>
          </span>
        </Col>
      </Row>
    </Container>
  );
}

export default FinalBars;

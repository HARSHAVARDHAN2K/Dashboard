import React from "react";
import { Container, Row, Col, Table } from "react-bootstrap";
import BarChart from "../Graphs/BarChart";

function GetClient(props) {
  const ClientUsers = props.clinteUser;
  const Clients = ClientUsers.map((cliente, i) => (
    <tr>
      <td>{i + 1}</td>
      <td>{cliente.client_name}</td>
      <td>{cliente.client_users}</td>
    </tr>
  ));
  return <tbody style={{ overflow: "scroll" }}>{Clients}</tbody>;
}

function MiddleBar(props) {
  return (
    <Container>
      <Row style={{ height: "inherit" }}>
        <Col xs={12} lg={7}>
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
            <BarChart></BarChart>
          </span>
        </Col>
        <Col xs={12} lg={5}>
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
            <h4 style={{}}>Clients</h4>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Client</th>
                  <th>Number of user</th>
                </tr>
              </thead>
              <GetClient clinteUser={props.Clients}></GetClient>
            </Table>
          </span>
        </Col>
      </Row>
    </Container>
  );
}

export default MiddleBar;

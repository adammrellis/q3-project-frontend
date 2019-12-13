import React from "react";
import LocationList from "../locations/LocationList";
import GuitarList from "../guitars/GuitarList";
import { Row, Col, Container } from "react-bootstrap";

const Dashboard = () => {
  return (
    <Container style={{ display: "flex", margin: "0px" }}>
      <Row>
        <Col
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            margin: "10px"
          }}
        >
          <h3 style={{ color: "goldenrod", textAlign: "center" }}>
            List of Locations
          </h3>
          <hr></hr>
          <LocationList />
        </Col>
        <Col
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            margin: "10px"
          }}
        >
          <h3 style={{ color: "goldenrod" }}>Full List of Guitars</h3>
          <hr></hr>
          <GuitarList />
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;

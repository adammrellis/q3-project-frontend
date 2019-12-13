import React from "react";

import TopNav from "./components/layout/TopNav";
import Dashboard from "./components/layout/Dashboard";

import { Col, Row, Container } from "react-bootstrap";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { fetchAllLocations } from "./store/locations/actions";
import { fetchAllGuitars } from "./store/guitars/actions";

import LocationEdit from "../src/components/locations/LocationEdit";
import GuitarEdit from "../src/components/guitars/GuitarEdit";
import NewLocationForm from "../src/components/locations/NewLocationForm";
import NewGuitarForm from "../src/components/guitars/NewGuitarForm";
import LocationView from "../src/components/locations/LocationView";

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchAllLocations());
    this.props.dispatch(fetchAllGuitars());
  }

  render() {
    const backGround = "https://wallpapercave.com/wp/wp1980019.jpg";
    return (
      <div className="App">
        <div
          style={{
            background: `url(${backGround})`,
            backgroundAttachment: "fixed",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat"
          }}
        >
          <Router>
            <TopNav />
            <Row>
              <Col>
                <Container>
                  <Row>
                    <Route exact path="/" component={Dashboard} />
                    <Route
                      exact
                      path="/editLocation/:id"
                      component={LocationEdit}
                    />
                    <Route
                      exact
                      path="/editGuitar/:id"
                      component={GuitarEdit}
                    />
                    <Route
                      exact
                      path="/newLocationForm"
                      component={NewLocationForm}
                    />
                    <Route
                      exact
                      path="/newGuitarForm"
                      component={NewGuitarForm}
                    />
                    <Route
                      exact
                      path="/viewLocation/:id"
                      component={LocationView}
                    />
                  </Row>
                </Container>
              </Col>
            </Row>
          </Router>
        </div>
      </div>
    );
  }
}

export default connect()(App);

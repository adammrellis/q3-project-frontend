import React from "react";
import { connect } from "react-redux";
import { Navbar, Nav, Button } from "react-bootstrap";
import { NavLink, withRouter } from "react-router-dom";

class TopNav extends React.Component {
  render() {
    return (
      <Navbar bg="dark" expand="lg" style={{ opacity: ".85" }}>
        <Navbar.Brand>
          <img
            alt=""
            src="https://www.seekclipart.com/clipng/big/488-4884506_electric-guitar-silhouette-clipart.png"
            width="70"
            height="95"
            align="right"
            className="d-inline-block align-top"
          />{" "}
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavLink to={`/`}>
              <Button
                style={{ margin: "3px" }}
                variant="outline-warning"
                size="lg"
              >
                AJE Vintage Guitar's Inventory Management
              </Button>
            </NavLink>
          </Nav>
          <Nav>
            <NavLink to={`/newGuitarForm`}>
              <Button style={{ margin: "3px" }} variant="outline-warning">
                Add New Guitar
              </Button>
            </NavLink>
            <NavLink to={`/newLocationForm`}>
              <Button style={{ margin: "3px" }} variant="outline-warning">
                Add New Location
              </Button>
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

const mapStateToProps = state => {
  return {
    //users: state.users
  };
};

export default connect(mapStateToProps)(withRouter(TopNav));

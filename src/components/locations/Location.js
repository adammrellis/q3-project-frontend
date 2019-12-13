import React from "react";
import { Button, Card } from "react-bootstrap";
import { connect } from "react-redux";
import { removeLocation } from "../../store/locations/actions";
import { NavLink, withRouter } from "react-router-dom";
import LocationType from "../../store/locations/type";

const Location = ({ singleLocation, removeLocation }) => {
  const handleRemove = event => {
    console.log("delete", singleLocation.id);
    removeLocation(singleLocation.id);
  };

  return (
    <Card
      style={{
        width: "25rem",
        margin: "10px",
        color: "lightgray",
        backgroundColor: "#333",
        border:"solid gray 1px",
        boxShadow: "0 8px 16px 0 black",
        opacity: ".9"
      }}
    >
      <Card.Body>
        <Card.Title style={{ textAlign: "center" }}>
          {singleLocation.name}
        </Card.Title>
        <Card.Subtitle className="mb-2" style={{ color: "" }}>
          Address
        </Card.Subtitle>
        <Card.Text>{singleLocation.address}</Card.Text>
        <NavLink to={`/viewLocation/${singleLocation.id}`}>
          <div style={{ textAlign: "center" }}>
            <Button variant="outline-warning">View Guitar Inventory</Button>
          </div>
        </NavLink>
      </Card.Body>
    </Card>
  );
};

Location.propTypes = {
  ...LocationType
};

function mapStateToProps(state, props) {
  return {
    location: state.locations
    // customerLocation: state.customers.map(customer => customer.location_id === props.locations.id),
    // location: state.locations.map(location => location.id === props.customer.location_id)
  };
}

export default connect(mapStateToProps, { removeLocation })(
  withRouter(Location)
);

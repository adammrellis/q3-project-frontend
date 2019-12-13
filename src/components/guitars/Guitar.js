import React from "react";
import { Button, Card } from "react-bootstrap";
import { connect } from "react-redux";
import { removeGuitar } from "../../store/guitars/actions";
import { NavLink, withRouter } from "react-router-dom";
import GuitarType from "../../store/guitars/type";

const Guitar = ({ singleGuitar, removeGuitar, allLocations }) => {
  const handleRemove = event => {
    console.log("delete", singleGuitar.id);
    removeGuitar(singleGuitar.id);
  };

  const location = allLocations.filter(
    location => location.id === singleGuitar.location_id
  );

  //console.log("locations are here", allLocations)
  if (location) {
    return (
      <Card
        style={{
          color: "lightgray",
          width: "15rem",
          margin: "10px",
          backgroundColor: "#333",
          border:"solid gray 1px",
          boxShadow: "0 8px 16px 0 black",
          opacity: ".9"
        }}
      >
        <Card.Img variant="top" src={singleGuitar.image} />
        <Card.Body>
          <Card.Title style={{ textAlign: "center" }}>
            {singleGuitar.year} {singleGuitar.make}
          </Card.Title>
          <Card.Title style={{ textAlign: "center" }}>
            {singleGuitar.model}
          </Card.Title>
          <Card.Text>Location: {location[0].name}</Card.Text>
          <Card.Text>{singleGuitar.color}</Card.Text>
          <Card.Text>{singleGuitar.pickups}</Card.Text>
          <Card.Text>Condition: {singleGuitar.condition} out of 10</Card.Text>
          <Card.Text>Price: ${singleGuitar.price}.00</Card.Text>
          <div style={{ display: "flex" }}>
            <NavLink to={`/editGuitar/${singleGuitar.id}`}>
              <Button
                style={{ margin: "3px", width:"130px", height:"50px" }}
                className="btn-sm"
                variant="outline-warning"
              >
                Edit Guitar
              </Button>
            </NavLink>
            <Button
              style={{ margin: "3px", width:"90px", height:"50px", border:"1px goldenrod solid"  }}
              className="btn-sm"
              variant="outline-danger"
              onClick={handleRemove}
            >
              Remove Guitar
            </Button>
          </div>
        </Card.Body>
      </Card>
    );
  } else {
    return <div>Loading</div>;
  }
};

Guitar.propTypes = {
  ...GuitarType
};

function mapStateToProps(state, props) {
  return {
    guitar: state.guitars,
    locations: state.locations
  };
}

export default connect(mapStateToProps, { removeGuitar })(withRouter(Guitar));

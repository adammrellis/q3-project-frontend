import React from "react";
import { Button, Card } from "react-bootstrap";
import { connect } from "react-redux";
import { removeGuitar } from "../../store/guitars/actions";
import { NavLink, withRouter } from "react-router-dom";
import LocationsType from "../../store/locations/type";

const LocationView = props => {
  console.log("props in locationView", props);

  const singleGuitar = props.guitars.filter(
    guitar => guitar.location_id === Number(props.match.params.id)
  );

  const handleRemove = id => {
    console.log("delete", singleGuitar[0].id);
    props.removeGuitar(id);
  };

  const location = props.locations.filter(
    location => location.id === Number(props.match.params.id)
  );

  console.log("this location", location[0]);

  const listOfGuitars = singleGuitar.map(guitar => {
    return (
      <Card
        style={{
          width: "22rem",
          margin: "10px",
          alignItems: "center",
          color: "lightgray",
          backgroundColor: "#233",
          border:"solid gray 1px",
          boxShadow: "0 8px 16px 0 black"
        }}
      >
        <Card.Img variant="top" src={guitar.image} />
        <Card.Body>
          <Card.Title style={{ textAlign: "center" }}>
            {guitar.year} {guitar.make}
          </Card.Title>
          <Card.Title style={{ textAlign: "center" }}>
            {guitar.model}
          </Card.Title>
          <hr></hr>
          <Card.Text>Finish Color: {guitar.color}</Card.Text>
          <Card.Text>Electronics: {guitar.pickups}</Card.Text>
          <Card.Text>Condition: {guitar.condition} out of 10</Card.Text>
          <Card.Text>Price: ${guitar.price}.00</Card.Text>
          <div style={{ textAlign: "center" }}>
            <NavLink to={`/editGuitar/${guitar.id}`}>
              <Button
                style={{ margin: "3px", width:"160px", height:"50px"}}
                className="btn-sm"
                variant="outline-warning"
              >
                Edit Guitar
              </Button>
            </NavLink>
            <Button
              style={{ margin: "3px", width:"90px", height:"50px", border:"1px goldenrod solid" }}
              className="btn-sm"
              variant="outline-danger"
              onClick={() => handleRemove(guitar.id)}
            >
              Remove Guitar
            </Button>
          </div>
        </Card.Body>
      </Card>
    );
  });
  {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%"
        }}
      >
        <h3 style={{ margin: "15px", color: "goldenrod" }}>
          {location[0] && location[0].name && location[0].name}{" "}
        </h3>
        <h5 style={{ color: "goldenrod" }}>
          {location[0] && location[0].address && location[0].address}{" "}
        </h5>
        <div className="mb-4" style={{ display: "flex", flexWrap: "wrap" }}>
          {listOfGuitars}
        </div>
      </div>
    );
  }
};

LocationView.propTypes = {
  ...LocationsType
};

function mapStateToProps(state, props) {
  return {
    guitars: state.guitars,
    locations: state.locations
  };
}

export default connect(mapStateToProps, { removeGuitar })(
  withRouter(LocationView)
);

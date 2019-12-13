import React from "react";
import { Button, Form, FormGroup, Card } from "react-bootstrap";
import { updateGuitar } from "../../store/guitars/actions";
import { connect } from "react-redux";
import GuitarsType from "../../store/guitars/type";

class GuitarEdit extends React.Component {
  state = {
    id: this.props.match.params.id,
    make: this.props.selectedGuitar.make,
    model: this.props.selectedGuitar.model,
    year: this.props.selectedGuitar.year,
    color: this.props.selectedGuitar.color,
    pickups: this.props.selectedGuitar.pickups,
    price: this.props.selectedGuitar.price,
    condition: this.props.selectedGuitar.condition,
    location_id: this.props.selectedGuitar.location_id,
    image: this.props.selectedGuitar.image
  };

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  handleSelect = event => {
    const { name, value } = event.target;
    console.log("VALUE", value);

    this.setState({
      [name]: Number(value)
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.updateGuitar({
      id: Number(this.state.id),
      make: this.state.make,
      model: this.state.model,
      year: Number(this.state.year),
      color: this.state.color,
      pickups: this.state.pickups,
      price: Number(this.state.price),
      condition: Number(this.state.condition),
      location_id: Number(this.state.location_id),
      image: this.state.image
    });
    this.props.history.push("/");
  };

  render() {
    console.log("STATE in Guitar form", this.state);

    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          
        }}
      >
        <Card
          style={{
            width: "48%",
            margin: "10px",
            backgroundColor: "#333",
            boxShadow: "0 8px 16px 0 black",
            opacity: ".85"
          }}
        >
          <Form onSubmit={this.handleSubmit}>
            <FormGroup style={{ margin: "15px" }}>
              <h3 style={{ color: "gold" }}>Enter Guitar Information</h3>
              <hr></hr>
              <Form.Group controlId="makeId">
                <Form.Label style={{ color: "gold" }}>Make</Form.Label>
                <Form.Control
                  type="text"
                  name="make"
                  value={this.state.make}
                  onChange={this.handleChange}
                />
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>
              <Form.Group controlId="modelId">
                <Form.Label style={{ color: "gold" }}>Model</Form.Label>
                <Form.Control
                  type="text"
                  name="model"
                  value={this.state.model}
                  onChange={this.handleChange}
                />
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>
              <Form.Group controlId="yearId">
                <Form.Label style={{ color: "gold" }}>Year</Form.Label>
                <Form.Control
                  type="text"
                  name="year"
                  value={this.state.year}
                  onChange={this.handleChange}
                />
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>
              <Form.Group controlId="colorId">
                <Form.Label style={{ color: "gold" }}>Color</Form.Label>
                <Form.Control
                  type="text"
                  name="color"
                  value={this.state.color}
                  onChange={this.handleChange}
                />
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>
              <Form.Group controlId="pickupsId">
                <Form.Label style={{ color: "gold" }}>Pickups</Form.Label>
                <Form.Control
                  type="text"
                  name="pickups"
                  value={this.state.pickups}
                  onChange={this.handleChange}
                />
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>
              <Form.Group controlId="priceId">
                <Form.Label style={{ color: "gold" }}>Price</Form.Label>
                <Form.Control
                  type="text"
                  name="price"
                  value={this.state.price}
                  onChange={this.handleChange}
                />
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>
              <Form.Group controlId="conditionId">
                <Form.Label style={{ color: "gold" }}>Condition</Form.Label>
                <Form.Control
                  type="text"
                  name="condition"
                  value={this.state.condition}
                  onChange={this.handleChange}
                />
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>
              <Form.Group controlId="locationId">
                <Form.Label style={{ color: "gold" }}>Location</Form.Label>
                <Form.Control
                  type="text"
                  name="location_id"
                  value={this.state.location_id}
                  onChange={this.handleChange}
                />
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>
              <Form.Group controlId="imageId">
                <Form.Label style={{ color: "gold" }}>Image</Form.Label>
                <Form.Control
                  type="text"
                  name="image"
                  value={this.state.image}
                  onChange={this.handleChange}
                />
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>
              <div style={{ textAlign: "center" }}>
                <Button
                  style={{ margin: "3px", width:"90px", height:"50px", border:"1px goldenrod solid"  }}
                  variant="outline-danger"
                  disabled={this.state.image ? false : true}
                  type="submit"
                >
                  Submit
                </Button>
              </div>
            </FormGroup>
          </Form>
        </Card>
      </div>
    );
  }
}

GuitarEdit.propTypes = {
  ...GuitarsType
};

function mapStateToProps(state, props) {
  return {
    selectedGuitar: state.guitars.find(
      guitar => guitar.id === Number(props.match.params.id)
    )
  };
}

export default connect(mapStateToProps, { updateGuitar })(GuitarEdit);

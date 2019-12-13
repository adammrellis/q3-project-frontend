import React from "react";
import { Button, Form, FormGroup } from "react-bootstrap";
import { updateLocation } from "../../store/locations/actions";
import { connect } from "react-redux";
import LocationsType from "../../store/locations/type";

class LocationEdit extends React.Component {
  state = {
    name: this.props.selectedLocation.name,
    address: this.props.selectedLocation.address
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
    this.props.updateLocation({
      name: this.state.name,
      address: this.state.address
    });
    this.props.history.push("/");
  };

  render() {
    console.log("STATE in location form", this.state);

    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          height: "100vh"
        }}
      >
        <div style={{ width: "50%" }}>
          <Form onSubmit={this.handleSubmit}>
            <FormGroup style={{ margin: "15px" }}>
              <h3 style={{ color: "gold" }}>Enter Location Information</h3>
              <hr></hr>
              <Form.Group controlId="nameId">
                <Form.Label style={{ color: "gold" }}>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  id="nameId"
                  value={this.state.name.value}
                  onChange={this.handleChange}
                  placeholder="Store Name"
                />
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>
              <Form.Group controlId="addressId">
                <Form.Label style={{ color: "gold" }}>Address</Form.Label>
                <Form.Control
                  type="text"
                  name="address"
                  id="addressId"
                  value={this.state.address.value}
                  onChange={this.handleChange}
                  placeholder="Store Address"
                />
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>
              <Button
                disabled={this.state.address ? false : true}
                type="submit"
              >
                Submit
              </Button>
            </FormGroup>
          </Form>
        </div>
      </div>
    );
  }
}

LocationEdit.propTypes = {
  ...LocationsType
};

function mapStateToProps(state, props) {
  return {
    selectedLocation: state.locations.find(
      location => location.id === Number(props.match.params.id)
    )
  };
}

export default connect(mapStateToProps, { updateLocation })(LocationEdit);

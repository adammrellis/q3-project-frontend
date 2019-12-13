import React from "react";
import { Button, Form, FormGroup, Card } from "react-bootstrap";
import { addLocation } from "../../store/locations/actions";
import { connect } from "react-redux";
import LocationsType from "../../store/locations/type";

class NewLocationForm extends React.Component {
  state = {
    name: "",
    address: ""
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
    this.props.addLocation({
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
        <Card
          style={{
            width: "48%",
            margin: "10px",
            backgroundColor: "#333",
            border:"solid gray 1px",
            boxShadow: "0 8px 16px 0 black",
            opacity: ".85"
          }}
        >
          <Form onSubmit={this.handleSubmit}>
            <FormGroup style={{ margin: "15px" }}>
              <h3 style={{ color: "gold" }}>Enter Location Information</h3>
              <hr></hr>
              <Form.Group controlId="nameId">
                <Form.Label style={{ color: "gold" }}>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
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
                  value={this.state.address.value}
                  onChange={this.handleChange}
                  placeholder="Store Address"
                />
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>
              <div style={{ textAlign: "center" }}>
                <Button
                  style={{ margin: "3px", width:"90px", height:"50px", border:"1px goldenrod solid" }}
                  variant="outline-danger"
                  disabled={this.state.address ? false : true}
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

NewLocationForm.propTypes = {
  ...LocationsType
};

function mapStateToProps(state, props) {
  return {
    locations: state.locations
  };
}

export default connect(mapStateToProps, { addLocation })(NewLocationForm);

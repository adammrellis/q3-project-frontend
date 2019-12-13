import React from "react";
import { connect } from "react-redux";
import Guitar from "./Guitar";
import GuitarsType from "../../store/guitars/type";
import { InputGroup, FormControl } from "react-bootstrap";

class GuitarList extends React.Component {
  state = {
    query: ""
  };

  handleInput = event => {
    this.setState({ query: event.target.value });
  };

  render() {
    //console.log("props in guitarList", props);
    const listOfGuitars = this.props.guitars
      .filter(
        guitar =>
          guitar.make.toLowerCase().includes(this.state.query.toLowerCase()) ||
          guitar.model.toLowerCase().includes(this.state.query.toLowerCase()) ||
          guitar.pickups.toLowerCase().includes(this.state.query.toLowerCase())
      )
      .map(guitar => {
        //console.log("guitar search", this.state.query)
        return (
          <Guitar
            key={guitar.id}
            singleGuitar={guitar}
            allLocations={this.props.locations}
          />
        );
      });
    if (this.props.guitars) {
      return (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%"
          }}
        >
          <div
            style={{
              backgroundColor: "#333",
              boxShadow: "0 8px 16px 0 black",
              opacity: ".85"
            }}
          >
            <div className="">
              <InputGroup
                style={{ width: "350px", height: "37px", borderRadius: "5px",  }}
              >
                <InputGroup.Prepend style={{ backgroundColor: "#333" }}>
                  <InputGroup.Text
                    style={{
                      backgroundColor: "#333",
                      color: "lightgray",
                      border: "1px goldenrod solid"
                    }}
                    id="basic-addon1"
                  >
                    Search Guitars
                  </InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  style={{
                    backgroundColor: "#333",
                    border: "1px goldenrod solid"
                  }}
                  placeholder="Make/Model/Pickups"
                  onChange={this.handleInput}
                />
              </InputGroup>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap"
            }}
          >
            {listOfGuitars}
          </div>
        </div>
      );
    } else {
      return <div>Loading..</div>;
    }
  }
}
GuitarList.propTypes = {
  ...GuitarsType
};

const mapStateToProps = (state, props) => {
  console.log("state in guitarList", state.guitars);
  return {
    guitars: state.guitars,
    locations: state.locations
  };
};

export default connect(mapStateToProps)(GuitarList);

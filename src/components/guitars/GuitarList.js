import React from "react";
import { connect } from "react-redux";
import Guitar from "./Guitar";
import GuitarsType from "../../store/guitars/type";

const GuitarList = props => {
  console.log("props in guitarList", props);
  const listOfGuitars = props.guitars.map(guitar => {
    //console.log("single guitar", guitar)
    return (
      <Guitar
        key={guitar.id}
        singleGuitar={guitar}
        allLocations={props.locations}
      />
    );
  });
  if (props.guitars) {
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
};
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

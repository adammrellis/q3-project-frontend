import React from "react";
import Location from "./Location";
import { connect } from "react-redux";
import LocationsType from "../../store/locations/type";

const LocationsList = props => {
  console.log("props in locationsList", props);
  const listOflocations = props.locations.map(location => {
    //console.log("single location", location)
    return <Location key={location.id} singleLocation={location} />;
  });
  if (props.locations) {
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
          {listOflocations}
        </div>
      </div>
    );
  } else {
    return <div>Please Wait..</div>;
  }
};

LocationsList.propTypes = {
  ...LocationsType
};

const mapStateToProps = (state, props) => {
  console.log("state in locationsList", state.locations);
  return {
    locations: state.locations
  };
};

export default connect(mapStateToProps)(LocationsList);

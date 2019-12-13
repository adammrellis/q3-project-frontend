import PropTypes from "prop-types";

export default {
  location: PropTypes.shape({
    singleLocation: PropTypes.object,
    addLocation: PropTypes.func,
    removeLocation: PropTypes.func,
    updateLocation: PropTypes.func
  })
};

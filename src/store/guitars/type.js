import PropTypes from "prop-types";

export default {
  guitar: PropTypes.shape({
    singleGuitar: PropTypes.object,
    addGuitar: PropTypes.func,
    removeGuitar: PropTypes.func,
    updateGuitar: PropTypes.func
  })
};

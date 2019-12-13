import * as types from "./constants.js";
import { updateLocation } from "./actions.js";

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_ALL_LOCATIONS_PENDING:
      return state;
    case types.FETCH_ALL_LOCATIONS_SUCCESS:
      return [...action.payload, ...state];
    case types.FETCH_ALL_LOCATIONS_FAILED:
      return action.payload;

    case types.FETCH_ONE_LOCATION_PENDING:
      return state;
    case types.FETCH_ONE_LOCATION_SUCCESS:
      return [...action.payload, ...state];
    case types.FETCH_ONE_LOCATION_FAILED:
      return action.payload;

    case types.ADD_LOCATION_PENDING:
      return state;
    case types.ADD_LOCATION_SUCCESS:
      return [action.payload, ...state];
    case types.ADD_LOCATION_FAILED:
      return action.payload;

    case types.REMOVE_LOCATION_PENDING:
      return state;
    case types.REMOVE_LOCATION_SUCCESS:
      return state.filter(
        locationInfo => locationInfo.id !== action.payload.id
      );
    case types.REMOVE_LOCATION_FAILED:
      return action.payload;

    case types.UPDATE_LOCATION_PENDING:
      return state;
    case types.UPDATE_LOCATION_SUCCESS:
      console.log("ACTION in REDUCER", action.payload);
      let otherLocations = state.filter(
        locationInfo => locationInfo.id != action.payload.id
      );
      return [...otherLocations, action.payload].sort((a, b) => a.id - b.id);

    case types.UPDATE_LOCATION_FAILED:
      return action.payload;

    default:
      return state;
  }
};

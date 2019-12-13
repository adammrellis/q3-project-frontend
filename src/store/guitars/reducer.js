import * as types from "./constants.js";
import { updateGuitar } from "./actions.js";

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_ALL_GUITARS_PENDING:
      return state;
    case types.FETCH_ALL_GUITARS_SUCCESS:
      return [...action.payload, ...state];
    case types.FETCH_ALL_GUITARS_FAILED:
      return action.payload;

    case types.FETCH_ONE_GUITAR_PENDING:
      return state;
    case types.FETCH_ONE_GUITAR_SUCCESS:
      return [...action.payload, ...state];
    case types.FETCH_ONE_GUITAR_FAILED:
      return action.payload;

    case types.ADD_GUITAR_PENDING:
      return state;
    case types.ADD_GUITAR_SUCCESS:
      return [action.payload, ...state];
    case types.ADD_GUITAR_FAILED:
      return action.payload;

    case types.REMOVE_GUITAR_PENDING:
      return state;
    case types.REMOVE_GUITAR_SUCCESS:
      return state.filter(guitarInfo => guitarInfo.id !== action.payload.id);
    case types.REMOVE_GUITAR_FAILED:
      return action.payload;

    case types.UPDATE_GUITAR_PENDING:
      return state;
    case types.UPDATE_GUITAR_SUCCESS:
      console.log("ACTION in REDUCER", action.payload);
      let otherGuitars = state.filter(
        guitarInfo => guitarInfo.id != action.payload.id
      );
      return [...otherGuitars, action.payload].sort((a, b) => a.id - b.id);

    case types.UPDATE_GUITAR_FAILED:
      return action.payload;

    default:
      return state;
  }
};

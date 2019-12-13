import axios from "axios";
import {
  FETCH_ALL_LOCATIONS_PENDING,
  FETCH_ALL_LOCATIONS_SUCCESS,
  FETCH_ALL_LOCATIONS_FAILED,
  FETCH_ONE_LOCATION_PENDING,
  FETCH_ONE_LOCATION_SUCCESS,
  FETCH_ONE_LOCATION_FAILED,
  ADD_LOCATION_PENDING,
  ADD_LOCATION_SUCCESS,
  ADD_LOCATION_FAILED,
  REMOVE_LOCATION_PENDING,
  REMOVE_LOCATION_SUCCESS,
  REMOVE_LOCATION_FAILED,
  UPDATE_LOCATION_PENDING,
  UPDATE_LOCATION_SUCCESS,
  UPDATE_LOCATION_FAILED
} from "./constants.js";

export const fetchAllLocations = () => {
  return dispatch => {
    dispatch({
      type: FETCH_ALL_LOCATIONS_PENDING
    });
    axios
      .get(`http://localhost:8000/locations`)
      .then(response => {
        console.log("getting data for Locations", response.data);
        const locations = response.data;
        dispatch({
          type: FETCH_ALL_LOCATIONS_SUCCESS,
          payload: locations
        });
      })
      .catch(error => {
        dispatch({
          type: FETCH_ALL_LOCATIONS_FAILED,
          payload: error
        });
      });
  };
};

export const fetchOneLocation = id => {
  return dispatch => {
    dispatch({
      type: FETCH_ONE_LOCATION_PENDING
    });
    axios
      .get(`http://localhost:8000/locations/${id}`)
      .then(response => {
        const location = response.data;
        dispatch({
          type: FETCH_ONE_LOCATION_SUCCESS,
          payload: location
        });
      })
      .catch(error => {
        dispatch({
          type: FETCH_ONE_LOCATION_FAILED,
          payload: error
        });
      });
  };
};

export const addLocation = newLocation => {
  return dispatch => {
    dispatch({
      type: ADD_LOCATION_PENDING
    });
    axios
      .post(`http://localhost:8000/locations`, newLocation)
      .then(response => {
        dispatch({
          type: ADD_LOCATION_SUCCESS,
          payload: response.data
        });
      })
      .catch(error => {
        dispatch({
          type: ADD_LOCATION_FAILED,
          payload: error
        });
      });
  };
};

export const updateLocation = updatedLocation => {
  return dispatch => {
    dispatch({
      type: UPDATE_LOCATION_PENDING
    });
    axios
      .patch(
        `http://localhost:8000/locations/${updatedLocation.id}`,
        updatedLocation
      )
      .then(response => {
        dispatch({
          type: UPDATE_LOCATION_SUCCESS,
          payload: response.data
        });
      })
      .catch(error => {
        dispatch({
          type: UPDATE_LOCATION_FAILED,
          payload: error
        });
      });
  };
};

export const removeLocation = id => {
  return dispatch => {
    dispatch({
      type: REMOVE_LOCATION_PENDING
    });
    axios
      .delete(`http://localhost:8000/locations/${id}`)
      .then(response => {
        console.log("RESPONSE", response);
        dispatch({
          type: REMOVE_LOCATION_SUCCESS,
          payload: response.data
        });
      })
      .catch(error => {
        dispatch({
          type: REMOVE_LOCATION_FAILED,
          payload: error
        });
      });
  };
};

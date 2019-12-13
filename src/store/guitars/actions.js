import axios from "axios";
import {
  FETCH_ALL_GUITARS_PENDING,
  FETCH_ALL_GUITARS_SUCCESS,
  FETCH_ALL_GUITARS_FAILED,
  FETCH_ONE_GUITAR_PENDING,
  FETCH_ONE_GUITAR_SUCCESS,
  FETCH_ONE_GUITAR_FAILED,
  ADD_GUITAR_PENDING,
  ADD_GUITAR_SUCCESS,
  ADD_GUITAR_FAILED,
  REMOVE_GUITAR_PENDING,
  REMOVE_GUITAR_SUCCESS,
  REMOVE_GUITAR_FAILED,
  UPDATE_GUITAR_PENDING,
  UPDATE_GUITAR_SUCCESS,
  UPDATE_GUITAR_FAILED
} from "./constants.js";

export const fetchAllGuitars = () => {
  return dispatch => {
    dispatch({
      type: FETCH_ALL_GUITARS_PENDING
    });
    axios
      .get(`http://localhost:8000/guitars`)
      .then(response => {
        console.log("getting data for guitars", response.data);
        const guitars = response.data;
        dispatch({
          type: FETCH_ALL_GUITARS_SUCCESS,
          payload: guitars
        });
      })
      .catch(error => {
        dispatch({
          type: FETCH_ALL_GUITARS_FAILED,
          payload: error
        });
      });
  };
};

export const fetchOneGuitar = id => {
  return dispatch => {
    dispatch({
      type: FETCH_ONE_GUITAR_PENDING
    });
    axios
      .get(`http://localhost:8000/guitars/${id}`)
      .then(response => {
        const guitar = response.data;
        dispatch({
          type: FETCH_ONE_GUITAR_SUCCESS,
          payload: guitar
        });
      })
      .catch(error => {
        dispatch({
          type: FETCH_ONE_GUITAR_FAILED,
          payload: error
        });
      });
  };
};

export const addGuitar = newGuitar => {
  return dispatch => {
    dispatch({
      type: ADD_GUITAR_PENDING
    });
    axios
      .post(`http://localhost:8000/guitars`, newGuitar)
      .then(response => {
        dispatch({
          type: ADD_GUITAR_SUCCESS,
          payload: response.data
        });
      })
      .catch(error => {
        dispatch({
          type: ADD_GUITAR_FAILED,
          payload: error
        });
      });
  };
};

export const updateGuitar = updatedGuitar => {
  return dispatch => {
    dispatch({
      type: UPDATE_GUITAR_PENDING
    });
    axios
      .patch(`http://localhost:8000/guitars/${updatedGuitar.id}`, updatedGuitar)
      .then(response => {
        dispatch({
          type: UPDATE_GUITAR_SUCCESS,
          payload: response.data
        });
      })
      .catch(error => {
        dispatch({
          type: UPDATE_GUITAR_FAILED,
          payload: error
        });
      });
  };
};

export const removeGuitar = id => {
  return dispatch => {
    dispatch({
      type: REMOVE_GUITAR_PENDING
    });
    axios
      .delete(`http://localhost:8000/guitars/${id}`)
      .then(response => {
        console.log("RESPONSE", response);
        dispatch({
          type: REMOVE_GUITAR_SUCCESS,
          payload: response.data
        });
      })
      .catch(error => {
        dispatch({
          type: REMOVE_GUITAR_FAILED,
          payload: error
        });
      });
  };
};

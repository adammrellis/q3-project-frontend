import { createStore, combineReducers, applyMiddleware } from "redux";
import locationsReducer from "./locations/reducer";
import guitarsReducer from "./guitars/reducer";
import thunk from "redux-thunk";
import logger from "redux-logger";

const rootReducer = combineReducers({
  locations: locationsReducer,
  guitars: guitarsReducer
});

const middleware = [thunk, logger];

export default createStore(rootReducer, applyMiddleware(...middleware));

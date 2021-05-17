//MAIN IMPORTS
import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

//REDUCERS IMPORTS
import { eventsReducer } from "./events/reducers";

const composedEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer = combineReducers({
  events: eventsReducer,
});

export const store = createStore(
  rootReducer,
  composedEnhancer(applyMiddleware(thunk))
);

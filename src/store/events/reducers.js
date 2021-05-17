import {
  SET_ALL_EVENTS,
  SELECT_EVENT,
  FILTER_EVENTS,
  SHOW_EVENTS,
  LESS_EVENTS,
} from "./constants";

const initalState = {
  events_list: [],
  current_event: null,
  events_displayed: [],
};

export const eventsReducer = (state = initalState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_ALL_EVENTS:
      return { ...state, events_list: payload };
    case SELECT_EVENT:
      return { ...state, current_event: payload };
    case FILTER_EVENTS:
      return { ...state, events_displayed: payload };
    case SHOW_EVENTS:
      return {
        ...state,
        events_displayed: [...state.events_displayed, ...payload],
      };
    case LESS_EVENTS:
      return {
        ...state,
        events_displayed: payload,
      };
    default:
      return state;
  }
};

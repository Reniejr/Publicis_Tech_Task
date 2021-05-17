import {
  SET_ALL_EVENTS,
  SELECT_EVENT,
  FILTER_EVENTS,
  SHOW_EVENTS,
  LESS_EVENTS,
} from "./constants";

export const setAllEvents = (eventsList) => ({
  type: SET_ALL_EVENTS,
  payload: eventsList,
});

export const selectEvent = (event) => ({ type: SELECT_EVENT, payload: event });

export const filterEvent = (eventsList) => ({
  type: FILTER_EVENTS,
  payload: eventsList,
});

export const showEvents = (eventsList) => ({
  type: SHOW_EVENTS,
  payload: eventsList,
});

export const lessEvents = (eventsId) => ({
  type: LESS_EVENTS,
  payload: eventsId,
});

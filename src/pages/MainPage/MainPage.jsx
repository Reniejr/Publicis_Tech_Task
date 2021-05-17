import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setAllEvents,
  filterEvent,
  showEvents,
  lessEvents,
  selectEvent,
} from "store/events/actions";
import { getEvents } from "utilities/api";
import { chunkArray } from "utilities";
import { Row } from "react-bootstrap";
import PageFilters from "components/PageFilters/PageFilters";
import EventCard from "components/EventCard/EventCard";
import CardSlider from "components/CardSlider/CardSlider";
import "./MainPage.scss";

const MainPage = () => {
  const eventsState = useSelector((state) => state.events);
  const dispatch = useDispatch();

  const [eventsChunk, setEventsChunk] = useState([]);
  const [chunkIndex, setChunkIndex] = useState(0);
  const [showDetails, setShowDetails] = useState([]);
  const [startSlide, setStartSlide] = useState(false);

  useEffect(() => {
    (async () => {
      const eventsList = await getEvents();
      const eventsId = eventsList.map((event) => event._id);
      const chunks = chunkArray(eventsId, 10);
      setEventsChunk(chunks);
      dispatch(setAllEvents(eventsList));
      dispatch(filterEvent(chunks[chunkIndex]));
    })();
    // dependencies are excluded to trigger only once the useEffect
  }, []);

  const displayEvents = () => {
    if (eventsChunk[chunkIndex + 1] !== undefined) {
      dispatch(showEvents(eventsChunk[chunkIndex + 1]));
      setChunkIndex(chunkIndex + 1);
    } else {
      let chunks = [...eventsState.events_displayed];
      chunks.splice(-10, 10);
      dispatch(lessEvents(chunks));
      setChunkIndex(chunkIndex - 1);
    }
  };

  const showCard = (currentIndex, nextIndex) => {
    const eventSelected = eventsState.events_list[currentIndex];
    setShowDetails([currentIndex, nextIndex]);
    dispatch(selectEvent(eventSelected));
    setStartSlide(true);
  };

  const closeHandler = () => {
    setShowDetails([]);
    setStartSlide(false);
    dispatch(selectEvent(null));
  };

  return (
    <div id="main-page">
      <PageFilters />
      <div className="showcase">
        {eventsState.current_event !== null ? (
          <CardSlider closeHandler={closeHandler} startSlide={startSlide} />
        ) : null}
        <Row>
          {eventsState.events_displayed.length > 0 ? (
            eventsState.events_displayed.map((eventId, eventI) => {
              return (
                <EventCard
                  event={eventId}
                  key={eventId}
                  index={eventI}
                  cardDetails={{ state: showDetails, functions: showCard }}
                />
              );
            })
          ) : (
            <div className="no-results">No Results</div>
          )}
        </Row>
        <button onClick={displayEvents} className="show-btn">
          {eventsChunk[chunkIndex + 1] !== undefined
            ? "Load More"
            : "Show Less"}
        </button>
      </div>
    </div>
  );
};

export default MainPage;

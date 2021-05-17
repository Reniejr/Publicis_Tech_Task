import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./EventCard.scss";

const EventCard = ({ event, cardDetails, index }) => {
  const eventState = useSelector((state) => state.events.events_list);

  const [eventSelected] = useState(eventState.find((obj) => obj._id === event));

  return eventSelected._id ? (
    <div
      className={`event-card  ${
        cardDetails.state.includes(index) ? "hidden-card" : ""
      }`}
      onClick={() =>
        cardDetails.functions(index, index % 2 === 0 ? index + 1 : index - 1)
      }
    >
      <div className="cover">
        <img src={eventSelected.image} alt="main-img" className="main-img" />
        <img
          src={eventSelected.content[0].img}
          alt="content-img"
          className="content-img"
        />
      </div>
      <div className="card-details">
        <h3>{eventSelected.name}</h3>
        <span>{eventSelected.dates}</span>
      </div>
    </div>
  ) : null;
};
export default EventCard;

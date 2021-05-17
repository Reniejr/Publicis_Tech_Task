import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { filterEvent } from "store/events/actions";
import { datesForm, typeEventForm } from "./data";
import { chunkArray } from "utilities";
import { getEvents } from "utilities/api";
import FilterForm from "../FilterForm/FilterForm";
import "./PageFilters.scss";

const PageFilters = () => {
  const eventsState = useSelector((state) => state.events);
  const dispatch = useDispatch();

  const [originalList, setOriginalList] = useState([]);

  useEffect(() => {
    (async () => {
      const events = await getEvents();
      const eventsId = events.map((event) => event._id);
      const original = chunkArray(eventsId, 10);
      setOriginalList(original);
    })();
  }, []);

  const filterByDate = (date) => {
    let datesInitials = date.toLowerCase().substring(0, 3);
    return eventsState.events_list
      .filter((obj) => obj.dates.toLowerCase().includes(datesInitials))
      .map((obj) => obj._id);
  };

  const filterByType = (type) =>
    eventsState.events_list
      .filter((obj) => obj.type.toLowerCase() === type.toLowerCase())
      .map((obj) => obj._id);

  const filterHandler = (e, filter) => {
    const defaultId = e.currentTarget.options[0].id;
    const [selectedOption] = e.currentTarget.selectedOptions;
    const filterHanlder = filter === "date" ? filterByDate : filterByType;
    let filteredArray = [];
    if (selectedOption.id !== defaultId) {
      filteredArray = filterHanlder(selectedOption.text);
    } else filteredArray = originalList[0];
    dispatch(filterEvent(filteredArray));
  };

  return (
    <nav className="page-filters">
      <h2>Title</h2>
      <div className="filters">
        <FilterForm
          inputInfos={datesForm.infos}
          optionsArray={datesForm.options}
          handlers={(e) => filterHandler(e, "date")}
        />
        <FilterForm
          inputInfos={typeEventForm.infos}
          optionsArray={typeEventForm.options}
          handlers={(e) => filterHandler(e, "type")}
        />
      </div>
    </nav>
  );
};

export default PageFilters;

import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { CircularProgressbar } from "react-circular-progressbar";
import "./CardSlider.scss";

const CardSlider = ({ closeHandler, startSlide }) => {
  const eventState = useSelector((state) => state.events.current_event);

  const [slideInterval, setSlideInterval] = useState(0);
  const [progressController, setProgressController] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (startSlide) {
      if (slideInterval === -500) {
        setSlideInterval(0);
        setCurrentSlide(0);
      } else {
        setTimeout(() => {
          setSlideInterval(slideInterval - 100);
          setCurrentSlide(currentSlide + 1);
        }, 4000);
      }
    }
  }, [startSlide, slideInterval, currentSlide]);

  useEffect(() => {
    if (startSlide) {
      progressController > 100
        ? setProgressController(0)
        : setTimeout(
            () => setProgressController(progressController + 33),
            1000
          );
    }
  }, [startSlide, progressController]);

  return (
    <div id="card-slider">
      <div className="description">
        <h2>{eventState.name}</h2>
        <p>{eventState.description}</p>
        <button onClick={closeHandler}>X</button>
      </div>
      <div className="slider">
        <div
          className="slide-container"
          style={{ marginLeft: `${slideInterval}%` }}
        >
          <div className="slide">
            <img src={eventState.image} alt={`Cover Main`} />
          </div>
          {eventState.content.map((img, imgI) => {
            return (
              <div className="slide" key={img._id}>
                <img src={img.img} alt={`Cover ${imgI}`} />
              </div>
            );
          })}
        </div>
        <div className="controllers">
          <div className="indicator">
            <div className="square"></div>
            <CircularProgressbar
              value={progressController}
              styles={{
                root: { display: currentSlide === 0 ? "" : "none" },
              }}
            />
          </div>
          {eventState.content.map((img, imgI) => {
            return (
              <div className="indicator" key={imgI}>
                <CircularProgressbar
                  value={progressController}
                  styles={{
                    root: { display: currentSlide === imgI + 1 ? "" : "none" },
                  }}
                />
                <div className="square"></div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default CardSlider;

import React from "react";
import "../styles/event.css";
import clip_1 from "../assets/Clip_1.svg";
import clip_2 from "../assets/Clip_2.svg";
import crop from "../assets/Crop.svg";
import Transcript from "../assets/Transcript.svg";
import Video_edit from "../assets/video edit.svg";
import play from "../assets/Play Icon.svg";
const Event = () => {
  return (
    <div className="container_2">
      <div className="background-img_1">
        <div className="content_container_1">
          <div className="event_container">
            <h3 className="event-content">
              B2B brands know events are where authentic moments 🤌 happen. But
              they are lost in archives after the event is over.
            </h3>
          </div>
          <div className="clip_container">
            <div className="first_clip">
              <img className="img_1" src={clip_1} alt="clip"></img>
              <img className="img_2" src={clip_2} alt="font"></img>
            </div>
            <div className="second_clip">
              <img className="img_3" src={crop} alt="clip"></img>
              <img className="img_4" src={Transcript} alt="font"></img>
            </div>
            <div className="third_clip">
              <img className="img_5" src={play} alt="font"></img>
              <img className="img_6" src={Video_edit} alt="clip"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;

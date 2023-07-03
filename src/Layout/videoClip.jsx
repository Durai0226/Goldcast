import "../styles/videoClip.css";
import videoClip from "../assets/video_Clip.mp4";
import React from "react";

const StudioClip = () => {
  return (
    <div className="container_4">
      <div className="background-img_3">
        <div className="video_container">
          <div className="video_heading_container">
            <h3 className="video_heading"> AI suggested video clips</h3>
          </div>
          <div className="video_content_container">
            <p className="video-content">
              Get more out of your events by creating always-on easily
            </p>
            <p className="video_content_1">
              consumable content - in minutes, not weeks
            </p>
          </div>
        </div>
        <div>
          <div className="video_clip_container">
            <video className="video_clip" src={videoClip} controls></video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudioClip;

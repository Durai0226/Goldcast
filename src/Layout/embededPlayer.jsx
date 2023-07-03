import "../styles/videoClip.css";
import videoClip from "../assets/video_Clip.mp4";
import React from "react";

const StudioPlayer = () => {
  return (
    <div className="container_7">
      <div className="background-img_6">
        <div className="video_container">
          <div className="video_heading_container">
            <h3 className="video_heading">On-demand embeddable player</h3>
          </div>
          <div className="video_content_container">
            <p className="video-content">
              Auto-generate key event moments and make them available
            </p>
            <p className="video_content_1">
              on-demand through our embeddable video player
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

export default StudioPlayer;

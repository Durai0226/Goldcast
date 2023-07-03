import "../styles/videoClip.css";
import videoClip from "../assets/video_Clip.mp4";
import React from "react";

const StudioEdit = () => {
  return (
    <div className="container_5">
      <div className="background-img_4">
        <div className="video_container">
          <div className="video_heading_container">
            <h3 className="video_heading">  Video Clip Editor</h3>
          </div>
          <div className="video_content_container">
            <p className="video-content">
              Clip interesting moments that follow your brand guidelines all in
            </p>
            <p className="video_content_1">
              your browser. As easy as editing a document.
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

export default StudioEdit;

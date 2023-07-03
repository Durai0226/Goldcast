import "../styles/videoClip.css";
import videoClip from "../assets/video_Clip.mp4";
import React from "react";

const StudioBlog = () => {
  return (
    <div className="container_6">
      <div className="background-img_5">
        <div className="video_container">
          <div className="video_heading_container">
            <h3 className="video_heading">Insightful SEO-rich blog posts</h3>
          </div>
          <div className="video_content_container">
            <p className="video-content">
              Boost organic traffic by easily extracting and summarizing event
            </p>
            <p className="video_content_1">
              takeaways into a digestible blog post
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

export default StudioBlog;

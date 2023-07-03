import React from "react";
import "../styles/future.css";
import AI from "../assets/Ai.svg";
import Email from "../assets/Emails.svg";
import Summary from "../assets/Summaries.svg";

export const StudioFuture = () => {
  return (
    <div className="future_container">
      <div className="future_background_img">
        <div className="future_heading_container">
          <h3 className="future_heading"> AI suggested video clips</h3>
        </div>
        <div className="future_card_container">
          <div className="future_card">
            <div className="future_img_container">
              <img className="future_img" src={AI} alt="ai"></img>
            </div>
            <div className="future_text_container">
              <span className="future_text">
                AI transcripts in 50+{" "}
                <strong className="future_text_1">languages</strong>
              </span>
            </div>
          </div>
          <div className="future_card">
            <div className="future_img_container">
              <img className="future_img" src={Email} alt="email"></img>
            </div>
            <div className="future_text_container">
              <span className="future_text">
                Auto-generated post event{" "}
                <strong className="future_text_1">email</strong>
              </span>
            </div>
          </div>
          <div className="future_card">
            <div className="future_img_container">
              <img className="future_img" src={Summary} alt="summary"></img>
            </div>
            <div className="future_text_container">
              <span className="future_text">
                Auto-generated
                <strong className="future_text_1">summaries</strong>
                for executives and sales teams
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

import React from "react";
import "../styles/content.css";
import Logo from "../assets/GsLogo_1.svg";
import Down from "../assets/D_arrow.svg";
const JoinUs = () => {
  return (
    <div className="container_1">
      <div className="background-img">
        <div className="content_container">
          <img className="logo_img" src={Logo} alt="logo" />
        </div>
        <div className="studio_content">
          <div className="studio_container">
            <h1 className="studio_name">Content </h1>
            <h1 className="studio_name_1">Studio</h1>
          </div>
          <div className="studio_content_details">
            <p className="studio_details">
              The first <strong className="highlight_text">AI-powered </strong>{" "}
              studio to turn your events into a multi-channel content strategy
            </p>
          </div>
          <div className="btn_container">
            <div className="enter_mail">
              <button className="mail_btn">Enter your email</button>
            </div>
            <div className="join">
              <button className="join_btn">Join waitlist</button>
            </div>
          </div>
          <div className="arrow_container">
            <div className="arrow">
              <img src={Down} alt="arrow"></img>
            </div>
            <div className="join">
              <button className="join_btn">Join waitlist</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinUs;

import "../styles/studio.css";
import Q from "../assets/Q.svg";
import logo from "../assets/Logo1.svg";
import profile from "../assets/Photo.svg";
import logo1 from "../assets/Logo2.svg";
import profile1 from "../assets/Photo (1).svg";
import logo2 from "../assets/Logo3.svg";
import profile2 from "../assets/Photo (2).svg";
import React from "react";

const ContentStudio = () => {
  return (
    <div className="container_3">
      <div>
        <div className="content_studio_container">
          <div className="heading_container">
            <h1 className="heading-content">Meet your</h1>
            <h1 className="heading-content_1">Content Studio</h1>
          </div>
          <div className="studio_content_container">
            <p className="studio-content">
              Get more out of your events by creating always-on easily
            </p>
            <p className="studio_content_1">
              consumable content - in minutes, not weeks
            </p>
          </div>
          <div className="studio_marketer_container">
            <div className="market_container">
              <span className="marketer">Event Marketer</span>
              <span className="marketer">Demand Gen Marketer</span>
              <span className="marketer">Content Marketer</span>
            </div>
          </div>
          <div className="btn_container_1">
            <div className="join">
              <button className="join_btn">Join waitlist</button>
            </div>
          </div>
          <div className="profile_container">
            <div className="profile">
              <div className="companyLogo">
                <img src={Q} alt="symbol" />
                <img src={logo} alt="logo" />
              </div>
              <div className="profile_details">
                <p className="profile_content">
                  Without you showing me anything else, I would like to buy this
                </p>
              </div>
              <div className="person_profile">
                <div className="person_container">
                  <img src={profile} className="profile_img" alt="profile" />
                </div>
                <div className="profile_name_container">
                  <span className="person_name">Justin Keller</span>
                  <span className="person_post">SVP, Marketing</span>
                </div>
              </div>
            </div>
            <div className="profile">
              <div className="companyLogo">
                <img src={Q} alt="symbol" />
                <img src={logo1} alt="logo" />
              </div>
              <div className="profile_details">
                <p className="profile_content">
                  Without you showing me anything else, I would like to buy this
                </p>
              </div>
              <div className="person_profile">
                <div className="person_container">
                  <img src={profile1} className="profile_img" alt="profile" />
                </div>
                <div className="profile_name_container">
                  <span className="person_name">Ashleigh Frank</span>
                  <span className="person_post">
                    Senior Demand Gen Executive
                  </span>
                </div>
              </div>
            </div>
            <div className="profile">
              <div className="companyLogo">
                <img src={Q} alt="symbol" />
                <img src={logo2} alt="logo" />
              </div>
              <div className="profile_details">
                <p className="profile_content">
                  Without you showing me anything else, I would like to buy this
                </p>
              </div>
              <div className="person_profile">
                <div className="person_container">
                  <img src={profile2} className="profile_img" alt="profile" />
                </div>
                <div className="profile_name_container">
                  <span className="person_name">Davi Schmidt</span>
                  <span className="person_post">
                    Director, Demand Generation
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentStudio;

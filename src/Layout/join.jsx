import "../styles/join.css";
import help from "../assets/help.svg";
import React from "react";

const StudioJoin = () => {
  return (
    <div className="joinList_container">
      <div className="join_background-img">
        <div className="join_heading_container">
          <h3 className="join_heading"> Join the Waitlist</h3>
        </div>
        <div className="join_wishlist">
          <div className="join_container">
            <form className="form">
              <span className="inputContainer">
                <input
                  className="input1"
                  placeholder="Username"
                  type="text"
                ></input>
              </span>
              <span className="inputContainer">
                <input
                  className="input1"
                  placeholder="Email"
                  type="text"
                ></input>
              </span>
              <span className="inputContainer">
                <input className="input1" placeholder="Phone No"></input>
              </span>

              <div className="submit_Container">
                <button className="join_Btn" type="submit">
                  Join
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="qus_container">
          <div className="qus_heading_container">
            <h3 className="qus_heading"> Frequently Asked Questions</h3>
          </div>
          <div className="qus_heading_container_1">
            <h6 className="qus_heading_1">
               When will the product be available in general availability?
            </h6>
            <span className="ans_heading">
               The product is expected to be available for all customers in fall
              of 2023
            </span>
          </div>
          <div className="qus_heading_container_1">
            <h6 className="qus_heading_1">
              Why is the waitlist there in the first place?
            </h6>
            <span className="ans_heading">
              There are a lot of AI based products that don’t generate useful
              output. We want to roll the product out slowly, at the right pace,
              and get enough feedback on the output quality before we release in
              general availability
            </span>
          </div>
          <div className="qus_heading_container_1">
            <h6 className="qus_heading_1">
              What happens once I sign up for a waitlist?
            </h6>
            <span className="ans_heading">
              Signing up for the waitlist grants you early access to our Content
              Studio. We’ll roll out out the invites slowly and onboard
              customers by batches.
            </span>
          </div>
          <div className="qus_heading_container_2">
            <h6 className="more_heading">More questions?</h6>
            <a className="help">
              <img src={help} alt="help"></img>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudioJoin;

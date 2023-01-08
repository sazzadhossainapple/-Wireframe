import React from "react";
import "./ourMission.css";
import IMG1 from "../../../Assets/Ellipse 23.png";
import VedioIMG from "../../../Assets/Group 117.png";
import BackgroundImg from "../../../Assets/background1.png";
import Icon1 from "../../../Assets/dungeon.png";
import Icon2 from "../../../Assets/Vector-2.png";
import Icon3 from "../../../Assets/Vector-1.png";

const OurMission = () => {
  const ourMissions = [
    {
      id: 1,
      img: Icon1,
      title: "UAE Free Zone Company",
      dec: `Your registration agent, will answer all
    of your questions and help you to reach
    a conclusion that meets your objectives
    of investing in the UAE.
    `,
      button: "Get Started",
    },
    {
      id: 2,
      img: Icon2,
      title: "Dubai Local Companies",
      dec: `The Dubai LLC formation documents
      are actually articles of organization or a
      certificate of organization. You can get
      yours today.
    `,
      button: "Get Started",
    },
    {
      id: 3,
      img: Icon3,
      title: "Offshore Compamies",
      dec: `You can register an offshore company
      and open its bank account in Dubai.
      Your agent will help you along all the
      process.
    `,
      button: "Get Started",
    },
  ];

  return (
    <section className="ourMission-container">
      <div className="">
        <div>
          <img className="background-Img" src={BackgroundImg} alt="" />
        </div>
        <div className="watch-vedio">
          <div className="watch-content">
            <p>Watch the video about UAE or Offshore Company Registration</p>
          </div>

          <div>
            <div className="vedio-img">
              <div>
                <img src={VedioIMG} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="img1">
          <img src={IMG1} alt="" />
        </div>
        <div className="title-content">
          <h2>
            <span>Dedicated</span> <br /> to our mission we are
          </h2>
          <p>
            Our services include Company Formation & Renewals, Trust &
            Fiduciary, Tax Residency Setup With Family, Bank Accounts, Remote
            Management, Stock Trading <br></br>Platforms, Ownership Solutions.
          </p>
        </div>
      </div>
      <div className="our-mission">
        <div className="our-mission-items">
          {ourMissions.map((ourMission) => (
            <div key={ourMission.id}>
              <img className="our-mission-img" src={ourMission.img} alt="" />
              <h3 className="our-mission-title">{ourMission.title}</h3>
              <p className="our-mission-dec">{ourMission.dec}</p>
              <p className="our-mission-btn">{ourMission.button}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurMission;

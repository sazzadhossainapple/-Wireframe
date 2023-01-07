import React from "react";
import "./banner.css";
import IMG1 from "../../../Assets/Ellipse 16.png";
import IMG2 from "../../../Assets/Ellipse 20.png";
import IMG3 from "../../../Assets/Ellipse 21.png";
import IMG4 from "../../../Assets/Ellipse 19-1.png";
import BannerImg from "../../../Assets/ILLUSTRATION.png";

import { FaSearch } from "react-icons/fa";
import Button from "../../../components/Button/Button";

const Banner = () => {
  return (
    <section className="banner-container">
      <div>
        <img className="img1" src={IMG1} alt="" />
        <img className="img2" src={IMG2} alt="" />
      </div>
      <div className="search-field">
        <div className="search-icon">
          <FaSearch className="icon" />
        </div>
        <div>
          <input type="text" placeholder="Search a Term | Topic" />
        </div>
      </div>

      <div className="img3">
        <img src={IMG3} alt="" />
      </div>
      <div className="img4">
        <img src={IMG4} alt="" />
      </div>

      {/* content text */}
      <div className="banner-content">
        <div className="banner-contnet-left">
          <div>
            <p className="small-title">Claim a Free Quote</p>
            <h1 className="title">
              <span>Get started</span> on fulfilling your Dubai or UAE dream.
            </h1>
          </div>
          <div>
            <p className="small-title">UAE & Offshore Company</p>
            <p className="text-content">
              We provide you with information about UAE or Offshore Company
              Registration & help you setup your company with a bank account and
              visas.
            </p>
          </div>
          <div>
            <Button classes="btn btn-start">Start a Company</Button>
            <Button classes="btn-renew">Renew a Company</Button>
          </div>
        </div>
        <div className="banner-contnet-right">
          <img src={BannerImg} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Banner;

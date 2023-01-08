import React from "react";
import "./companyBenefit.css";
import IMG1 from "../../../Assets/Ellipse 16.png";
import IMG2 from "../../../Assets/Ellipse 24.png";
import IMG3 from "../../../Assets/Ellipse 12.png";
import IMG4 from "../../../Assets/Ellipse 19.png";
import IMG5 from "../../../Assets/Ellipse 15.png";
import CardBenefit from "../../../components/CardBenefit/CardBenefit";
import CardImg1 from "../../../Assets/ILLUSTRATION 03  1.png";
import CardImg2 from "../../../Assets/Group.png";
import CardImg3 from "../../../Assets/Group-1.png";
import CardImg4 from "../../../Assets/Group-2.png";
import ArrowIcon from "../../../Assets/Vector.png";

const CompanyBenefit = () => {
  return (
    <section className="company-benefit-container">
      <div>
        <img className="img1" src={IMG1} alt="" />
        <img className="img2" src={IMG2} alt="" />
      </div>

      <div className="company-benefit-content">
        {/* left card */}
        <div>
          <div className="conpany-contnet-text">
            <h3>
              Learn the ways in which you can benefit from a UAE/Offshore
              Company. Then get started on fulfilling your UAE dream.
            </h3>
            <p>Claim a Free Quote</p>
          </div>
          {/* card itmes-1 */}
          <CardBenefit classes="card-items-1">
            <div>
              <div className="card-img">
                <img src={CardImg1} alt="" />
              </div>

              <h2 className="card-title">Bank Account Setup</h2>
              <p className="card-text">
                There are many banks in the United Arab Emirates [UAE]. Both
                locally owned and branches of multinational ones. Foreign banks
                adjust according to their parent s strategies and have changed
                local requirements overnight in the past. But we are here to
                help you.
              </p>
              <div className="arrow">
                <p>Learn more</p>
                <img src={ArrowIcon} alt="" />
              </div>
            </div>
          </CardBenefit>

          <div className="company-img3">
            <img src={IMG3} alt="" />
          </div>
          {/* card itmes-4 */}
          <CardBenefit classes="card-items-4">
            <div>
              <div className="card-img">
                <img src={CardImg4} alt="" />
              </div>

              <h2 className="card-title">UAE Company Visas</h2>
              <p className="card-text">
                Your application for visas is critical especially if you intend
                to move to Dubai. This becomes even more urgent if your family
                will also move with you. All the paperwork is done on your
                behalf smoothly so that you may only focus on doing what matters
                most to you.
              </p>
              <div className="arrow">
                <p>Learn more</p>
                <img src={ArrowIcon} alt="" />
              </div>
            </div>
          </CardBenefit>
        </div>

        {/* right card */}
        <div>
          {/* card itmes-2 */}
          <CardBenefit>
            <div>
              <div className="card-img">
                <img src={CardImg2} alt="" />
              </div>

              <h2 className="card-title">Advice & Guidance</h2>
              <p className="card-text">
                All activities in the UAE are licensed. Whether manufacturing,
                finance, trading, marketing, consultancy or restaurants. In some
                countries only manufacturing is licensed. In others there is a
                threshold below which business are encouraged. Get our
                insightfull guidance today.
              </p>
              <div className="arrow">
                <p>Learn more</p>
                <img src={ArrowIcon} alt="" />
              </div>
            </div>
          </CardBenefit>
          <div className="company-img4">
            <img src={IMG4} alt="" />
          </div>
          <div className="company-img5">
            <img src={IMG5} alt="" />
          </div>

          {/* card itmes-3 */}
          <CardBenefit classes="card-items-3">
            <div>
              <div className="card-img">
                <img src={CardImg3} alt="" />
              </div>

              <h2 className="card-title">Registration Document Perparation</h2>
              <p className="card-text">
                Several documents must be prepared to start the process of
                registering a new company in the United Arab Emirates. Be it a
                Dubai local company, a free zone one or an offshore entity. Your
                registered agent is dedicated to get this done for you for a
                seamless process.
              </p>
              <div className="arrow">
                <p>Learn more</p>
                <img src={ArrowIcon} alt="" />
              </div>
            </div>
          </CardBenefit>
          <div className="conpany-contnet-text text-company">
            <h3>
              We have gathered a team of professionals to craft adequate
              services you can rely on for a friction free setup in UAE.
            </h3>
            <div className="arrow">
              <p>More about our services</p>
              <img src={ArrowIcon} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyBenefit;

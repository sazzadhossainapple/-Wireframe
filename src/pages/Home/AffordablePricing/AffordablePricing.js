import React from "react";
import "./affordablePricing.css";
import IMG1 from "../../../Assets/Ellipse 7.png";
import IMG2 from "../../../Assets/Ellipse 12.png";
import IMG3 from "../../../Assets/Ellipse 11.png";
import IMG4 from "../../../Assets/Ellipse 8.png";
import IMG5 from "../../../Assets/background2.png";
import { FaRegCheckCircle } from "react-icons/fa";
import Button from "../../../components/Button/Button";

const AffordablePricing = () => {
  const pricingDatas = [
    {
      id: 1,
      address: "AJMAN OFFSHORE",
      price: "$2,997",
      payment: "One Time Payment",
      company: `Ajman Offshore New Company
            formation includes`,
      desc: [
        "Attestation Charges",
        "Registered Agent",
        "Registered Office",
        "Varal Administrative",
        "Preparing Statutory File",
        "Liasing with Registration Authorities",
        "Due Diligence Appraisal",
        "Keeping The Register",
        "Seal Charges",
        "Certificate of Good Standing",
      ],
      button: "Continue",
      colorBg: "#ffffff",
      colorText: "#525ded",
      colorPaymentText: "#c9c9c9",
      addressFontSize: "1.3rem",
      addressMarginTop: "2rem",
      marginTop: "-10px",
    },
    {
      id: 2,
      address: "RAK ICC",
      price: "$2,997",
      payment: "One Time Payment",
      company: `Rak Icc New Company formation
      includes`,
      desc: [
        "Attestation Charges",
        "Registered Agent",
        "Registered Office",
        "Varal Administrative",
        "Preparing Statutory File",
        "Liasing with Registration Authorities",
        "Due Diligence Appraisal",
        "Keeping The Register",
        "Seal Charges",
        "Certificate of Good Standing",
      ],
      button: "Continue",
      colorBg: "#525ded",
      colorText: "#ffffff",
      colorPaymentText: "#ffffff",
      addressFontSize: "2rem",
      addressMarginTop: "0.6rem",
      marginTop: "0px",
    },
    {
      id: 3,
      address: "SHARJAH MEDIA CITY",
      price: "$4,124 ",
      payment: "One Time Payment",
      company: `Sharjah Media City New
      Company formation include `,
      desc: [
        "Attestation Charges",
        "Registered Agent",
        "Registered Office",
        "Varal Administrative",
        "Preparing Statutory File",
        "Liasing with Registration Authorities",
        "Due Diligence Appraisal",
        "Keeping The Register",
        "Seal Charges",
        "Certificate of Good Standing",
      ],
      button: "Continue",
      colorBg: "#ffffff",
      colorText: "#525ded",
      colorPaymentText: "#c9c9c9",
      addressFontSize: "1.3rem",
      addressMarginTop: "2rem",
      marginTop: "-10px",
    },
  ];

  return (
    <section className="pricing-container">
      <div className="title-content">
        <h2>
          Most <span>popular affordable pricing</span> per jurisdictions are
          brought to you to <br /> kick off your adventure.
        </h2>
      </div>
      <div className="pricing-img1">
        <img src={IMG1} alt="" />
      </div>
      <div className="pricing-img2">
        <img src={IMG2} alt="" />
      </div>
      <div className="pricing-img3">
        <img src={IMG3} alt="" />
      </div>
      <div className="pricing-img4">
        <img src={IMG4} alt="" />
      </div>
      <div className="pricing-items">
        {pricingDatas.map((pricingData) => (
          <div
            key={pricingData.id}
            className="pricing-card"
            style={{
              backgroundColor: `${pricingData.colorBg}`,
              color: `${pricingData.colorText}`,
            }}
          >
            <div className="pricing-card-details">
              <h3
                className="company-address"
                style={{
                  fontSize: `${pricingData.addressFontSize},
                  `,
                  marginTop: `${pricingData.addressMarginTop}`,
                }}
              >
                {pricingData.address}
              </h3>
              <div
                className="price"
                style={{
                  marginTop: `${pricingData.marginTop}`,
                }}
              >
                <h2 className="price-amount">{pricingData.price}</h2>
                <p
                  style={{
                    color: `${pricingData.colorPaymentText}`,
                  }}
                >
                  {pricingData.payment}
                </p>
              </div>
              <p className="company-name">{pricingData.company}</p>
              <div>
                {pricingData?.desc.map((description, inx) => (
                  <div
                    key={inx}
                    className="price-text-desc"
                    style={{
                      color: `${pricingData.colorText}`,
                    }}
                  >
                    <FaRegCheckCircle className="price-icon" />
                    <p>{description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="pricing-btn-text">
              <Button classes="pricing-btn">{pricingData.button}</Button>
            </div>
          </div>
        ))}
      </div>
      <div className="pricing-img5">
        <img src={IMG5} alt="" />
      </div>
    </section>
  );
};

export default AffordablePricing;

import React from "react";
import "./cardBenefit.css";

const CardBenefit = ({ children, classes }) => {
  return <div className={`card-container ${classes}`}>{children}</div>;
};

export default CardBenefit;

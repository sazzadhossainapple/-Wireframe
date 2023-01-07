import React from "react";
import "./button.css";

const Button = ({ children, classes }) => {
  return <button className={`${classes}`}>{children}</button>;
};

export default Button;
